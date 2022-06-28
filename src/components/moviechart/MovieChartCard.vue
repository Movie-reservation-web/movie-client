<template>
  <li v-if="movieProfile">
    <div class="box-image">
      <strong class="rank">No.{{ index + 1 }}</strong>
      <router-link
        tag="a"
        :to="{
          name: 'Movie',
          params: {
            id: movieProfile.id,
          },
        }"
      >
        <span class="thumb-image">
          <img :src="movieProfile.image" :alt="movieProfile.title" />
          <span class="ico-grade grade-15">{{
            movieProfile.filmRating.value
          }}</span>
        </span>
      </router-link>
      <span class="screentype"> </span>
    </div>

    <div class="box-contents">
      <router-link
        tag="a"
        :to="{
          name: 'Movie',
          params: {
            id: movieProfile.id,
          },
        }"
        ><strong class="title">{{ movieProfile.title }}</strong>
      </router-link>
      <div class="score">
        <strong class="percent"
          >예매율<span>{{ movieProfile.reservationRate }}</span></strong
        >
      </div>

      <span class="txt-info">
        <strong>
          {{ movieProfile.releaseDate }}
          <span>개봉</span>
          <em class="dday" v-if="isReleased(movieProfile.releaseDate)">
            D{{ calcD_day(movieProfile.releaseDate) }}</em
          >
        </strong>
      </span>
      <span class="like">
        <a class="link-reservation" href="/">예매</a>
      </span>
    </div>
  </li>
</template>

<script>
import moment from "moment";

export default {
  name: "movie-chart-card",
  props: {
    index: Number,
    movieProfile: Object,
  },
  setup() {
    const isReleased = (releaseDate) => {
      return moment(releaseDate, "YYYY.MM.DD").isAfter(moment());
    };
    const calcD_day = (releaseDate) => {
      return moment().diff(releaseDate, "days") - 1;
    };

    return {
      calcD_day,
      isReleased,
    };
  },
};
</script>

<style scoped></style>
