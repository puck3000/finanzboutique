<template>
  <div id="mainWrap">
    <section v-if="page1" :class="'color' + randomNumber()" id="firstCont" @click="toggleSections">
      <div class="centerBoth">
        <h1>David Kobel</h1>
        <h2>Finanzboutique</h2>
      </div>
  </section>
  <section v-else id="secondCont" :class="'bgc' + currentNumber" class="bgc5" @click="toggleSections">
    <div class="centerBoth">
      <ul>
        <li>
          <h2>Vermögen</h2>
        </li>
        <li>
          <h2>Steuern</h2>
        </li>
        <li>
          <h2>Vorsorge</h2>
        </li>
      </ul>
      <article id="adresse">
        <a href="#" >Steinhofstrasse 29, 3400 Burgdorf</a>
        <a href="tel:+41765277840">076 527 78 40</a>
        <a href="mailto:dk@davidkobel.ch">dk@davidkobel.ch</a>
      </article>
    </div>
    
  </section>
  

  </div>
  
</template>

<script>
export default {
  data() {
    return {
      page1: true,
      currentNumber: 1,
      newNumber: 2
    }
  },
  methods: {
    // Math.floor(Math.random() * 4) + 1
    randomNumber() {
      let newNumber
      do {
        newNumber = Math.floor(Math.random() * 4) + 1
      } while (this.currentNumber === newNumber)
      this.newNumber = newNumber
      return newNumber
    },

    toggleSections: function() {
      this.page1 = !this.page1
      this.currentNumber = this.newNumber
    }
  }

  //return Math.floor(Math.random() * 4) + 1
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

/*
/--------------------
/ layout
/--------------------
*/

section {
  width: 100vw;
  height: 100vh;
  display: grid;
  color: white;
}

.centerBoth {
  margin: auto;
  text-align: center;
}

ul {
  text-decoration: none;
  list-style: none;
  padding-left: 0;
}

article {
  margin-top: 2em;
}

/*
/--------------------
/ colors
/--------------------
*/

.bgc1 {
  color: #6290e7;
}

.bgc2 {
  color: #ff6f4a;
}

.bgc3 {
  color: #a66f8d;
}

.bgc4 {
  color: #00af7c;
}

.bgc5 {
  background-color: #ffffff;
}

.color1 {
  background-color: #6290e7;
}

.color2 {
  background-color: #ff6f4a;
}

.color3 {
  background-color: #a66f8d;
}

.color4 {
  background-color: #00af7c;
}

/*
/--------------------
/ fonts
/--------------------
*/

@font-face {
  font-family: 'Jost*';
  src: url('~/fonts/Jost/OpenType/Jost-400-Book.otf');
  font-style: normal;
  font-weight: normal;
}

@font-face {
  font-family: 'Jost*';
  src: url('~/fonts/Jost/OpenType/Jost-700-Bold.otf');
  font-style: bold;
  font-weight: bold;
}

body {
  font-family: 'Jost*', Futura, 'Trebuchet MS', Arial;
}

h1 {
  font-size: 3em;
  font-weight: bold;
  text-transform: uppercase;
}
h2 {
  font-size: 2em;
  font-weight: normal;
}

#secondCont h2 {
  font-size: 3em;
  font-weight: bold;
  text-transform: uppercase;
}

article a {
  display: block;
  color: inherit;
  text-decoration: none;
  font-size: 1.5em;
}
</style>
