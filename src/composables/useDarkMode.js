import { ref, onMounted } from 'vue';

const isDark = ref(false);

export function useDarkMode() {
    const toggleDarkMode = () => {
        isDark.value = !isDark.value;
        updateTheme();
    };

    const updateTheme = () => {
        if (isDark.value) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    onMounted(() => {
        // Check initial preference (optional, but good practice)
        if (document.documentElement.classList.contains('dark')) {
            isDark.value = true;
        }
    });

    return {
        isDark,
        toggleDarkMode
    };
}
