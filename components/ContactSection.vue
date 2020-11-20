<template lang="pug">
  .contact-section-wrap
    .gmap-wrap
      g-map.gmap-wrap__gmap(
        :center="{ lat, lng }"
        :locations="locations"
        :street-view-control="false"
        :map-type-control="false"
        :fullscreen-control="false"
        :zoom-control="true"
      )
    .info-wrap
      .info-wrap__info
        .info-wrap__info__header
          .info-wrap__info__header__logo(
            :style="{ backgroundImage: `url(${backgroundUrl})` }"
          )
          .info-wrap__info__header__name {{ $t(`contact_section.noahs_ark`) + " " + $t(`contact_section.international_healing_center`) }}
        .info-wrap__info__contact-title {{ $t(`contact_section.contact_info`) }}
        .info-wrap__info__address {{ $t(`contact_section.address`) }}
        .info-wrap__info__tel {{ $t(`contact_section.tel`) }}
        .info-wrap__info__service-hours {{ $t(`contact_section.service_hours`) }}
        .info-wrap__info__traffic-title {{ $t(`contact_section.traffic_info`) }}
        .info-wrap__info__traffic-text1 {{ $t(`contact_section.traffic_text1`) }}
        .info-wrap__info__traffic-text2 {{ $t(`contact_section.traffic_text2`) }}
        .info-wrap__info__traffic-text3 {{ $t(`contact_section.traffic_text3`) }}
        .info-wrap__info__traffic-text4 {{ $t(`contact_section.traffic_text4`) }}

</template>

<script>
import GMap from "@/components/GMap";
export default {
  components: {
    GMap
  },
  data() {
    return {
      lat: 25.175206,
      lng: 121.532668,
      locations: [
        {
          name: this.$t(`contact_section.yangmingshan_zhuzihu_noahs_ark`),
          lat: 25.175206,
          lng: 121.532668,
          mapTagImgUrl: "/map_tag_meteorite.jpg"
        }
      ],
      backgroundUrl: "/logo_meteorite.jpg"
    };
  }
};
</script>

<style lang="sass" scoped src="@/assets/sass/contact-section.sass"></style>
