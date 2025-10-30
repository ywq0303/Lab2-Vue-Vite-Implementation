import type { Event, EventState } from '@/types'
import { defineStore } from 'pinia'

export const useEventStore = defineStore('event', {
  state: (): EventState => ({
    event: null
  }),
  actions: {
    setEvent(event: Event): void {
      this.event = event
    },
    clearEvent(): void {
      this.event = null
    }
  }
})