<template>
  <div>
    <c-header :title="appTitle"></c-header>
    <c-content :items="items" @renew="renewItems"></c-content>
  </div>
</template>

<script>
import CContent from '../../components/common/CContent';
import CHeader from '../../components/common/CHeader';

export default {
  components : {
    CContent,
    CHeader
  },
  data() {
    return {
      appTitle: 'Common Approach',
      items: [10, 20, 30]
    }
  },
  methods: {
    renewItems() {
      this.items = [300, 300, 300]
    }
  }
}
</script>

<style>

</style>





