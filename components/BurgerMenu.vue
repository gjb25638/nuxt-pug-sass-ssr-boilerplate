<template lang="pug">
  .burger-wrap
    .menuToggle
      input(type="checkbox")
      span
      span
      span
      ul.menu
        li(
          v-for="item in nav"
          :key="item.name"
        )
          nuxt-link(
            :to="localePath(item.link)"
          ) {{ $t(`nav.${item.name}`) }}
</template>

<script>
export default {
  components: {},
  props: {
    nav: Array
  }
};
</script>

<style lang="sass" scoped src="@/assets/sass/burger-menu.sass"></style>
