<template>
  <div>
    <ul class="news-list">
      <li class="post" v-for="item in listItems" :key="item.id">
        <div class="points">{{ item.points }}</div>
        <div class="news-title">
          <p><a :href="item.url">{{ item.title }}</a></p>
          <small class="link-text">
            by 
            <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
          </small>
        </div>
      </li>
    </ul>
  </div>  
</template>

<script>
export default {
  computed: {
    listItems() {
      const name = this.$route.name;
      if (name === 'news') {
        return this.$store.state.news;
      } else if (name === 'ask') {
        return this.$store.state.asks;
      } else if (name === 'jobs') {
        return this.$store.state.jobs;
      }
    }
  },
  created() {
    const name = this.$route.name;
    if (name === 'news') {
      this.$store.dispatch('FETCH_NEWS');
    } else if (name === 'ask') {
      this.$store.dispatch('FETCH_ASKS');
    } else if (name === 'jobs') {
      this.$store.dispatch('FETCH_JOBS');
    }

  }
}
</script>

<style scoped>
p {
  margin: 0;
}

.news-list { 
  padding: 0;
  margin: 0;
  list-style: none;
}
.post {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}

.news-title {
  margin: 0;
}

.link-text {
  color: #828282;
}
</style>