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
      </div>
      <div class="screenType_wrap"></div>
      <div class="movieChart_btn_wrap">
        <a
          :href="`/movies/detail-view/${movieProfile.id}`"
          class="btn_movieChart_detail"
          >상세보기
        </a>
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
export default {
  name: "movie-profile-card",
  props: {
    movieProfile: Object,
  },
  setup() {},
};
</script>

<style scoped></style>
