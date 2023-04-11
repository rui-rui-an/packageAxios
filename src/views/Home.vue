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
  },
  methods: {
    getList () {
      getListById({ id: 5 }, { loading: true, loadingDom: '.home' })
    }
  }
}
</script>

<style lang="less" scoped>
.home {}
</style>