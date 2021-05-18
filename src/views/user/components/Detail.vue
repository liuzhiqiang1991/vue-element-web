<template>
  <el-form ref="postForm" :model="postForm">
    <sticky :class-name="'sub-navbar'">
      <el-button v-if="!isEdit" @click="showGuide">显示帮助</el-button>
      <el-button
        v-loading="loading"
        type="success"
        style="margin-left: 5 0px"
        @click="submitForm"
      >{{ isEdit ? '编辑用户' : '新增用户' }}</el-button>
    </sticky>

    <div class="detail-container">
      <el-row>
        <Warning />
        <el-col :span="24">
          <!-- >上传控件的具体样式 ------- 重点<-->

        </el-col>
        <el-col :span="24">

          <el-row>
            <el-col :span="12">
              <el-form-item prop="username" label="用户：" :label-width="labelWidth">
                <el-input
                  v-model="postForm.username"
                  placeholder="用户"
                />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item prop="password" label="密码：" :label-width="labelWidth">
                <el-input
                  v-model="postForm.password"
                  placeholder="密码"
                />
              </el-form-item>
            </el-col>

          </el-row>

          <el-row>
            <el-col :span="12">
              <el-form-item prop="role" label="角色：" :label-width="labelWidth">
                <el-input
                  v-model="postForm.role"
                  placeholder="角色"
                />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item prop="nickname" label="nickname：" :label-width="labelWidth">
                <el-input
                  v-model="postForm.nickname"
                  placeholder="nickname"
                />
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <el-form-item prop="avatar" label="avatar：" :label-width="labelWidth">
                <el-input
                  v-model="postForm.avatar"
                  placeholder="avatar"
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
// import Warning from './Warning'

// import EuserUpload from '../../../components/EuserUpload'
export default {
  components: { Sticky },
  props: {

    isEdit: Boolean
  },
  data() {
    return {

      loading: false,
      postForm: {
        username: 'username',
        password: 'password',
        role: 'role',
        nickname: 'nickname',
        avatar: 'avatar'

      },
      fileList: [],
      labelWidth: '120px',
      contentsTree: []

    }
  },
  methods: {
    showGuide() {
      alert('显示帮助')
    },
    submitForm() {
      // this.loading = true
      // alert('提交表单')
      // this.loading = false
      // alert(this.postForm.username + ' ' + this.postForm.password)

      this.$store.dispatch('user/add', this.postForm)
        .then((msg) => {
          // alert(msg)
          this.$notify({
            title: '操作成功',
            message: msg.data,
            type: 'success',
            duration: 2000
          })
          this.loading = false
        }).catch((e) => {
          this.$notify({
            title: '新增用户失败',
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
