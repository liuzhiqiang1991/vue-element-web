<template>
  <el-form ref="postForm" :model="postForm" :rules="rules">
    <sticky :class-name="'sub-navbar'">
      <el-button v-if="!isEdit" @click="showGuide">显示帮助</el-button>
      <el-button
        v-loading="loading"
        type="success"
        style="margin-left: 5 0px"
        @click="submitForm"
      >{{ isEdit ? '编辑电子书' : '新增电子书' }}</el-button>
    </sticky>
    <div class="detail-container">
      <el-row>
        <Warning />
        <el-col :span="24">
          <!-- >上传控件的具体样式<-->
          <ebook-upload
            :file-list="fileList"
            :disabled="isEdit"
            @onSuccess="onUploadSuccess"
            @onRemove="onUploadRemove"
          />
        </el-col>
        <el-col :span="24">
          <el-form-item prop="title">
            <MdInput v-model="postForm.title" :maxlength="100" name="name" required>
              书名
            </MdInput>
          </el-form-item>
          <el-row>
            <el-col :span="12">
              <el-form-item prop="author" label="作者：" :label-width="labelWidth">
                <el-input
                  v-model="postForm.author"
                  placeholder="作者"
                />
              </el-form-item>

            </el-col>
            <el-col :span="12">
              <el-form-item prop="publisher" label="出版社：" :label-width="labelWidth">
                <el-input
                  v-model="postForm.publisher"
                  placeholder="出版社"
                />
              </el-form-item>
            </el-col>

          </el-row>

          <el-row>
            <el-col :span="12">
              <el-form-item prop="language" label="语言：" :label-width="labelWidth">
                <el-input
                  v-model="postForm.language"
                  placeholder="语言"
                />
              </el-form-item>

            </el-col>
            <el-col :span="12">
              <el-form-item prop="rootFile" label="根文件：" :label-width="labelWidth">
                <el-input
                  v-model="postForm.rootFile"
                  placeholder="根文件"
                  disabled
                />
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <el-form-item prop="filePath" label="文件路径：" :label-width="labelWidth">
                <el-input
                  v-model="postForm.filePath"
                  placeholder="文件路径"
                  disabled
                />
              </el-form-item>

            </el-col>
            <el-col :span="12">
              <el-form-item prop="unzipPath" label="解压路径：" :label-width="labelWidth">
                <el-input
                  v-model="postForm.unzipPath"
                  placeholder="解压路径"
                  disabled
                />
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <el-form-item prop="coverFile" label="封面路径：" :label-width="labelWidth">
                <el-input
                  v-model="postForm.coverPath"
                  placeholder="封面路径"
                  disabled
                />
              </el-form-item>

            </el-col>
            <el-col :span="12">
              <el-form-item prop="originalName" label="文件名称：" :label-width="labelWidth">
                <el-input
                  v-model="postForm.originalName"
                  placeholder="文件名称"
                  disabled
                />
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <el-form-item prop="cover" label="封面：" :label-width="labelWidth">
                <a v-if="postForm.cover" :href="postForm.cover" target="_blank">

                  <img :src="postForm.cover" class="preview-img">
                </a>
                <span v-else>无</span>
              </el-form-item>

            </el-col>
          </el-row>
        </el-col>

      </el-row>

      <el-row>
        <el-col :span="24">
          <el-form-item label="目录：" :label-width="labelWidth">
            <div v-if="contentsTree && contentsTree.length > 0" class="contents-wrapper">
              <el-tree :data="contentsTree" @node-click="onContentClick" />
            </div>
          </el-form-item>
        </el-col>
      </el-row>

    </div>
  </el-form>
