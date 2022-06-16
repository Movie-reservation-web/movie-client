import {ref} from "vue";
import { useStore } from "vuex";

export const useMovie = () => {
  const store = useStore();
  const error = ref(null);
  const isPending = ref(false);
  const movieDetail = ref(store.getters["movie/movieDetail"]);

  const getMovieChart = async (isReleased) => {
    error.value = null;
    isPending.value = true;
    try {
      await store.dispatch("movie/getMovieChart", isReleased);
      error.value = null;
      isPending.value = false;
    } catch (err) {
      error.value = "영화 차트를 가져올 수 없습니다.";
      isPending.value = false;
    }
  };
  const getMovieDetail = async (id) => {
    error.value = null;
    isPending.value = true;
    try {
      await store.dispatch("movie/getMovieDetail", id);
      error.value = null;
      isPending.value = false;
    } catch (err) {
      error.value = "영화 차트를 가져올 수 없습니다.";
      isPending.value = false;
    }
  };

  return {
    error,
    isPending,
    movieDetail,
    getMovieChart,
    getMovieDetail,
  };
};
