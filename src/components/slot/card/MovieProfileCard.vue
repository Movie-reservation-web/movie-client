<template>
  <div style="width: 170.4px; margin-right: 32px; justify-content: start">
    <div class="img_wrap" data-scale="false">
      <img :src="movieProfile.image" :alt="movieProfile.title" />
      <div class="movieAgeLimit_wrap">
        <img
          :src="
            require(`@/assets/img/common/flag/rating/${movieProfile.filmRating.code}.png`)
          "
          :alt="movieProfile.filmRating.value"
        />
        <div class="dDay_wrap" v-if="isReleased(movieProfile.releaseDate)">
          <span>{{ calcD_day(movieProfile.releaseDate) }}</span>
        </div>
      </div>
      <div class="screenType_wrap"></div>
      <div class="movieChart_btn_wrap">
        <router-link
          tag="a"
          :to="{
            name: 'Movie',
            params: {
              id: movieProfile.id,
            },
          }"
          class="btn_movieChart_detail"
        >
          상세보기
        </router-link>
        <a
          href="/ticket/?MOVIE_CD=20029409&amp;MOVIE_CD_GROUP=20029409"
          class="btn_movieChart_ticketing"
          >예매하기</a
        >
      </div>
    </div>
    <div class="movie_info_wrap">
      <strong class="movieName">{{ movieProfile.title }}</strong>
      <span style="text-align: center">
        예매율 {{ movieProfile.reservationRate }}</span
      >
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { useMovie } from "@/composables/movie";

export default {
  name: "movie-profile-card",
  props: {
    movieProfile: Object,
  },
  setup() {
    const { getMovieDetail } = useMovie();
    const isReleased = (releaseDate) => {
      return moment(releaseDate, "YYYY.MM.DD").isAfter(moment());
    };
    const calcD_day = (releaseDate) => {
      return moment().diff(releaseDate, "days") - 1;
    };

    const setMovieDetail = (id) => {
      console.log("여기는 카드");
      getMovieDetail(id);
    };
    return {
      setMovieDetail,
      calcD_day,
      isReleased,
    };
  },
};
</script>

<style scoped></style>
