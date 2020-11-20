<template lang="pug">
  .drop-wrap
    .drop-btn-box
      button.drop-btn-box__btn(
        type="button"
        @mouseover="mouseoverDrop()"
        @mouseleave="mouseleaveDrop()"
      ) {{ $t(`nav.${$i18n.locale}`) }}
    .drop-menu(
      :style="{ height: dropMenuHeightCal()}"
    )
      .drop-menu__item(
        v-for="(item, index) in locales"
        :key="index"
      )
        nuxt-link(
          :to="switchLocalePath(item.value)"
        ) {{ item.text }}
</template>

<script>
import calculateSize from "calculate-size";
export default {
  components: {},
  props: {
    locales: Array
  },
  mounted: function() {
    // this.dropMenuWidthCal();
  },
  methods: {
    mouseoverDrop() {
      const menu = document.querySelector(".drop-menu");
      menu.classList.add("active");
    },
    mouseleaveDrop() {
      const menu = document.querySelector(".drop-menu");
      menu.classList.remove("active");
    },
    dropMenuHeightCal() {
      return 50 * this.locales.length + "px";
    },
    dropMenuWidthCal() {
      let arr = [];
      // get max anchor text width
      this.locales.forEach(item => {
        let size = calculateSize(item.text, {
          font: "Arial",
          fontSize: "14px"
        });
        arr.push(size.width);
      });
      let maxWidth = Math.max(...arr) + 40;
      const btn = document.querySelector(".drop-btn-box__btn");
      btn.style.width = maxWidth + "px";
      const menu = document.querySelector(".drop-menu");
      menu.style.width = maxWidth + "px";
    }
  }
};
</script>

<style lang="sass" scoped src="@/assets/sass/dropdown-button.sass"></style>
