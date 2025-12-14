import { ref, onMounted } from 'vue';

const isDark = ref(false);

export function useDarkMode() {
    const toggleDarkMode = () => {
        isDark.value = !isDark.value;
        updateTheme();
        localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
    };

    const updateTheme = () => {
        if (isDark.value) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    onMounted(() => {
        // Check localStorage or system preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            isDark.value = savedTheme === 'dark';
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            isDark.value = true;
        }
        // Apply the theme
        updateTheme();
    });

    return {
        isDark,
        toggleDarkMode
    };
}
