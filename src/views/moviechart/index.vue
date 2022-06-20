<template>
  <div id="container">
    <div class="contents">
      <div class="wrap-movie-chart">
        <movie-chart-header
          :is-chart="isChart"
          :sort-types="sortTypes"
          :current-sort="currentSort"
          @click="switchChart"
        />
        <movie-chart-list v-if="movieChart" :movie-chart="movieChart" />
      </div>
    </div>
  </div>
</template>

<script>
import MovieChartHeader from "@/components/moviechart/MovieChartHeader";
import MovieChartList from "@/components/moviechart/MovieChartList";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import { useMovie } from "@/composables/movie";
import CategoryService from "@/services/category.service";

export default {
  name: "movie-chart",
  components: {
    MovieChartHeader,
    MovieChartList,
  },
  setup() {
    const store = new useStore();
    const { getUnreleasedMovieChart, getMovieChart } = useMovie();
    const sortTypes = ref([]);
    const currentSort = ref("");
    const isChart = ref(true);
    onMounted(async () => {
      sortTypes.value = await CategoryService.getSortType("moviechart");
      currentSort.value = sortTypes.value[0].code;
      if (store.state.movie.movieChart == null) {
        await getMovieChart(currentSort.value, false);
      }
    });

    const movieChart = computed(() => {
      return store.state.movie.movieChart;
    });

    const switchChart = (selected, isReleased, chartOpt) => {
      currentSort.value = selected;
      isChart.value = chartOpt;
      chartOpt
        ? getMovieChart(currentSort.value, isReleased)
        : getUnreleasedMovieChart();
    };

    return {
      isChart,
      currentSort,
      sortTypes,
      switchChart,
      movieChart,
    };
  },
};
</script>

<style scoped></style>
