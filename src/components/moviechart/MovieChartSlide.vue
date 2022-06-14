<template>
  <Carousel :settings="settings">
    <Slide v-for="movie in movieChart" :key="movie">
      <div class="carousel__item">
        <movie-profile-card :movie-profile="movie"> </movie-profile-card>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { Carousel, Slide, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import MovieProfileCard from "@/components/slot/card/MovieProfileCard";

export default {
  name: "movie-chart-slide",
  props: {
    movieChart: Array,
  },
  components: {
    Carousel,
    Slide,
    Navigation,
    MovieProfileCard,
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 5,
      snapAlign: "center",
      itemsToScroll: 5,
    },
  }),
  setup() {},
};
</script>

<style></style>
