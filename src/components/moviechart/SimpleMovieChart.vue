<template>
  <div class="movieChartBeScreen_wrap">
    <div class="contents">
      <div class="movieChartBeScreen_btn_wrap">
        <div class="tabBtn_wrap">
          <h3>
            <a
              href="#none"
              :class="{ active: isActive }"
              @click="switchMovieChart"
            >
              무비차트
            </a>
          </h3>
          <h3>
            <a
              href="#none"
              :class="{ active: !isActive }"
              @click="switchMovieChart"
            >
              상영예정작
            </a>
          </h3>
        </div>
        <a
          href="/movies/?lt=1&amp;ft=0"
          id="btn_allView_Movie"
          class="btn_allView"
          style="text-decoration:none;color: inherit"
        >
          전체보기
        </a>
      </div>

      <div class="carousel movieChart_list" id="movieChart_list">
        <movie-chart-slide :movie-chart="movieChart"></movie-chart-slide>
      </div>
    </div>
  </div>
</template>

<script>
import {computed, onMounted, ref} from "vue";
import MovieChartSlide from "@/components/moviechart/MovieChartSlide";
import {useStore} from "vuex";

import {useMovie} from "@/composables/movie";

export default {
  name: "simple-movie-chart",
  components: {
    MovieChartSlide,
  },
  setup() {
    const isActive = ref(true);
    const store = new useStore();

    const {getMovieChart} = useMovie();
    onMounted(async () => {
      if (store.state.movie.movieChart == null) {
        await getMovieChart(isActive.value);
      }
    });
    const movieChart = computed(() => {
      return store.state.movie.movieChart;
    });

    const switchMovieChart = () => {
      isActive.value = !isActive.value;
      getMovieChart(isActive.value);
    };

    return {
      isActive,
      switchMovieChart,
      movieChart,
    };
  },
};
</script>
