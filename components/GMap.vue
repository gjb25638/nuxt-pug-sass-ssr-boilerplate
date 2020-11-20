<template lang="pug">
  #map.google-map
</template>

<script>
import Vue from "vue";
import InfoWindowComponent from "@/components/InfoWindow.vue";
export default {
  props: {
    center: {
      type: Object,
      default: () => ({ lat: 25.175206, lng: 121.532668 })
    },
    zoom: {
      type: Number,
      default: 18
    },
    streetViewControl: {
      type: Boolean,
      default: true
    },
    mapTypeControl: {
      type: Boolean,
      default: true
    },
    fullscreenControl: {
      type: Boolean,
      default: true
    },
    zoomControl: {
      type: Boolean,
      default: true
    },
    locations: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      map: null,
      infowindow: null,
      markers: []
    };
  },
  watch: {
    center(val) {
      this.resetCenter();
      this.setMarker();
    }
  },
  mounted() {
    const that = this;
    const event = new window.Event("maps-module:initiated");
    window.dispatchEvent(event);
    window.addEventListener("maps-module:loaded", () => {
      that.initMap();
      that.setMarker();
    });
  },
  methods: {
    initMap() {
      this.map = new this.$google.maps.Map(document.getElementById("map"), {
        center: this.center,
        zoom: this.zoom,
        maxZoom: 20,
        minZoom: 10,
        streetViewControl: this.streetViewControl,
        mapTypeControl: this.mapTypeControl,
        fullscreenControl: this.fullscreenControl,
        zoomControl: this.zoomControl
      });
    },
    resetCenter() {
      // set center
      this.map.panTo({ lat: this.center.lat, lng: this.center.lng });
    },
    clearMarkers() {
      this.markers.forEach(marker => marker.setMap(null));
      this.markers = [];
    },
    setMarker() {
      // clear existing markers
      this.clearMarkers();
      this.locations.forEach(location => {
        const marker = new this.$google.maps.Marker({
          position: { lat: location.lat, lng: location.lng },
          map: this.map
        });
        // save markers
        this.markers.push(marker);

        // construct infowindow content by vue file
        const InfoWindow = Vue.extend(InfoWindowComponent);
        const instance = new InfoWindow({
          propsData: {
            content: location.name,
            backgroundUrl: location.mapTagImgUrl
          }
        });
        instance.$mount();

        const infowindow = new this.$google.maps.InfoWindow({
          content: instance.$el,
          // content: `
          // <div>
          //   <p style="font:14px Arial, sans-serif;">${location.name}</p>
          //   <img src="${location.mapTagImgUrl}" style="width:150px; height:150px;">
          // </div>`,
          maxWidth: 200
        });
        this.infowindow = infowindow;
        marker.addListener("click", () => {
          // if (this.infowindow) {
          //   this.infowindow.close();
          // }
          if (this.infowindow) {
            this.infowindow.open(this.map, marker);
          }
        });
      });
    }
  }
};
</script>

<style lang="sass" scoped src="@/assets/sass/g-map.sass"></style>
