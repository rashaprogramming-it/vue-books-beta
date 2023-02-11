<template>
    <SearchBar />
    <BooksList />
</template>

<script setup>
import SearchBar from './components/SearchBar.vue'
import BooksList from './components/BooksList.vue'
import { useStore } from './stores/store'
import { computed, watch } from 'vue'

const store = useStore()

const searchInfo = computed(() => store.search)

watch(searchInfo, (newSearchInfo) => {
    if (newSearchInfo == '') {
        store.searchData = null
    }
})

</script>

<!-- https://www.googleapis.com/books/v1/volumes?q=search+terms -->