<template>
  <detail :is-edit="false" />
</template>
<script>
import Detail from './components/Detail'

export default {
  components: {
    Detail
  },
  data() {
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
  methods: {

  }

}
</script>
<style lang="scss" scoped></style>
