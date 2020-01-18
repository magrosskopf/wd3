<template>
  <div>
    <b-row>
      <b-col cols="12">
        <h2 class="h2-style">
          Informationen zur Datenbasis
        </h2>
      </b-col>
    </b-row>
    <b-row class="mb-5">
      <b-col cols="4" offset="2" class="mt-5">
        <p class='p-left'>
          Der Monitoring-Report Wirtschaft DIGITAL 2018 misst den Stand der Digitalisierung in Deutschland.
          Für die Studie wurden insgesamt 1.061 Unternehmen aus elf Branchen im März und April 2018 befragt.
        </p>
      </b-col>
      <b-col cols="4" class="mt-5">
        <p class='p-left'>
          Die quantitativen, computergestützten und standardisierten Telefoninterviews mit geschlossenen und offenen
          Fragen wurden von Kantar TNS durchgeführt.
        </p>
      </b-col>
    </b-row>
    <b-row class="mb-5">
      <b-col cols="2" offset="3" class="mt-5">
        <img src="@/assets/unternehmen.svg" class="icon-bubble"/>
        <h3 class="h3-style">1.061</h3>
        <p class="bubble-description">
          1.061 Unternehmen nahmen an der Befragung teil.
        </p>
      </b-col>
      <b-col cols="2" class="mt-5">
        <img src="@/assets/zeitraum.svg" class="icon-bubble"/>
        <h3 class="h3-style">2018</h3>
        <p class="bubble-description">
          Die Befragung fand von März bis April 2018 statt.
        </p>
      </b-col>
      <b-col cols="2" class="mt-5">
        <img src="@/assets/branchen.svg" class="icon-bubble"/>
        <h3 class="h3-style">11</h3>
        <p class="bubble-description">
          Jedes Unternehmen kann einer von 11 Branchen zugeteilt werden.
        </p>
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
      };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bubble-description {
    padding: 0 50px;
  }


  .icon-bubble {
    width: 190px;
    margin-top: 30px;
  }
</style>
