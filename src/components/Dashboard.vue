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

// 1. Total Revenue (Line Chart)
const revenueOptions = {
  chart: {
    type: 'area',
    toolbar: { show: false },
    fontFamily: 'inherit',
    zoom: { enabled: false }
  },
  dataLabels: { enabled: false },
  stroke: { curve: 'smooth', width: 2 },
  xaxis: {
    categories: ['Feb 01', '03', '05', '07', '09', '11', '13', '15', '17', '19', '21', '23', '25', '27', '28'],
    axisBorder: { show: false },
    axisTicks: { show: false },
    labels: { style: { colors: '#9ca3af', fontSize: '10px' } }
  },
  yaxis: {
    labels: { style: { colors: '#9ca3af', fontSize: '10px' }, formatter: (value) => value >= 1000 ? (value/1000) + 'k' : value }
  },
  grid: {
    borderColor: '#f3f4f6',
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
  colors: ['#111827', '#d1d5db'], // Dark (Current), Gray (Last)
  legend: { show: true, position: 'top', horizontalAlign: 'right' },
};

const revenueSeries = [
  { name: 'This month', data: [400, 380, 600, 700, 500, 300, 400, 350, 200, 300, 500, 600, 500, 700, 600] },
  { name: 'Last month', data: [500, 450, 400, 420, 300, 320, 400, 450, 350, 400, 300, 450, 400, 350, 400] }
];


// 2. Popular Products (Static Data for Custom Bars)
const popularProducts = [
  { name: 'Macbook Air M2 2022 13 Inch', sales: '8,172', color: 'bg-orange-500', width: '90%' },
  { name: 'Macbook Pro 14 Inch 512GB M1 Pro', sales: '6,345', color: 'bg-purple-500', width: '70%' },
  { name: 'Apple Mac Mini Pro M2 2023', sales: '3,287', color: 'bg-indigo-500', width: '40%' },
  { name: 'APPLE 32" R6KD Pro Display XDR', sales: '2,456', color: 'bg-green-500', width: '30%' },
];


// 3. Average Order Value (Bar Chart)
const orderValueOptions = {
  chart: { type: 'bar', toolbar: { show: false }, fontFamily: 'inherit' },
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
};
const orderValueSeries = [{ name: 'Order Value', data: [40, 70, 50, 80, 60, 90, 70, 80, 60, 50, 90, 70, 60, 80, 50] }];


// 4. Average Sales (Line Chart - Orange)
const avgSalesOptions = {
  chart: { type: 'line', toolbar: { show: false }, fontFamily: 'inherit' },
  stroke: { curve: 'smooth', width: 2 },
  dataLabels: { enabled: false },
  xaxis: { labels: { show: false }, axisBorder: { show: false }, axisTicks: { show: false } },
  yaxis: { show: false },
  grid: { show: false },
  colors: ['#f97316', '#fdba74'], 
  legend: { show: true, position: 'top', fontSize: '10px' }
};
const avgSalesSeries = [
  { name: 'This month', data: [40, 50, 40, 60, 50, 70, 60, 80, 70, 60, 70, 90, 80, 90] },
  { name: 'Last month', data: [30, 40, 30, 50, 40, 60, 50, 70, 60, 50, 60, 80, 70, 80] }
];

// 5. Total Sessions (Bar Chart - Multi-color/Grouped look)
const sessionsOptions = {
  chart: { type: 'bar', toolbar: { show: false }, fontFamily: 'inherit', stacked: false },
  plotOptions: { bar: { borderRadius: 2, columnWidth: '60%' } },
  dataLabels: { enabled: false },
  xaxis: { labels: { show: false }, axisBorder: { show: false }, axisTicks: { show: false } },
  yaxis: { show: false },
  grid: { show: false },
  colors: ['#4b5563', '#9ca3af'], 
  legend: { show: true, position: 'top', fontSize: '10px' }
};
const sessionsSeries = [
  { name: 'This month', data: [40, 60, 50, 70, 60, 80, 70, 50, 60, 80, 70, 90] },
  { name: 'Last month', data: [30, 50, 40, 60, 50, 70, 60, 40, 50, 70, 60, 80] }
];

</script>

<template>
  <div class="p-8 bg-gray-50 min-h-screen">
    <!-- Top Stats Row -->
    <div class="mb-8">
      <div class="flex items-center justify-between mb-6">
         <div>
            <h1 class="text-2xl font-bold text-gray-900 flex items-center gap-2">
               Hey, Fikri 
               <span class="text-xs text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded-full border border-gray-200">👋</span>
            </h1>
            <p class="text-sm text-gray-500">Monday, 24 February 2024</p>
         </div>
         <div class="flex items-center gap-3">
            <button class="px-4 py-2 text-sm font-medium text-white bg-indigo-950 rounded-lg hover:bg-indigo-900 transition-colors">
               This Month
            </button>
            <button class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
               Compare: Last Month
            </button>
            <button class="px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
               Edit Widget
            </button>
         </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Sales performance" value="$23,127" :trend="12" icon="sales">
            <template #icon><BarChart2 class="w-4 h-4 text-gray-600" /></template>
        </StatCard>
        <StatCard title="Total Sales" value="1,849" :trend="3" icon="dollar">
            <template #icon><DollarSign class="w-4 h-4 text-gray-600" /></template>
        </StatCard>
         <StatCard title="Average Revenue" value="$15,239" :trend="8" icon="bag">
            <template #icon><ShoppingBag class="w-4 h-4 text-gray-600" /></template>
        </StatCard>
         <StatCard title="Average Order" value="2,034" :trend="-3" icon="bag">
            <template #icon><Package class="w-4 h-4 text-gray-600" /></template>
        </StatCard>
      </div>
    </div>

    <!-- Main Chart Section -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
       <!-- Total Revenue (Span 2) -->
       <div class="lg:col-span-2 min-h-[400px]">
          <ChartCard title="Total Revenue" :showViewMore="true">
             <template #icon><DollarSign class="w-5 h-5 text-gray-500" /></template>
             <div class="mt-4">
               <div class="flex items-baseline gap-3 mb-2">
                 <h2 class="text-3xl font-bold text-gray-900">$94,127</h2>
                 <div class="flex items-center text-green-500 text-sm font-medium">
                   <TrendingUp class="w-4 h-4 mr-1" />
                   9% <span class="text-gray-400 ml-1 font-normal">vs last month</span>
                 </div>
               </div>
               <apexchart type="area" height="300" :options="revenueOptions" :series="revenueSeries"></apexchart>
             </div>
          </ChartCard>
       </div>

       <!-- Popular Product (Span 1) -->
       <div class="lg:col-span-1">
          <ChartCard title="Popular Product" :showViewMore="true">
             <template #icon><Package class="w-5 h-5 text-gray-500" /></template>
             <div class="mt-6 flex flex-col gap-6">
                <div v-for="product in popularProducts" :key="product.name">
                   <div class="flex justify-between text-xs font-medium text-gray-600 mb-1.5">
                      <span class="truncate">{{ product.name }}</span>
                      <span class="text-gray-400">{{ product.sales }} Sales</span>
                   </div>
                   <div class="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
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
          <template #icon><ShoppingBag class="w-5 h-5 text-gray-500" /></template>
          <div class="mt-2">
             <h2 class="text-2xl font-bold text-gray-900 mb-1">$992</h2>
             <p class="text-green-500 text-sm font-medium mb-4">+2.4% <span class="text-gray-400 font-normal">vs last month</span></p>
             <apexchart type="bar" height="150" :options="orderValueOptions" :series="orderValueSeries"></apexchart>
          </div>
       </ChartCard>

       <!-- Average Sales -->
       <ChartCard title="Average Sales">
          <template #icon><TrendingUp class="w-5 h-5 text-gray-500" /></template>
          <div class="mt-2">
             <h2 class="text-2xl font-bold text-gray-900 mb-1">840</h2>
             <p class="text-green-500 text-sm font-medium mb-4">+1.34% <span class="text-gray-400 font-normal">vs last month</span></p>
             <apexchart type="line" height="150" :options="avgSalesOptions" :series="avgSalesSeries"></apexchart>
          </div>
       </ChartCard>

       <!-- Total Sessions -->
       <ChartCard title="Total Sessions">
          <template #icon><Clock class="w-5 h-5 text-gray-500" /></template>
          <div class="mt-2">
             <h2 class="text-2xl font-bold text-gray-900 mb-1">11,240</h2>
             <p class="text-green-500 text-sm font-medium mb-4">+4% <span class="text-gray-400 font-normal">vs last month</span></p>
             <p class="text-xs text-gray-400 mb-2">User per 2 days</p>
             <apexchart type="bar" height="130" :options="sessionsOptions" :series="sessionsSeries"></apexchart>
          </div>
       </ChartCard>
    </div>

    <div class="mt-8 text-center text-xs text-gray-400">
       <p>Note: Data is mocked directly in the component for demonstration purposes.</p>
    </div>
  </div>
</template>
