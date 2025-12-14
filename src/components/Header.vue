<script setup>
import { ref } from 'vue';
import { Search, Bell, Moon, Sun, ChevronDown, User, Settings, LogOut, FileText, BadgeCheck, Menu, Github } from 'lucide-vue-next';
import { useDarkMode } from '../composables/useDarkMode';

defineEmits(['toggle-menu']);

const isNotificationsOpen = ref(false);
const isProfileOpen = ref(false);
const { isDark, toggleDarkMode } = useDarkMode();

const notifications = [
  { id: 1, title: 'New Order Received', time: '2 min ago', isUnread: true },
  { id: 2, title: 'Server Limit Reached', time: '1 hr ago', isUnread: false },
  { id: 3, title: 'New Message from Anna', time: '2 hrs ago', isUnread: true },
];

const toggleNotifications = () => {
    isNotificationsOpen.value = !isNotificationsOpen.value;
    if (isNotificationsOpen.value) isProfileOpen.value = false;
};

const toggleProfile = () => {
    isProfileOpen.value = !isProfileOpen.value;
    if (isProfileOpen.value) isNotificationsOpen.value = false;
};

</script>

<template>
  <header class="flex items-center justify-between px-4 lg:px-8 py-5 bg-white dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800 transition-colors">
    <!-- Left Section: Menu + Breadcrumbs -->
    <div class="flex items-center gap-4">
        <button @click="$emit('toggle-menu')" class="lg:hidden p-2 -ml-2 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg">
            <Menu class="w-6 h-6" />
        </button>

        <!-- Breadcrumbs -->
        <div class="flex items-center gap-2 text-sm font-medium hidden sm:flex">
            <span class="text-zinc-900 dark:text-white font-bold text-lg transition-colors">Fikri Store</span>
            <ChevronDown class="w-4 h-4 text-zinc-400" />
            <span class="text-zinc-300 mx-2">/</span>
            <span class="text-zinc-500">Home</span>
        </div>
    </div>

    <!-- Search Bar -->
    <div class="flex-1 max-w-xl mx-4 lg:mx-8">
      <div class="relative">
        <Search class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
        <input 
          type="text" 
          placeholder="Search or Press '/' for commands"
          class="w-full pl-10 pr-4 py-2.5 bg-zinc-50 dark:bg-zinc-800 border-none rounded-xl text-sm focus:ring-2 focus:ring-orange-100 dark:focus:ring-orange-900 focus:bg-white dark:focus:bg-zinc-800 transition-all outline-none placeholder:text-zinc-400 text-zinc-600 dark:text-zinc-200"
        />
      </div>
    </div>

    <!-- Right Actions -->
    <div class="flex items-center gap-4 relative">
      <!-- Notification -->
      <div class="relative">
        <button 
            @click="toggleNotifications"
            class="relative p-2.5 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors"
        >
            <Bell class="w-5 h-5 text-zinc-600 dark:text-zinc-300" />
            <span class="absolute top-2 right-2.5 w-2 h-2 bg-red-500 border-2 border-white dark:border-zinc-800 rounded-full"></span>
        </button>
        
        <!-- Notification Dropdown -->
        <div v-if="isNotificationsOpen" class="absolute right-0 top-14 w-80 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl shadow-xl z-50 overflow-hidden">
            <div class="px-4 py-3 border-b border-zinc-50 dark:border-zinc-800 flex justify-between items-center">
                <h3 class="font-bold text-zinc-900 dark:text-white">Notifications</h3>
                <span class="text-xs text-orange-500 font-medium cursor-pointer">Mark all read</span>
            </div>
            <div class="max-h-[300px] overflow-y-auto">
                <div v-for="notif in notifications" :key="notif.id" class="px-4 py-3 hover:bg-zinc-50 dark:hover:bg-zinc-800 cursor-pointer border-b border-zinc-50 dark:border-zinc-800 last:border-0">
                    <div class="flex items-start gap-3">
                        <div class="mt-1 w-2 h-2 rounded-full shrink-0" :class="notif.isUnread ? 'bg-orange-500' : 'bg-zinc-300 dark:bg-zinc-600'"></div>
                        <div>
                            <p class="text-sm text-zinc-800 dark:text-zinc-200 font-medium line-clamp-1">{{ notif.title }}</p>
                            <p class="text-xs text-zinc-400 mt-0.5">{{ notif.time }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-3 text-center border-t border-zinc-50 dark:border-zinc-800">
                <button class="text-xs font-semibold text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white">View All Notifications</button>
            </div>
        </div>
      </div>

      <!-- GitHub Link -->
      <a 
        href="https://github.com/Likeur" 
        target="_blank"
        class="p-2.5 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors"
      >
        <Github class="w-5 h-5 text-zinc-600 dark:text-zinc-300" />
      </a>

      <!-- Dark Mode Toggle -->
      <button 
        @click="toggleDarkMode"
        class="p-2.5 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors"
      >
        <Moon v-if="!isDark" class="w-5 h-5 text-zinc-600 dark:text-zinc-300" />
        <Sun v-if="isDark" class="w-5 h-5 text-yellow-500" />
      </button>

      <!-- Profile -->
      <div class="relative">
        <button 
            @click="toggleProfile"
            class="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-700 overflow-hidden cursor-pointer hover:ring-4 hover:ring-indigo-100 dark:hover:ring-indigo-900 transition-all focus:outline-none"
        >
            <img src="/like.png" alt="Profile" class="w-full h-full object-cover" />
        </button>

        <!-- Profile Dropdown -->
        <div v-if="isProfileOpen" class="absolute right-0 top-14 w-64 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl shadow-xl z-50 overflow-hidden">
            <div class="p-4 border-b border-zinc-50 dark:border-zinc-800 flex items-center gap-3">
                <img src="/like.png" alt="Profile" class="w-10 h-10 rounded-full object-cover border border-zinc-200 dark:border-zinc-700" />
                <div>
                    <p class="text-sm font-bold text-zinc-900 dark:text-white">Likeur</p>
                    <p class="text-xs text-zinc-500 dark:text-zinc-400">Admin Account</p>
                </div>
            </div>
            <div class="p-2">
                <button class="w-full flex items-center gap-3 px-3 py-2 text-sm text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-lg transition-colors">
                    <User class="w-4 h-4" /> My Profile
                </button>
                <button class="w-full flex items-center gap-3 px-3 py-2 text-sm text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-lg transition-colors">
                    <Settings class="w-4 h-4" /> Account Settings
                </button>
                 <button class="w-full flex items-center gap-3 px-3 py-2 text-sm text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-lg transition-colors">
                    <BadgeCheck class="w-4 h-4" /> Subscription
                </button>
            </div>
            <div class="p-2 border-t border-zinc-50 dark:border-zinc-800">
                <button class="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-lg transition-colors">
                    <LogOut class="w-4 h-4" /> Sign Out
                </button>
            </div>
        </div>
      </div>
    </div>
  </header>
</template>
