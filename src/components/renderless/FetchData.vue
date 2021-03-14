<script>
import axios from 'axios';

export default {
  props: ['url'],
  data() {
    return {
      response: null,
      loading: true,
    }
  },
  created() {
    axios.get(this.url)
      .then(res => {
        this.response = res.data;
        this.loading = false;
      })
      .catch(err => {
        alert('error', err);
      })
  },
  render() {
    return this.$scopedSlots.default({
      response: this.response,
      loading: this.loading,
    });
  }
}
</script>

<style>

</style>