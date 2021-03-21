<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <spinner :loading="loadingStatus"></spinner>
  </div>
</template>
<script>
import ToolBar from './components/ToolBar.vue'
import Spinner from './components/Spinner.vue'
import bus from './utils/bus.js'

export default {
  name: "App",
  components: {
    ToolBar,
    Spinner
  },
  data() {
    return {
      loadingStatus: false,
    }
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    }
  },
  created() {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
    // .env 파일
    console.log(`된다는데 왜 안될깜 ${process.env.APP_TITLE}`);
  },
  beforeDestroy() {
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);
  }
};
</script>

<style>
* {
  text-decoration: none;
  box-sizing: border-box;
}
body {
  padding: 0;
  margin: 0;
}

a {
  color: rgb(56, 56, 56);
}

a:hover {
  color: #42b883;
  text-decoration: underline;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
