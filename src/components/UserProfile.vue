<template>
  <div class="user-container">
    <div class="user-description">
      <router-link :to="`/user/${userInfo.id}`">
        <slot name="username"></slot>
      </router-link>
      <div class="time">
        <slot name="time"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    propsdata: Object
  },
  computed: {
    userInfo() {
      return this.$store.state.user;
    }
  },
}
</script>

<style>

</style>