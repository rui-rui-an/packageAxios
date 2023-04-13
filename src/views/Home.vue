<template>
  <div class="home">
    <el-button @click="getList">点击发送带有loading的请求</el-button>
    <div class="box">
      <div class="bg1"></div>
      <div class="bg2"></div>
      <div class="bg3"></div>
      <div class="bg4"></div>
    </div>
  </div>
</template>

<script>
import { getListById } from "@/api/home"
export default {
  data() {
    return {
      list: [],
    }
  },
  created() {
    // this.getList()
  },
  methods: {
    async getList() {
      // const res = await getListById({ loading: true, loadingDom: ".bg1" })
      // const res2 = await getListById({ loading: true, loadingDom: ".bg2" })
      const res3 = await getListById({ loading: true, loadingDom: ".bg3" })
      // const res4 = await getListById({ loading: true, loadingDom: ".bg4" })
    },
  },
}
</script>

<style lang="less" scoped>
.home {
  height: 800px;
  width: 100%;
  .el-button{
    margin: 20px auto;
  }
  .box {
    width: 100%;
    height: 500px;
    display: flex;
    .bg1 {
      width: 300px;
      height: 100px;
      background-color: #0094ff;
    }
    .bg2 {
      width: 300px;
      height: 300px;
      background-color: gold;
    }
    .bg3 {
      width: 300px;
      height: 500px;
      background-color: green;
    }
    .bg4 {
      width: 300px;
      height: 300px;
      background-color: aquamarine;
    }
  }
}
</style>
