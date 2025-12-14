<script setup>
import Sidebar from './components/Sidebar.vue';
import Header from './components/Header.vue';
import Dashboard from './components/Dashboard.vue';
</script>

<template>
  <div class="flex h-screen bg-gray-50 font-sans text-gray-900">
    <Sidebar />
    
    <div class="flex-1 flex flex-col h-screen overflow-hidden">
      <Header />
      
      <main class="flex-1 overflow-y-auto">
        <Dashboard />
      </main>
    </div>
  </div>
</template>

