<template>
  <Carousel :settings="settings">
    <Slide v-for="movie in movieChart" :key="movie">
      <div class="carousel__item">
        <simple-movie-chart-card :movie-profile="movie">
        </simple-movie-chart-card>
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
import SimpleMovieChartCard from "@/components/moviechart/SimpleMovieChartCard";

export default {
  name: "movie-chart-slide",
  props: {
    movieChart: Array,
  },
  components: {
    Carousel,
    Slide,
    Navigation,
    "simple-movie-chart-card": SimpleMovieChartCard,
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
