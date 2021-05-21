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
        username: 'username',
        password: 'password',
        role: 'role',
        nickname: 'nickname',
        avatar: 'avatar'
      },
      labelWidth: '120px'
    }
  },
  methods: {

  }

}
</script>
<style lang="scss" scoped></style>
