<script setup>
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center p-6 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 lg:hidden">
    <div class="max-w-md w-full text-center space-y-6">
      <div class="relative mx-auto w-24 h-24 flex items-center justify-center rounded-3xl bg-zinc-100 dark:bg-zinc-800">
        <!-- Monitor Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 dark:text-white">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
        
        <!-- Mobile/Slash Icon overlay -->
        <div class="absolute -right-2 -bottom-2 bg-red-500 text-white p-2 rounded-full border-4 border-zinc-50 dark:border-zinc-900">
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
            <path d="M12 18h.01" />
           </svg>
        </div>
      </div>

      <div class="space-y-3">
        <h2 class="text-2xl font-bold tracking-tight">Version Bureau Uniquement</h2>
        <p class="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed">
          Pour une expérience optimale, cette interface a été conçue pour être consultée sur un grand écran.
        </p>
      </div>

      <div class="pt-4">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-sm font-medium text-zinc-600 dark:text-zinc-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
          </svg>
          Veuillez agrandir votre fenêtre
        </div>
      </div>
    </div>
  </div>
</template>
