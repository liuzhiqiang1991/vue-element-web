<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input
        v-model="lon1"

        placeholder="点1经度"
        style="width: 200px"
        class="filter-item"
        clearable
      />
      <el-input
        v-model="lat1"

        placeholder="点1纬度"
        style="width: 200px"
        class="filter-item"
        clearable
      />
    </div>
    <div class="filter-container">
      <el-input
        v-model="lon2"
        placeholder="点2经度"
        style="width: 200px"
        class="filter-item"
        clearable
      />
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
      >查询
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
      lon2: 121.1,
      lat2: 60.9
    }
  },
  methods: {

    handle() {
      alert(this.lat1)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
