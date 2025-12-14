<script setup>
import { 
  BarChart2, 
  DollarSign, 
  ShoppingBag, 
  TrendingUp,
  Package,
  Clock
} from 'lucide-vue-next';
import StatCard from './StatCard.vue';
import ChartCard from './ChartCard.vue';

// --- Chart Options & Data ---

import { computed } from 'vue';
import { useDarkMode } from '../composables/useDarkMode';

const { isDark } = useDarkMode();

// --- Chart Options & Data (Computed for Theme Support) ---

// 1. Total Revenue (Line Chart)
const revenueOptions = computed(() => ({
  chart: {
    type: 'area',
    toolbar: { show: false },
    fontFamily: 'inherit',
    zoom: { enabled: false },
    background: 'transparent'
  },
  dataLabels: { enabled: false },
  stroke: { curve: 'smooth', width: 2 },
  xaxis: {
    categories: ['Feb 01', '03', '05', '07', '09', '11', '13', '15', '17', '19', '21', '23', '25', '27', '28'],
    axisBorder: { show: false },
    axisTicks: { show: false },
    labels: { style: { colors: isDark.value ? '#a1a1aa' : '#9ca3af', fontSize: '10px' } }
  },
  yaxis: {
    labels: { style: { colors: isDark.value ? '#a1a1aa' : '#9ca3af', fontSize: '10px' }, formatter: (value) => value >= 1000 ? (value/1000) + 'k' : value }
  },
  grid: {
    borderColor: isDark.value ? '#27272a' : '#f3f4f6', // zinc-800 vs gray-100
    strokeDashArray: 4,
  },
  fill: {
     type: 'gradient',
     gradient: {
       shadeIntensity: 1,
       opacityFrom: 0.4,
       opacityTo: 0.05,
       stops: [0, 90, 100]
     }
  },
  colors: isDark.value ? ['#f4f4f5', '#52525b'] : ['#111827', '#d1d5db'], // zinc-100/zinc-600 vs gray-900/gray-300
  legend: { 
     show: true, 
     position: 'top', 
     horizontalAlign: 'right',
     labels: { colors: isDark.value ? '#a1a1aa' : '#374151' } 
  },
  theme: { mode: isDark.value ? 'dark' : 'light' }
}));

const revenueSeries = [
  { name: 'This month', data: [400, 380, 600, 700, 500, 300, 400, 350, 200, 300, 500, 600, 500, 700, 600] },
  { name: 'Last month', data: [500, 450, 400, 420, 300, 320, 400, 450, 350, 400, 300, 450, 400, 350, 400] }
];


// 2. Popular Products (Static Data for Custom Bars) - Colors managed in template via utility classes
const popularProducts = [
  { name: 'Macbook Air M2 2022 13 Inch', sales: '8,172', color: 'bg-orange-500', width: '90%' },
  { name: 'Macbook Pro 14 Inch 512GB M1 Pro', sales: '6,345', color: 'bg-purple-500', width: '70%' },
  { name: 'Apple Mac Mini Pro M2 2023', sales: '3,287', color: 'bg-indigo-500', width: '40%' },
  { name: 'APPLE 32" R6KD Pro Display XDR', sales: '2,456', color: 'bg-green-500', width: '30%' },
];


// 3. Average Order Value (Bar Chart)
const orderValueOptions = computed(() => ({
  chart: { type: 'bar', toolbar: { show: false }, fontFamily: 'inherit', background: 'transparent' },
  plotOptions: { bar: { borderRadius: 4, columnWidth: '50%' } },
  dataLabels: { enabled: false },
  xaxis: { 
     categories: Array.from({length: 15}, (_, i) => i+1),
     labels: { show: false },
     axisBorder: { show: false },
     axisTicks: { show: false }
  },
  yaxis: { show: false },
  grid: { show: false },
  colors: ['#f97316'], // Orange
  theme: { mode: isDark.value ? 'dark' : 'light' }
}));
const orderValueSeries = [{ name: 'Order Value', data: [40, 70, 50, 80, 60, 90, 70, 80, 60, 50, 90, 70, 60, 80, 50] }];


