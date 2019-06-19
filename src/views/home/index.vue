<template>
  <div class="home">
    <img src="@/assets/images/logo.png" />
    {{ msg }}
    <HelloWorld v-model="msg" />
    <button @click="getListData">点击请求接口</button>
    <br />
    <ul>
      <li v-for="(item, index) of list" :key="index">
        <h2>{{ item.message }}</h2>
        <img :src="item.imgUrl" />
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld'
import Service from './service'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      msg: '哈哈',
      list: []
    }
  },
  methods: {
    update(val) {
      console.log(val)
      this.msg = val
    },
    async getListData() {
      this.list = await Service.getList()
    }
  }
}
</script>
