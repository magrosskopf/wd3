<template>
<div>
    <b-row>
      <b-col cols="12">
          <h1 class="h2-style">
            Verbesserung der <br> Kundenkommunikation
          </h1>
        </b-col>
      </b-row>
</div>
</template>

<script>

export default {
  name: 'titlepage',
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
