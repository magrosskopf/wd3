<template>
  <b-container class="bv-example-row mt-5">
    <b-row>
      <b-col cols="12">
        <h2>IMPRESSUM</h2>
      </b-col>
    </b-row>
  </b-container>
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
      };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
