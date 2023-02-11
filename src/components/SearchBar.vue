<template>
    <section class="books-workshop">
        <form @submit.prevent="">
            <input type="search" placeholder="Какую книгу вы ищите?" v-model="store.search">
            <button @click="checkInfo">Search</button>
        </form>
    </section>
</template>

<script setup>
import { useStore } from '@/stores/store.js'

const store = useStore()

const checkInfo = () => {
    if (store.search == null || store.search.trim() == '') {
        store.search = ''
        console.warn('Error!');
    } else {
        store.searchFunction()
    }
}

</script>