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
  Calendar,
  Wallet,
  Bell
} from 'lucide-vue-next';

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
      <!-- Overview (Active) -->
      <button class="group relative p-3 text-orange-500 bg-orange-50 rounded-xl border border-orange-100">
        <LayoutGrid class="w-6 h-6" />
        <span class="absolute right-0 top-2 w-1.5 h-1.5 bg-orange-400 rounded-full translate-x-1/2"></span>
        
        <!-- Tooltip -->
        <span class="absolute left-full top-1/2 -translate-y-1/2 ml-4 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
           Overview
        </span>
      </button>

      <!-- Shopping Bag -->
      <button class="group relative p-3 text-gray-400 rounded-xl hover:bg-gray-50 hover:text-orange-500 transition-colors">
        <ShoppingBag class="w-6 h-6" />
        <span class="absolute left-full top-1/2 -translate-y-1/2 ml-4 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
           Products
        </span>
      </button>

      <!-- Wallet -->
      <button class="group relative p-3 text-gray-400 rounded-xl hover:bg-gray-50 hover:text-orange-500 transition-colors">
         <Wallet class="w-6 h-6" />
         <span class="absolute left-full top-1/2 -translate-y-1/2 ml-4 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
           Wallet
        </span>
      </button>
      
      <!-- Users -->
      <button class="group relative p-3 text-gray-400 rounded-xl hover:bg-gray-50 hover:text-orange-500 transition-colors">
        <Users class="w-6 h-6" />
        <span class="absolute left-full top-1/2 -translate-y-1/2 ml-4 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
           Customers
        </span>
      </button>

      <!-- Messages -->
      <button class="group relative p-3 text-gray-400 rounded-xl hover:bg-gray-50 hover:text-orange-500 transition-colors">
        <MessageSquare class="w-6 h-6" />
        <span class="absolute left-full top-1/2 -translate-y-1/2 ml-4 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
           Messages
        </span>
      </button>

      <!-- Analytics -->
      <button class="group relative p-3 text-gray-400 rounded-xl hover:bg-gray-50 hover:text-orange-500 transition-colors">
         <PieChart class="w-6 h-6" />
         <span class="absolute left-full top-1/2 -translate-y-1/2 ml-4 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
           Analytics
        </span>
      </button>
    </nav>

    <!-- Bottom Actions -->
    <div class="flex flex-col gap-6 mt-auto items-center w-full pb-6">
      <button class="group relative p-3 text-gray-400 rounded-xl hover:bg-gray-50 transition-colors">
        <Settings class="w-6 h-6" />
         <span class="absolute left-full top-1/2 -translate-y-1/2 ml-4 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
           Settings
        </span>
      </button>
      <button class="group relative p-3 text-gray-400 rounded-xl hover:text-red-500 transition-colors">
        <LogOut class="w-6 h-6 transform rotate-180" />
         <span class="absolute left-full top-1/2 -translate-y-1/2 ml-4 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
           Logout
        </span>
      </button>
    </div>
  </aside>
</template>
