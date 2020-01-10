<template>
   <b-container class="bv-example-row">
        <b-row>
            <b-col>

            </b-col>
        </b-row>
    </b-container>
</template>

<script>

import scaleLinear from "d3-scale";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
    mounted() {
      scaleLinear.select("b-col")
        .selectAll("p")
        .data([4, 8, 15, 16, 23, 42])
        .enter().append("p")
            .text(function(d) { return "I’m number " + d + "!"; });
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
