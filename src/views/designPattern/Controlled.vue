<template>
<!-- props를 하위컴포넌트에서 조작하면 에러남 -->
  <check-box v-model="checked"></check-box>
</template>

<script>
import CheckBox from '../../components/controlled/CheckBox.vue'
export default {
  components: {
    CheckBox
  },
  data() {
    return {
      checked: false,
    }
  },
  // created() {
  //   fetchCheckBox()
  //   .then(result => this.checkboxes = result.data)
  // }
}
</script>

<style>


</style>