<template>
    <section class="list container">
        <div class="book" v-for="book in searchInfoData">
            <img :src="`https://books.google.com/books?id=${book.id}&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api`" alt="" class="book-img">
            <div class="book__info">
                <h2 class="book__info-title">{{ book.volumeInfo.title }}</h2>
                <p class="book__info-text">{{ book.volumeInfo.description }}</p> 
                <p class="book__info-author">{{ authorFunc(book.volumeInfo.authors) }}</p>
                <a :href="book.volumeInfo.canonicalVolumeLink" target="_blank" class="book__info-btn">More info</a>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useStore } from '@/stores/store.js'
import { computed } from 'vue'

const store = useStore()

const searchInfoData = computed(() => store.searchData)

const authorFunc = (author) => {
    return author.toString()
}

</script>