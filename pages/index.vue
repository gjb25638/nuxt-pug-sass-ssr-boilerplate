<template lang="pug">
  .container
    //- button
    //-   nuxt-link(
    //-     :to="localePath('/login')"
    //-   ) {{ $t(`login.login`) }}
    //- burger-menu(
    //-   :nav="nav"
    //- )
    dropdownButton(
      :locales="locales"
    )
</template>

<script>
import nav from "@/assets/json/nav";
import BurgerMenu from "@/components/BurgerMenu";
import DropdownButton from "@/components/DropdownButton";
export default {
  components: { BurgerMenu, DropdownButton },
  data() {
    return {
      nav,
      locales: [
        {
          text: "繁體中文",
          value: "zh-tw"
        },
        {
          text: "简体中文",
          value: "zh-cn"
        },
        {
          text: "ENGLISH",
          value: "en-us"
        }
      ]
    };
  }
};
</script>

<style lang="sass" scoped src="@/assets/sass/index.sass"></style>
