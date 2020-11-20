<template lang="pug">
  div
    p {{content}}
    img(
      :style="{ backgroundImage: `url(${backgroundUrl})` }"
    )
</template>

<script>
export default {
  props: {
    content: String,
    backgroundUrl: String
  }
};
</script>

<style lang="sass" scoped>
p
  font: 14px Arial, sans-serif
img
  width: 150px
  height: 150px
  background-size: cover
  background-position: center
  background-repeat: no-repeat
  box-sizing: border-box
  border-radius: 5px
</style>
