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
  <div class="p-6 bg-white border border-gray-100 rounded-2xl hover:border-gray-200 transition-colors">
    <div class="flex items-center gap-3 mb-4 text-gray-500">
       <span class="p-1 rounded bg-gray-50 border border-gray-100" v-if="icon">
         <!-- Icon slot or dynamic icon -->
         <slot name="icon"></slot>
       </span>
       <span class="text-sm font-medium">{{ title }}</span>
    </div>
    
    <div class="flex items-end gap-3">
      <h3 class="text-2xl font-bold text-gray-900">{{ value }}</h3>
      <div 
        class="flex items-center gap-1 mb-1 text-xs font-medium"
        :class="trend > 0 ? 'text-green-500' : 'text-red-500'"
      >
        <TrendingUp v-if="trend > 0" class="w-3 h-3" />
        <TrendingDown v-else class="w-3 h-3" />
        <span>{{ Math.abs(trend) }}%</span>
        <span class="text-gray-400 font-normal ml-1">{{ trendLabel }}</span>
      </div>
    </div>
  </div>
</template>
