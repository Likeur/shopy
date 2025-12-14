<script setup>
import { TrendingUp, TrendingDown } from 'lucide-vue-next';

defineProps({
  title: String,
  value: String,
  trend: Number, // Percentage
  trendLabel: {
    type: String,
    default: 'vs last month'
  },
  icon: String // Optional icon name
});
</script>

<template>
  <div class="p-6 bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 rounded-2xl hover:border-zinc-200 dark:hover:border-zinc-600 transition-colors">
    <div class="flex items-center gap-3 mb-4 text-zinc-500 dark:text-zinc-400">
       <span class="p-1 rounded bg-zinc-50 dark:bg-zinc-700 border border-zinc-100 dark:border-zinc-600" v-if="icon">
         <!-- Icon slot or dynamic icon -->
         <slot name="icon"></slot>
       </span>
       <span class="text-sm font-medium">{{ title }}</span>
    </div>
    
    <div class="flex items-end gap-3">
      <h3 class="text-2xl font-bold text-zinc-900 dark:text-white">{{ value }}</h3>
      <div 
        class="flex items-center gap-1 mb-1 text-xs font-medium"
        :class="trend > 0 ? 'text-green-500' : 'text-red-500'"
      >
        <TrendingUp v-if="trend > 0" class="w-3 h-3" />
        <TrendingDown v-else class="w-3 h-3" />
        <span>{{ Math.abs(trend) }}%</span>
        <span class="text-zinc-400 font-normal ml-1">{{ trendLabel }}</span>
      </div>
    </div>
  </div>
</template>
