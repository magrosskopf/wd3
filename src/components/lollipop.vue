<template>
  <div id="container" style="width:100%; height:400px;"></div>
</template>

<script>

export default {
  name: 'lollipop',
  props: {
    msg: String
  },
  data() {
    return {
      options: {
        paddingTop: '30px'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