// 4. Average Sales (Line Chart - Orange)
const avgSalesOptions = computed(() => ({
  chart: { type: 'line', toolbar: { show: false }, fontFamily: 'inherit', background: 'transparent' },
  stroke: { curve: 'smooth', width: 2 },
  dataLabels: { enabled: false },
  xaxis: { labels: { show: false }, axisBorder: { show: false }, axisTicks: { show: false } },
  yaxis: { show: false },
  grid: { show: false },
  colors: ['#f97316', '#fdba74'], 
  legend: { show: true, position: 'top', fontSize: '10px' },
  theme: { mode: isDark.value ? 'dark' : 'light' }
}));
const avgSalesSeries = [
  { name: 'This month', data: [40, 50, 40, 60, 50, 70, 60, 80, 70, 60, 70, 90, 80, 90] },
  { name: 'Last month', data: [30, 40, 30, 50, 40, 60, 50, 70, 60, 50, 60, 80, 70, 80] }
];

// 5. Total Sessions (Bar Chart - Multi-color/Grouped look)
const sessionsOptions = computed(() => ({
  chart: { type: 'bar', toolbar: { show: false }, fontFamily: 'inherit', stacked: false, background: 'transparent' },
  plotOptions: { bar: { borderRadius: 2, columnWidth: '60%' } },
  dataLabels: { enabled: false },
  xaxis: { labels: { show: false }, axisBorder: { show: false }, axisTicks: { show: false } },
  yaxis: { show: false },
  grid: { show: false },
  colors: isDark.value ? ['#71717a', '#a1a1aa'] : ['#4b5563', '#9ca3af'], // Zinc vs Gray
  legend: { show: true, position: 'top', fontSize: '10px' },
  theme: { mode: isDark.value ? 'dark' : 'light' }
}));
const sessionsSeries = [
  { name: 'This month', data: [40, 60, 50, 70, 60, 80, 70, 50, 60, 80, 70, 90] },
  { name: 'Last month', data: [30, 50, 40, 60, 50, 70, 60, 40, 50, 70, 60, 80] }
];

</script>

