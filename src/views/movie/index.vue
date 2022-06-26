<template>
  <div id="container">
    <div id="contents">
      <div class="wrap-movie-detail" id="select_main">
        <movie-detail v-if="movieDetail" :movieDetail="movieDetail" />
        <movie-detail-etc v-if="movieDetail" :movieDetail="movieDetail" />
      </div>
    </div>
  </div>
</template>

<script>
import MovieDetail from "@/components/movie/MovieDetail";
import MovieDetailEtc from "@/components/movie/MovieDetailEtc";
import { useMovie } from "@/composables/movie";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

export default {
  name: "movie",
  components: {
    MovieDetail,
    MovieDetailEtc,
  },
  props: {
    id: String,
  },
  setup(props) {
    const { isPending, getMovieDetail } = useMovie();
    const store = new useStore();

    onMounted(async (id = props.id) => {
      let initData = store.state.movie.movieDetail;
      if (initData == null || (id != null && initData.id != id)) {
        await getMovieDetail(id);
      }
    });
    const movieDetail = computed(() => {
      return store.getters["movie/movieDetail"];
    });

    return {
      isPending,
      movieDetail,
    };
  },
};
</script>

<style scoped></style>
