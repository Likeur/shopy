<script setup>
import Sidebar from './components/Sidebar.vue';
import Header from './components/Header.vue';
import Dashboard from './components/Dashboard.vue';
</script>

<template>
  <div class="flex h-screen bg-zinc-50 dark:bg-zinc-900 font-sans text-zinc-900 dark:text-zinc-100 transition-colors">
    <Sidebar />
    
    <div class="flex-1 flex flex-col h-screen overflow-hidden">
      <Header />
      
      <main class="flex-1 overflow-y-auto">
        <Dashboard />
      </main>
    </div>
  </div>
</template>

