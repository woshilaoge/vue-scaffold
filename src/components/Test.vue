<template>
  <div>{{ value }}</div>
</template>

<script>
export default {
  props: {
    value: String
  },
  data() {
    return {
      haha: ''
    }
  },
  watch: {
    haha(val) {
      this.$emit('input', val)
    }
  }
}
</script>