<template>
  <div class="p-8 bg-zinc-50 dark:bg-zinc-900 min-h-screen transition-colors">
    <!-- Top Stats Row -->
    <div class="mb-8">
      <div class="flex items-center justify-between mb-6">
         <div>
            <h1 class="text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
               Hey, Likeur 
               <span class="text-xs text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded-full border border-zinc-200 dark:border-zinc-700">👋</span>
            </h1>
            <p class="text-sm text-zinc-500 dark:text-zinc-400">Monday, 24 February 2024</p>
         </div>
         <div class="flex items-center gap-3">
            <button class="px-4 py-2 text-sm font-medium text-white bg-indigo-950 dark:bg-indigo-900 rounded-lg hover:bg-indigo-900 dark:hover:bg-indigo-800 transition-colors">
               This Month
            </button>
            <button class="px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-200 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors">
               Compare: Last Month
            </button>
            <button class="px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-200 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
               Edit Widget
            </button>
         </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Sales performance" value="$23,127" :trend="12" icon="sales">
            <template #icon><BarChart2 class="w-4 h-4 text-zinc-600 dark:text-zinc-300" /></template>
        </StatCard>
        <StatCard title="Total Sales" value="1,849" :trend="3" icon="dollar">
            <template #icon><DollarSign class="w-4 h-4 text-zinc-600 dark:text-zinc-300" /></template>
        </StatCard>
         <StatCard title="Average Revenue" value="$15,239" :trend="8" icon="bag">
            <template #icon><ShoppingBag class="w-4 h-4 text-zinc-600 dark:text-zinc-300" /></template>
        </StatCard>
         <StatCard title="Average Order" value="2,034" :trend="-3" icon="bag">
            <template #icon><Package class="w-4 h-4 text-zinc-600 dark:text-zinc-300" /></template>
        </StatCard>
      </div>
    </div>

    <!-- Main Chart Section -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
       <!-- Total Revenue (Span 2) -->
       <div class="lg:col-span-2 min-h-[400px]">
          <ChartCard title="Total Revenue" :showViewMore="true">
             <template #icon><DollarSign class="w-5 h-5 text-zinc-500" /></template>
             <div class="mt-4">
               <div class="flex items-baseline gap-3 mb-2">
                 <h2 class="text-3xl font-bold text-zinc-900 dark:text-white">$94,127</h2>
                 <div class="flex items-center text-green-500 text-sm font-medium">
                   <TrendingUp class="w-4 h-4 mr-1" />
                   9% <span class="text-zinc-400 ml-1 font-normal">vs last month</span>
                 </div>
               </div>
               <apexchart type="area" height="300" :options="revenueOptions" :series="revenueSeries"></apexchart>
             </div>
          </ChartCard>
       </div>

       <!-- Popular Product (Span 1) -->
       <div class="lg:col-span-1">
          <ChartCard title="Popular Product" :showViewMore="true">
             <template #icon><Package class="w-5 h-5 text-zinc-500" /></template>
             <div class="mt-6 flex flex-col gap-6">
                <div v-for="product in popularProducts" :key="product.name">
                   <div class="flex justify-between text-xs font-medium text-zinc-600 dark:text-zinc-300 mb-1.5">
                      <span class="truncate">{{ product.name }}</span>
                      <span class="text-zinc-400 dark:text-zinc-500">{{ product.sales }} Sales</span>
                   </div>
                   <div class="h-2 w-full bg-zinc-100 dark:bg-zinc-700 rounded-full overflow-hidden">
                      <div class="h-full rounded-full" :class="product.color" :style="{ width: product.width }"></div>
                   </div>
                </div>
             </div>
          </ChartCard>
       </div>
    </div>

    <!-- Bottom Charts Section -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
       <!-- Average Order Value -->
       <ChartCard title="Average Order Value">
          <template #icon><ShoppingBag class="w-5 h-5 text-zinc-500" /></template>
          <div class="mt-2">
             <h2 class="text-2xl font-bold text-zinc-900 dark:text-white mb-1">$992</h2>
             <p class="text-green-500 text-sm font-medium mb-4">+2.4% <span class="text-zinc-400 font-normal">vs last month</span></p>
             <apexchart type="bar" height="150" :options="orderValueOptions" :series="orderValueSeries"></apexchart>
          </div>
       </ChartCard>

       <!-- Average Sales -->
       <ChartCard title="Average Sales">
          <template #icon><TrendingUp class="w-5 h-5 text-zinc-500" /></template>
          <div class="mt-2">
             <h2 class="text-2xl font-bold text-zinc-900 dark:text-white mb-1">840</h2>
             <p class="text-green-500 text-sm font-medium mb-4">+1.34% <span class="text-zinc-400 font-normal">vs last month</span></p>
             <apexchart type="line" height="150" :options="avgSalesOptions" :series="avgSalesSeries"></apexchart>
          </div>
       </ChartCard>

       <!-- Total Sessions -->
       <ChartCard title="Total Sessions">
          <template #icon><Clock class="w-5 h-5 text-zinc-500" /></template>
          <div class="mt-2">
             <h2 class="text-2xl font-bold text-zinc-900 dark:text-white mb-1">11,240</h2>
             <p class="text-green-500 text-sm font-medium mb-4">+4% <span class="text-zinc-400 font-normal">vs last month</span></p>
             <p class="text-xs text-zinc-400 mb-2">User per 2 days</p>
             <apexchart type="bar" height="130" :options="sessionsOptions" :series="sessionsSeries"></apexchart>
          </div>
       </ChartCard>
    </div>

    <div class="mt-8 text-center text-xs text-zinc-400">
       <p>Note: Data is mocked directly in the component for demonstration purposes.</p>
    </div>
  </div>
</template>
