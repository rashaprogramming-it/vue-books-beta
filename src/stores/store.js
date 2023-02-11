import { defineStore } from 'pinia'
import axios from 'axios'

export const useStore = defineStore({
  id: 'store',
  state: () => ({
    search: null,
    searchData: null
  }),
  actions: {
    async searchFunction() {
      try {
        const searchResult = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.search}`)
        this.searchData = searchResult.data.items
      } catch (error) {
        console.log(error);
      }
    }
  },
  getters: {
    
  }
})