</template>
<script>
import Sticky from '../../../components/Sticky/index'
import Warning from './Warning'
import EbookUpload from '../../../components/EbookUpload'
import MdInput from '../../../components/MDinput'
import { createBook, getBook, updateBook } from '../../../api/book'
const defaultForm = {
  title: '',
  author: '',
  langutage: '',
  publisher: '',
  rootFile: '',
  cover: '',
  url: '',
  originalName: '',
  fileName: '',
  coverPath: '',
  filePath: '',
  unzipPath: ''
}

// 映射
const fields = {
  title: '标题',
  author: '作者',
  publisher: '出版社',
  language: '语言'
}

export default {
  components: { Sticky, Warning, EbookUpload, MdInput },
  props: {
    isEdit: Boolean
  },
  data() {
    // 校验规则
    const validateRequire = (rule, value, callback) => {
      if (value.length === 0) {
        callback(new Error(fields[rule.field] + '必须填写'))
      } else {
        callback()
      }
    }

    return {
      loading: false,
      postForm: {
        status: 'draft'
      },
      fileList: [],
      labelWidth: '120px',
      contentsTree: [],
      // 校验规则
      rules: {
        title: [{ validator: validateRequire }],
        author: [{ validator: validateRequire }],
        language: [{ validator: validateRequire }],
        publisher: [{ validator: validateRequire }]

      }
    }
  },
  created() {
    if (this.isEdit) {
      const fileName = this.$route.params.fileName
      console.log(fileName)
      this.getBookData(fileName)
    }
  },
  methods: {
    getBookData(fileName) {
      getBook(fileName).then(response => {
        this.setData(response.data)
      })
    },
    setDefault() { // 置空
      this.postForm = Object.assign({}, defaultForm)
      this.contentsTree = []
      this.fileList = []
      this.$refs.postForm.resetFields()
    },
    onContentClick(data) {
      // alert(data)
      console.log(data)
      if (data.text) {
        window.open(data.text)
      }
    },

    setData(data, contentsTree) {
      // alert(data.contentsTree)

      const {
        title,
        author,
        language,
        publisher,
        rootFile,
        cover,
        url,

        originalName,
        contents,
        fileName,
        coverPath,
        filePath,
        unzipPath
      } = data
      // alert(originalName)
      this.postForm = {
        ...this.postForm,
        title,
        author,
        language,

        publisher,
        rootFile,
        cover,
        url,
        originalName,
        contents,
        fileName,
        coverPath,
        filePath,
        unzipPath
      }
      // console.log('title', title)

      this.contentsTree = data.contentsTree
      this.fileList = [{ name: originalName, url }]
    },
    onUploadSuccess(data, contentsTree) {
      console.log('data', data)

      console.log('data', data.response.data)
      // alert(contentsTree)
      this.setData(data.response.data)
    },
    onUploadRemove() {
      this.setDefault()
    },

    showGuide() {
      console.log('show guide ...')
      // alert('a')
    },
    /* eslint-disable */
    submitForm() {
      const onSuccess = (response) => {
        const { msg } = response
        this.$notify({
          title: '操作成功',
          message: msg,
          type: 'success',
            duration: 2000
          })
          this.loading = false
      }


      if(!this.loading) {

            this.loading=true

            this.$refs.postForm.validate((valid, fields) => {
              console.log(valid, fields)
              if(valid) {

                //校验通过，提交表单
                //表单项，浅拷贝
                const book = Object.assign({}, this.postForm)
                //delete book.contents
                delete book.contentsTree

                //alert(this.isEdit)
                if(!this.isEdit) {
                  createBook(book).then(response => {
                    onSuccess(response)

                  }).catch(() => {
                    this.loading = false
                  })

                  //this.setDefault()
                } else {
                  updateBook(book).then(response =>{
                    onSuccess(response)

                  }).catch(() => {
                    this.loading = false
                  })
                }
              } else {
                const message = fields[Object.keys(fields)[0]][0].message  //获取错误信息
                this.$message({message, type: 'error'})   //前端展示
              }

            })
            setTimeout(() => {
              this.loading = false
            }, 1000)
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
