<script setup>
import { 
  Zap, 
  LayoutGrid, 
  ShoppingBag, 
  PieChart, 
  MessageSquare, 
  Users, 
  Settings, 
  LogOut,
  Home,
  Calendar,
  Wallet,
  Bell
} from 'lucide-vue-next';

// Mapping icons based on the visual approximation
// Top logo: Orange generic icon
// Nav items: Home, Grid/Dashboard, ShoppingBag, Wallet/Card, Users, Messages, PieChart (Analytics), Settings
</script>

<template>
  <aside class="flex flex-col items-center w-20 h-screen py-6 bg-white border-r border-gray-200">
    <!-- Logo -->
    <div class="mb-8">
      <div class="flex items-center justify-center w-10 h-10 bg-orange-500 rounded-xl cursor-pointer hover:bg-orange-600 transition-colors">
        <!-- Logo Icon -->
        <Zap class="w-6 h-6 text-white" />
      </div>
    </div>

    <!-- Navigation -->
    <nav class="flex flex-col flex-1 gap-6 w-full items-center">
      <button class="p-3 text-gray-400 rounded-xl hover:bg-orange-50 hover:text-orange-500 transition-colors">
        <Home class="w-6 h-6" />
      </button>

      <button class="relative p-3 text-white bg-orange-500 rounded-xl shadow-lg shadow-orange-500/30">
        <LayoutGrid class="w-6 h-6" />
        <span class="absolute top-2 right-2 w-2 h-2 bg-white rounded-full"></span>
      </button>

      <button class="p-3 text-gray-400 rounded-xl hover:bg-orange-50 hover:text-orange-500 transition-colors">
        <ShoppingBag class="w-6 h-6" />
      </button>

      <button class="p-3 text-gray-400 rounded-xl hover:bg-orange-50 hover:text-orange-500 transition-colors">
         <Wallet class="w-6 h-6" />
      </button>
      
      <button class="p-3 text-gray-400 rounded-xl hover:bg-orange-50 hover:text-orange-500 transition-colors">
        <Users class="w-6 h-6" />
      </button>

      <button class="p-3 text-gray-400 rounded-xl hover:bg-orange-50 hover:text-orange-500 transition-colors">
        <MessageSquare class="w-6 h-6" />
      </button>

      <button class="p-3 text-gray-400 rounded-xl hover:bg-orange-50 hover:text-orange-500 transition-colors">
         <PieChart class="w-6 h-6" />
      </button>

      <button class="p-3 text-gray-400 rounded-xl hover:bg-orange-50 hover:text-orange-500 transition-colors">
         <Bell class="w-6 h-6" />
      </button>
    </nav>

    <!-- Bottom Actions -->
    <div class="flex flex-col gap-6 mt-auto items-center w-full">
      <button class="p-3 text-gray-400 rounded-xl hover:bg-gray-50 transition-colors">
        <Settings class="w-6 h-6" />
      </button>
      <button class="p-3 text-gray-400 rounded-xl hover:text-red-500 transition-colors">
        <LogOut class="w-6 h-6 transform rotate-180" />
      </button>
    </div>
  </aside>
</template>
