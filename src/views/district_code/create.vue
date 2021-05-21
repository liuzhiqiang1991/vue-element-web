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
        code: 'code',
        name: 'name',
        parent: 'parent',
        code_level: 'code_level'
      },
      labelWidth: '120px'
    }
  },
  methods: {

  }

}
</script>
<style lang="scss" scoped></style>
