<template>
  <div id="container">
    <div id="contents">
      <div class="wrap-movie-detail" id="select_main">
        <movie-detail v-if="!isPending" />
        <!-- .sect-base -->
        <movie-detail-etc v-if="!isPending" />
      </div>
    </div>
  </div>
</template>

<script>
import MovieDetail from "@/components/movie/MovieDetail";
import MovieDetailEtc from "@/components/movie/MovieDetailEtc";
import { useMovie } from "@/composables/movie";

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
    if (props.id != null) {
      getMovieDetail(props.id);
    }
    return {
      isPending,
    };
  },
};
</script>

<style scoped></style>
