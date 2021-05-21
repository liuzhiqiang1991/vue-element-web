<template>
  <el-form ref="postForm" :model="postForm">

    <sticky :class-name="'sub-navbar'">
      <el-button v-if="!isEdit" @click="showGuide">显示帮助</el-button>
      <el-button
        v-loading="loading"
        type="success"
        style="margin-left: 5 0px"
        @click="submitForm"
      >{{ isEdit ? '编辑' : '新增' }}</el-button>
    </sticky>

    <div class="detail-container">
      <el-row>
        <el-col :span="24">
          <el-row>
            <el-col :span="12">
              <el-form-item prop="code" label="编码：" :label-width="labelWidth">
                <el-input
                  v-model="postForm.code"
                  placeholder="编码"
                />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item prop="name" label="行政区名称：" :label-width="labelWidth">
                <el-input
                  v-model="postForm.name"
                  placeholder="行政区名称"
                />
              </el-form-item>
            </el-col>

          </el-row>

          <el-row>
            <el-col :span="12">
              <el-form-item prop="parent" label="parent：" :label-width="labelWidth">
                <el-input
                  v-model="postForm.parent"
                  placeholder="parent编码"
                />
              </el-form-item>
            </el-col>

            <el-col :span="12">
              <el-form-item prop="code_level" label="编码层级：" :label-width="labelWidth">
                <el-input
                  v-model="postForm.code_level"
                  placeholder="编码层级"
                />
              </el-form-item>
            </el-col>
          </el-row>

        </el-col>
      </el-row>
    </div>
  </el-form>
</template>

<script>
import Sticky from '../../../components/Sticky/index'
import { getCode } from '../../../api/district_code'

export default {
  components: { Sticky },
  props: {

    isEdit: Boolean
  },
  data() {
    return {

      loading: false,
      postForm: {
        code: 'code',
        name: 'name',
        parent: 'parent',
        code_level: 'code_level'
      },
      labelWidth: '120px'
    }
  },
  created() {
    if (this.isEdit) {
      const code = this.$route.params.code
      this.getCodeData(code)
    }
  },
  methods: {
    getCodeData(code) {
      getCode(code).then(response => {
        this.setData(response.data)
      })
    },
    setData(data) {
      const {
        code,
        name,
        parent,
        code_level

      } = data
      this.postForm = {
        ...this.postForm,
        code,
        name,
        parent,
        code_level

      }
    },
    showGuide() {
      alert('显示帮助')
    },
    submitForm() {
      // alert(this.isEdit)
      if (!this.isEdit) {
        this.$store.dispatch('district_code/add', this.postForm)
          .then((msg) => {
            this.$notify({
              title: '操作成功',
              message: msg.data,
              type: 'success',
              duration: 2000
            })
            this.loading = false
          }).catch((e) => {
            this.$notify({
              title: '新增编码失败',
              message: e,
              type: 'fail',
              duration: 2000
            })
            this.loading = false
          })
      } else {
        this.$store.dispatch('district_code/update', this.postForm)
          .then((msg) => {
            this.$notify({
              title: '操作成功',
              message: msg.data,
              type: 'success',
              duration: 2000
            })
            this.loading = false
          }).catch((e) => {
            this.$notify({
              title: '编辑编码失败',
              message: e,
              type: 'fail',
              duration: 2000
            })
            // alert('unfinish')
            this.loading = false
          })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .detail-container {
    padding:40px 50px 20px;
    .preview-img {
      width: 200px;
      height: 270px;
    }
  }
</style>
