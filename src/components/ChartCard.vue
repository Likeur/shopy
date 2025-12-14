<script setup>
import { Maximize2, MoreHorizontal, HelpCircle } from 'lucide-vue-next';

defineProps({
  title: String,
  subtitle: String,
  showViewMore: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <div class="p-6 bg-white border border-gray-100 rounded-2xl flex flex-col h-full">
    <!-- Header -->
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center gap-2">
        <h3 class="font-bold text-gray-900 flex items-center gap-2">
           <slot name="icon"></slot>
           {{ title }}
        </h3>
        <HelpCircle class="w-4 h-4 text-gray-300 cursor-help" />
      </div>

      <div class="flex items-center gap-3">
        <button v-if="showViewMore" class="text-sm font-medium text-gray-900 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900">
          View More
        </button>
        <div class="flex items-center gap-1 ml-2">
           <button class="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
              <Maximize2 class="w-4 h-4" />
           </button>
           <button class="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
              <MoreHorizontal class="w-4 h-4" />
           </button>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="flex-1 w-full relative">
       <slot></slot>
    </div>
  </div>
</template>
