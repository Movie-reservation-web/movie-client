<template>
  <div class="sect-movie-chart">
    <h4 class="hidden">무비차트 - 예매율순</h4>
    <ol v-for="row in 3" :key="row">
      <movie-chart-card
        v-for="col in 4"
        :key="col"
        :index="(row - 1) * 4 + (col - 1)"
        :movie-profile="movieChart[(row - 1) * 4 + (col - 1)]"
      />
    </ol>
    <button class="btn-more-fontbold">
      더보기 <i class="link-more">더보기</i>
    </button>
  </div>
</template>

<script>
import MovieChartCard from "@/components/moviechart/MovieChartCard";
export default {
  name: "movie-chart-list",
  components: {
    "movie-chart-card": MovieChartCard,
  },
  props: {
    movieChart: Array,
  },
  setup() {},
};
</script>

<style scoped></style>
