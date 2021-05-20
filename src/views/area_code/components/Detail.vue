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
              <el-form-item prop="province" label="省：" :label-width="labelWidth">
                <el-input
                  v-model="postForm.province"
                  placeholder="省"
                />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item prop="city" label="市：" :label-width="labelWidth">
                <el-input
                  v-model="postForm.city"
                  placeholder="市"
                />
              </el-form-item>
            </el-col>

          </el-row>

          <el-row>
            <el-col :span="12">
              <el-form-item prop="code" label="编码：" :label-width="labelWidth">
                <el-input
                  v-model="postForm.code"
                  placeholder="编码"
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
import { getCode } from '../../../api/area_code'

export default {
  components: { Sticky },
  props: {

    isEdit: Boolean
  },
  data() {
    return {

      loading: false,
      postForm: {
        province: 'province',
        city: 'city',
        code: 'code'
      },
      labelWidth: '120px'
    }
  },
  created() {
    // alert(this.$route.params)
    // console.log(this.$route.params)
    const city = this.$route.params.username
    // alert(city)
    this.getCodeData(city)
  },
  methods: {
    getCodeData(city) {
      getCode(city).then(response => {
        this.setData(response.data)
      })
    },
    setData(data) {
      const {
        id,
        province,
        city,
        code

      } = data
      this.postForm = {
        ...this.postForm,
        id,
        province,
        city,
        code
      }
    },
    showGuide() {
      alert('显示帮助')
    },
    submitForm() {
      if (!this.isEdit) {
        this.$store.dispatch('area_code/add', this.postForm)
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
            // alert('unfinish')
            this.loading = false
          })
      } else {
        this.$store.dispatch('area_code/update', this.postForm)
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
