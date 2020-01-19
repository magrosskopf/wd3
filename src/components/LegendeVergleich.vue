<template>
  <div id="vergleich">
    <div class="circle border chemieActive" id="chemie" ref="chemie" v-on:click="legend($event)">
        <img src="../assets/icons/01_chemie.svg" class="imgActive">
    </div>
    <div class="circle border" id="finanzen" ref="finanzen" v-on:click="legend($event)">
        <img src="../assets/icons/02_finanzen.svg">
    </div>
    <div class="circle border iktActive" id="ikt" ref="ikt" v-on:click="legend($event)">
        <img src="../assets/icons/03_ikt.svg" class="imgActive">
    </div>
    <div class="circle border" id="maschinenbau" ref="maschinenbau" v-on:click="legend($event)">
        <img src="../assets/icons/04_maschinenbau.svg">
    </div>
    <div class="circle border" id="handel" ref="handel" v-on:click="legend($event)">
        <img src="../assets/icons/05_handel.svg">
    </div>
    <div class="circle border" id="gesundheitswesen" ref="gesundheitswesen" v-on:click="legend($event)">
        <img src="../assets/icons/07_gesundheitswesen.svg">
    </div>
    <div class="circle border" id="fahrzeugbau" ref="fahrzeugbau" v-on:click="legend($event)">
        <img src="../assets/icons/06_fahrzeugbau.svg">
    </div>
    <div class="circle border" id="wissenschaft" ref="wissenschaft" v-on:click="legend($event)">
        <img src="../assets/icons/08_wissenschaft.svg">
    </div>
    <div class="circle border" id="logistik" ref="logistik" v-on:click="legend($event)">
        <img src="../assets/icons/09_logistik.svg">
    </div>
    <div class="circle border" id="energie" ref="energie" v-on:click="legend($event)">
        <img src="../assets/icons/10_energie.svg">
    </div>
    <div class="circle border sonstigesActive" id="sonstiges" ref="sonstiges" v-on:click="legend($event)">
        <img src="../assets/icons/11_sonstiges.svg" class="imgActive">
    </div>

  </div>
</template>

<script>

export default {
    data () {
        return {
            images: []
        }
    },
    methods: {
        legend(event) {
            const activeClass = event.currentTarget.id + 'Active'

            if (this.$refs[event.currentTarget.id].classList.contains(activeClass)) {
                this.$refs[event.currentTarget.id].classList.remove(activeClass);
                this.$refs[event.currentTarget.id].childNodes[0].classList.remove('imgActive');
            }else {
                this.$refs[event.currentTarget.id].classList.add(activeClass);
                this.$refs[event.currentTarget.id].childNodes[0].classList.add('imgActive');
            }

            this.$emit('legende', event.currentTarget.id);
        }
    }
} 
</script>
 <style scoped>
    #vergleich {
        display: flex;
        justify-content: center;
        margin-top: 2%
    }

    .circle {
        height: 60px;
        width: 60px;
        border-radius: 50%;
        background: white;
        float: left;
        margin: 0 1%;
    }

    .border {
        border: 2px solid white;
    }

    /* Buttons */
    #chemie {
        border-color:#d34994 !important;
    }
    #finanzen {
        border-color:#ded01e !important;
    }
    #ikt {
        border-color:#4da1b1 !important;
    }
    #maschinenbau {
        border-color:#6b6e72 !important;
    }
    #handel {
        border-color:#62a955 !important;
    }
    #fahrzeugbau {
        border-color:#116636 !important;
    }
    #gesundheitswesen {
        border-color:#e14040 !important;
    }
    #wissenschaft {
        border-color:#7b61a7 !important;
    }
    #logistik {
        border-color:#8d6e23 !important;
    }
    #energie {
        border-color:#3a52a0 !important;
    }
    #sonstiges {
        border-color:#e59d53 !important;
    }
    
    /* Hover Buttons */
    #chemie:hover{
        background: #d34994;
    }
    #finanzen:hover{
        background: #ded01e;
    }
    #ikt:hover{
        background: #4da1b1;
    }
    #maschinenbau:hover{
        background: #6b6e72;
    }
    #handel:hover{
        background: #62a955;
    }
    #fahrzeugbau:hover{
        background: #116636;
    }
    #gesundheitswesen:hover{
        background: #e14040;
    }
    #wissenschaft:hover{
        background: #7b61a7;
    }
    #logistik:hover{
        background: #8d6e23;
    }
    #energie:hover{
        background: #3a52a0;
    }
    #sonstiges:hover{
        background: #e59d53;
    }

    /* Active Button */
    .chemieActive{
        background: #d34994;
    }
    .finanzenActive{
        background: #ded01e;
    }
    .iktActive{
        background: #4da1b1;
    }
    .maschinenbauActive{
        background: #6b6e72;
    }
    .handelActive{
        background: #62a955;
    }
    .fahrzeugbauActive{
        background: #116636;
    }
    .gesundheitswesenActive{
        background: #e14040;
    }
    .wissenschaftActive{
        background: #7b61a7;
    }
    .logistikActive{
        background: #8d6e23;
    }
    .energieActive{
        background: #3a52a0;
    }
   .sonstigesActive{
        background: #e59d53;
    }

    .imgActive {
        filter: invert(0) sepia(0) saturate(1) hue-rotate(0deg) brightness(5);
    }

    .circle:hover img {
        filter: invert(0) sepia(0) saturate(1) hue-rotate(0deg) brightness(5);
    }

    .circle img {
        height: 60%;
        width: 60%;
        margin-top: 20%;
    }

 </style>