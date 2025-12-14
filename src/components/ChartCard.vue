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
  <div class="p-6 bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 rounded-2xl flex flex-col h-full transition-colors">
    <!-- Header -->
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center gap-2">
        <h3 class="font-bold text-zinc-900 dark:text-white flex items-center gap-2">
           <slot name="icon"></slot>
           {{ title }}
        </h3>
        <HelpCircle class="w-4 h-4 text-zinc-300 cursor-help" />
      </div>

      <div class="flex items-center gap-3">
        <button v-if="showViewMore" class="text-sm font-medium text-zinc-900 dark:text-zinc-300 underline decoration-zinc-300 dark:decoration-zinc-600 underline-offset-4 hover:decoration-zinc-900 dark:hover:decoration-zinc-100 transition-colors">
          View More
        </button>
        <div class="flex items-center gap-1 ml-2">
           <button class="p-1.5 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700 rounded-lg transition-colors">
              <Maximize2 class="w-4 h-4" />
           </button>
           <button class="p-1.5 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700 rounded-lg transition-colors">
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
