<template>
  <div>
    <ul>
      <!-- 이건 기존의 방식 -->
      <!-- <item v-for="item in items" :item="item"></item> -->

      <!-- 아니 컴포넌트 중간에 글자가 왜`~~~? -->
      <item>아이템1</item> 
      <item>
        아이템2 
        <button @click="heyYou">Click</button>
      </item>
      <item>
        <div>
          아이템3
        </div>
        <img src="" alt="">
      </item>
      <Button disabled>
        아이템4
      </Button>
    </ul>
  </div>
</template>

<script>
import Item from '../../components/slot/Item'
import Button from '../../components/slot/Button'

export default {
  components: {
    Item,
    Button,
  },
  methods: {
    heyYou() {
      alert('fffffffffffff')
    }
  }
}
</script>

<style>

</style>