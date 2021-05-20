<template>
  <div class="app-container">
    <div class="filter-container">
      <el-label>点1经度：</el-label>
      <el-input
        v-model="lon1"

        placeholder="点1经度"
        style="width: 200px"
        class="filter-item"
        clearable
      />
      <el-label>    点1纬度：</el-label>

      <el-input
        v-model="lat1"

        placeholder="点1纬度"
        style="width: 200px"
        class="filter-item"
        clearable
      />
    </div>
    <div class="filter-container">
      <el-label>点2经度：</el-label>

      <el-input
        v-model="lon2"
        placeholder="点2经度"
        style="width: 200px"
        class="filter-item"
        clearable
      />
      <el-label>    点2纬度：</el-label>

      <el-input
        v-model="lat2"
        placeholder="点2纬度"
        style="width: 200px"
        class="filter-item"
        clearable
      />

      <el-button
        v-waves
        class="filter-item"
        type="primary"
        icon="el-icon-search"
        style="margin-left: 10px"
        @click="handle"
      >计算距离
      </el-button>
    </div>

  </div>
</template>

<script>

export default {
  filters: {

  },
  data() {
    return {
      lon1: 120.0,
      lat1: 70.0,
      lon2: 120.1,
      lat2: 70.1
    }
  },
  methods: {

    handle() {
      // alert(this.lon1)
      var lat1 = this.lat1 * 3.14 / 180.0
      var lat2 = this.lat2 * 3.14 / 180.0
      var a = lat1 - lat2
      var b = this.lon1 * 3.14 / 180.0 - this.lon2 * 3.14 / 180.0
      var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(b / 2), 2)))
      s = s * 6378.137
      // s = Math.round(s * 10000) / 10000;
      alert(s + '公里')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
