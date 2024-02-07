<script lang="ts" setup>
import { ref, computed, watch } from 'vue'
// Icons
import {
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronFirst,
  ChevronLast
} from 'lucide-vue-next'

// Models
interface Props {
  totalData: number
  dataPerPage?: number
  maxVisiblePage?: number
}
interface Pages {
  page: number
  isDisable: boolean
}

// Props
const props = withDefaults(defineProps<Props>(), {
  dataPerPage: 10,
  maxVisiblePage: 5
})

// Model value
const currentPage = defineModel<number>()

// Variables\
const dataPerPage = ref<number>(props.dataPerPage!)
const totalPage = computed((): number => Math.ceil(props.totalData / dataPerPage.value))

const startPage = computed((): number => {
  if (totalPage.value > 1) {
    if (currentPage.value === 1) {
      return 1
    }
    if (currentPage.value === totalPage.value) {
      return totalPage.value - props.maxVisiblePage + 1
    }
    if (currentPage.value! >= totalPage.value - props.maxVisiblePage + 1) {
      return totalPage.value - props.maxVisiblePage + 1
    }
    return currentPage.value! - 1
  }

  return 1
})

const isFirstPage = computed((): boolean => currentPage.value === 1)
const isLastPage = computed((): boolean => currentPage.value === totalPage.value)

watch(dataPerPage, () => {
  currentPage.value = 1
})

const pages = computed((): Pages[] => {
  const range: Pages[] = []

  for (
    let i = startPage.value;
    i <= Math.min(startPage.value + props.maxVisiblePage - 1, totalPage.value);
    i++
  ) {
    if (i > 0) {
      range.push({
        page: i,
        isDisable: i === currentPage.value
      })
    }
  }

  return range
})

// Increment data per page
const incrementDataPerPage = () => {
  if (dataPerPage.value < props.totalData) dataPerPage.value++
}

// Decrement data per page
const decrementDataPerpage = () => {
  if (dataPerPage.value > 1) dataPerPage.value--
}

// Previous page
const prevPage = () => {
  if (currentPage.value && currentPage.value > 1) currentPage.value = currentPage.value - 1
}

// Next page
const nextPage = () => {
  if (currentPage.value && currentPage.value < totalPage.value)
    currentPage.value = currentPage.value + 1
}

// To first page
const toFirstPage = () => (currentPage.value = 1)

// To last page
const toLastPage = () => (currentPage.value = totalPage.value)
</script>

<template>
  <div class="pagination">
    <!-- Dislay grid -->
    <div class="pagination__grid">
      <div class="pagination__grid__label">Display Grid</div>
      <div class="pagination__grid__input">
        <input
          v-model="dataPerPage"
          :style="{ width: `${String(dataPerPage).length * 7.5}px` }"
          class="pagination__grid__input__data"
        />
        <div class="pagination__grid__input__operator">
          <ChevronUp @click="incrementDataPerPage" />
          <ChevronDown @click="decrementDataPerpage" />
        </div>
      </div>
    </div>

    <!-- Pages -->
    <div class="pagination__page">
      <!-- Prev page -->
      <button
        class="pagination__page__button pagination__page__button--prev-next"
        :class="{ 'pagination__page__button--prev-next--disable': isFirstPage }"
        @click="prevPage"
      >
        <ChevronLeft />
      </button>
      <!-- To first page -->
      <button
        class="pagination__page__button pagination__page__button--prev-next"
        :class="{ 'pagination__page__button--prev-next--disable': isFirstPage }"
        @click="toFirstPage"
      >
        <ChevronFirst />
      </button>
      <button
        v-for="page in pages"
        :key="`page-${page.page}`"
        class="pagination__page__button"
        :class="{
          'pagination__page__button--active': page.isDisable
        }"
      >
        {{ page.page }}
      </button>
      <!-- To last page -->
      <button
        class="pagination__page__button pagination__page__button--prev-next"
        :class="{ 'pagination__page__button--prev-next--disable': isLastPage }"
        @click="toLastPage"
      >
        <ChevronLast />
      </button>
      <!-- Next page -->
      <button
        class="pagination__page__button pagination__page__button--prev-next"
        :class="{ 'pagination__page__button--prev-next--disable': isLastPage }"
        @click="nextPage"
      >
        <ChevronRight />
      </button>
    </div>
  </div>
</template>
