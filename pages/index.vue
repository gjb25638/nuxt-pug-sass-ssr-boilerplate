<template lang="pug">
  .container
    contact-section
    //- button
    //-   nuxt-link(
    //-     :to="localePath('/login')"
    //-   ) {{ $t(`login.login`) }}

    //- .container__before_tag
    //- .container__after_tag
    //-   .container__after_tag__drop
    //-     dropdown-button(
    //-       :locales="locales"
    //-     )
    //-   .container__after_tag__burger
    //-     burger-menu(
    //-       :nav="nav"
    //-     )
</template>

<script>
import nav from "@/assets/json/nav";
import BurgerMenu from "@/components/BurgerMenu";
import DropdownButton from "@/components/DropdownButton";
import ContactSection from "@/components/ContactSection";
export default {
  components: { BurgerMenu, DropdownButton, ContactSection },
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
