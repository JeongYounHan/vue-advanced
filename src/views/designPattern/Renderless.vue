<template>
  <div>
    <fetch-data url="https://jsonplaceholder.typicode.com/users/1">
      <div slot-scope="{ response, loading }">
        <div v-if="!loading">
          {{ response }}
        </div>
        <div v-else>
          Loading...
        </div>
      </div>
    </fetch-data>
  </div>
</template>

<script>
import FetchData from '../../components/renderless/FetchData.vue'

export default {
  components: { FetchData },

}
</script>

<style>

</style>