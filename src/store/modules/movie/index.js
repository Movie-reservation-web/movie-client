import MovieService from "@/services/movie.service";

const movieChart = JSON.parse(localStorage.getItem("movieChart"));
const movieDetail = JSON.parse(localStorage.getItem("movieDetail"));
const initMovieChart = movieChart ? { movieChart } : { movieChart: null };
const initMovieDetail = movieDetail ? { movieDetail } : { movieDetail: null };

export default {
  namespaced: true,
  state: {
    initMovieChart,
    initMovieDetail,
  },
  // Server API 호출
  actions: {
    getMovieChart({ commit }, payload) {
      let movieChart = payload
        ? MovieService.getMovieChart(!payload)
        : MovieService.getUnreleasedMovieChart();
      return movieChart.then(
        (data) => {
          commit("GET_MOVIE_CHART", data);
          return Promise.resolve(data);
        },
        (error) => {
          commit("GET_MOVIE_CHART_FAIL");
          return Promise.resolve(error);
        }
      );
    },
    getMovieDetail({ commit }, payload) {
      return MovieService.getMovieDetail(payload).then(
        (data) => {
          commit("GET_MOVIE_DETAIL", data);
          return Promise.resolve(data);
        },
        (error) => {
          commit("GET_MOVIE_DETAIL_FAIL");
          return Promise.resolve(error);
        }
      );
    },
  },
  // API 호출 값을 파라미터로 전달받은 후 state에 값을 저장
  mutations: {
    GET_MOVIE_CHART(state, data) {
      state.movieChart = data;
    },
    GET_MOVIE_DETAIL(state, data) {
      state.movieDetail = data;
    },
    GET_MOVIE_CHART_FAIL(state) {
      state.movieChart = null;
    },
    GET_MOVIE_DETAIL_FAIL(state) {
      state.movieDetail = null;
    },
  },
  getters: {
    movieChart(state) {
      return state.movieChart;
    },
    movieDetail(state) {
      return state.movieDetail;
    },
  },
};
