<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For guide and recipes on how to configure / customize this project,
      <br />
      check out the
      <a target="_blank" href="https://github.com/vuejs/vue-cli/tree/dev/docs">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <!-- <Test :value="value" v-on="$listeners" /> -->
    <!-- <Test v-model="modal"/> -->
    <Test :value="value" @input="$emit('input', $event)" />
  </div>
</template>

<script>
import Test from './Test'
export default {
  components: {
    Test
  },
  name: 'HelloWorld',
  props: {
    msg: String,
    value: String
  }
  // data() {
  //   return {
  //     modal: this.value
  //   }
  // },
  // watch: {
  //   value(value) {
  //     this.modal = value
  //   },
  //   modal(value) {
  //     this.$emit('input', value)
  //   }
  // }
  // computed: {
  //   modal: {
  //     get() {
  //       return this.value
  //     },
  //     set(value) {
  //       this.$emit('input', value)
  //     }
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
