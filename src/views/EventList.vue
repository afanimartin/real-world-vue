<template>
  <h1>Events for good</h1>
  <div class="events">
    <EventCard v-for="event in events" v-bind:key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'

export default {
  name: 'EventList',
  components: {
    EventCard, // register child component
  },
  data() {
    return {
      events: null,
    }
  },
  created() {
    // get events from mock API when component is created
    EventService.getEvents()
      .then((response) => {
        this.events = response.data
      })
      .catch((error) => console.log(error))
  },
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
