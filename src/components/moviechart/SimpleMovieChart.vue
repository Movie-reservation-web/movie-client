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
import { ref } from "vue";
import MovieChartSlide from "@/components/moviechart/MovieChartSlide";
import { useMovie } from "@/composables/movie";

export default {
  name: "simple-movie-chart",
  components: {
    MovieChartSlide,
  },
  setup() {
    const isActive = ref(true);
    const { movieChart, getMovieChart } = useMovie();

    if (!movieChart || !movieChart.length) {
      getMovieChart(isActive.value);
    }

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
