<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input
        v-model="listQuery.username"
        placeholder="用户名"
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
        @click="handleFilter"
      >按照用户名查询
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
      @sort-change="sortChange"
    >

      <el-table-column
        label="ID"
        prop="id"
        sortable="custom"
        align="cneter"
        width="80"
      />
      <el-table-column label="用户名" prop="username" width="150" align="center" />
      <el-table-column label="密码" prop="password" width="150" align="center" />

      <el-table-column label="角色" prop="role" width="150" align="center" />
      <el-table-column label="nickname" prop="nickname" width="150" align="center" />
      <el-table-column label="avatar" prop="avatar" width="150" align="center" />

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
import { parseTime } from '../../utils/index'

import { listUser, deleteUser } from '../../api/user'

export default {
  components: { Pagination },
  directives: { waves },
  filters: {
    valueFilter(value) {
      return value || '无'
    },
    timeFilter(time) {
      return time ? parseTime(time, '{y}-{m}-{d} {h}:{i}') : '无'
    }
  },
  data() {
    return {
      tableKey: 0,
      listLoading: true,
      list: [],
      total: 0,

      listQuery: {},
      showCover: false,
      categoryList: []

    }
  },
  created() {
    this.parseQuery()
  },
  mounted() {
    this.getList()
  },
  methods: {

    handleDelete(row) {
      // 删除
      // alert('删除操作')
      this.$confirm('此操作将永久删除', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 选确定后，才会执行
        deleteUser(row.username).then(response => {
          this.$notify({
            title: '成功',
            message: response.msg || '删除成功',
            type: 'success',
            duration: 2000
          })
          this.handleFilter()
        })
      })
    },
    handleUpdate(row) {
      // alert('1')
      // alert(row.username)
      // console.log(row)
      // 跳转到编辑页面

      this.$router.push(`/user/edit/${row.username}`)
    },
    parseQuery() {
      const listQuery = {
        page: 1,
        pageSize: 10,
        sort: '+id'
      }
      this.listQuery = { ...listQuery, ...this.listQuery }
    },
    sortChange(data) {
      console.log('sortChange', data)
      // alert(data.order )
      const { prop, order } = data
      this.sortBy(prop, order)
    },
    sortBy(prop, order) {
      if (order === 'ascending') {
        this.listQuery.sort = `+${prop}`
      } else {
        this.listQuery.sort = `-${prop}`
      }
      this.handleFilter()
    },

    wrapperKeyword(k, v) {
      function highLight(value) {
        return `<span style="color:#1890ff">${value}</span>`
      }
      if (!this.listQuery[k]) {
        return v
      } else {
        // return v
        return v.replace(new RegExp(this.listQuery[k], 'ig'), v => highLight(v))
      }
    },

    getList() {
      this.listLoading = true
      listUser(this.listQuery).then(response => {
        // alert(response)
        const { list, count } = response.data
        this.list = list
        this.total = count
        this.listLoading = false
      })
    },
    handleFilter() {
      console.log('handle', this.listQuery)
      // alert(this.listQuery)
      this.getList(this.listQuery)
    },
    handleCreate() {
      this.$router.push('/user/create')
    },
    changeShowCover(value) {
      this.showCover = value
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
