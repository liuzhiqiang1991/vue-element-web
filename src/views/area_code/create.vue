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
        province: 'province',
        city: 'city',
        code: 'code'
      },
      labelWidth: '120px'
    }
  },
  methods: {

  }

}
</script>
<style lang="scss" scoped></style>

