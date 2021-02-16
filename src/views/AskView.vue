<template>
  <div>
    <list-item></list-item>
    <!-- <p v-for="item in this.$store.state.asks" :key="item.id">
      <router-link :to="`item/${item.id}`">{{ item.title }}</router-link>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p> -->
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ListItem from '../components/ListItem.vue'

export default {
  components: {
    ListItem
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapState({
      asks: state => state.asks
    })
  },
  created() {
    this.$store.dispatch('FETCH_ASKS');
  }
}
</script>

<style>

</style>