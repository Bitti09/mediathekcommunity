import { defineStore } from 'pinia'

export const useAppStore = defineStore('appconfig', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      drawer: false,
    }
  },
})