<template>
  <div class="home">
    home页面
  </div>
</template>

<script>
import { getListById } from '@/api/home'
export default {
  data () {
    return {
      list: []
    }
  },
  created () {
    this.getList()
    this.$axios.get('/user/list').then((res)=>{
      console.log(res);
    })
  },
  methods: {
    async getList () {
      const res = await getListById({ id: 5 }, { loading: true, loadingDom: '.home' })
      console.log(res)
    }
  }
}
</script>

<style lang="less" scoped>
.home {}
</style>