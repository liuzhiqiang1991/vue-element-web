<template>
  <div class="app-container">
    <div class="filter-container">

      <el-input
        v-model="listQuery.province"
        placeholder="省"
        style="width: 200px"
        class="filter-item"
        clearable
        @keyup.enter.native="handleFilter"
        @clear="handleFilter"
        @blur="handleFilter"
      />

      <el-button
        v-waves
        class="filter-item"
        type="primary"
        icon="el-icon-search"
        style="margin-left: 10px"
      >查询
      </el-button>

      <el-button
        class="filter-item"
        type="primary"
        icon="el-icon-edit"
        style="margin-left: 5px"
        @click="handleCreate"
      >
        新增
      </el-button>

    </div>

    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%"
    >

      <el-table-column
        label="ID"
        prop="id"
        sortable="custom"
        align="cneter"
        width="80"
      />
      <el-table-column label="省" prop="province" width="270" align="center" />
      <el-table-column label="市" prop="city" width="270" align="center" />
      <el-table-column label="编码" prop="code" width="270" align="center" />
      <el-table-column
        label="操作"
        width="120"
        align="center"
        fixed="right"
      >
        <template slot-scope="{ row }">
          <el-button type="text" icon="el-icon-edit" @click="handleUpdate(row)" />
          <el-button type="text" icon="el-icon-delete" style="color:#f56c6c" @click="handleDelete(row)" />

        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.pageSize"
      @pagination="getList"
    />
  </div>
</template>

<script>

import Pagination from '../../components/Pagination/index'
import waves from '../../directive/waves/waves'

import { listCode, deleteAreaCode } from '../../api/phone_code'

export default {
  components: { Pagination },
  directives: { waves },
  data() {
    return {
      listLoading: false,
      tableKey: 0,
      list: [],
      total: 0,

      listQuery: {}

    }
  },
  created() {
    this.parseQuery()
  },
  mounted() {
    this.getList()
  },
  methods: {

    parseQuery() {
      const listQuery = {
        page: 1,
        pageSize: 10,
        sort: '+id'
      }
      this.listQuery = { ...listQuery, ...this.listQuery }
    },

    getList() {
      this.listLoading = true
      listCode(this.listQuery).then(response => {
        // alert(response)
        const { list, count } = response.data
        this.list = list
        this.total = count
        this.listLoading = false
      })
    },
    handleFilter() {
      // console.log('handle', this.listQuery)
      // alert(this.listQuery)
      this.getList(this.listQuery)
    },
    handleCreate() {
      this.$router.push('/phone_code/create')
    },
    handleUpdate(row) {
      // alert(row.code)
      this.$router.push(`/phone_code/edit/${row.code}`)
    },
    handleDelete(row) {
      this.$confirm('此操作将永久删除', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 选确定后，才会执行
        deleteAreaCode(row.code).then(response => {
          this.$notify({
            title: '成功',
            message: response.msg || '删除成功',
            type: 'success',
            duration: 2000
          })
          this.handleFilter()
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
