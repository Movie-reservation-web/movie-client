<template>
  <div class="sect-base-movie">
    <h3>
      <strong>{{ movieDetail.title }}</strong
      >기본 정보
    </h3>
    <div class="box-image">
      <span class="thumb-image">
        <img :src="movieDetail.image" alt="탑건-매버릭 포스터 새창" />
        <span class="ico-grade grade-12">
          {{ movieDetail.filmRating.value }}</span
        >
      </span>
    </div>
    <div class="box-contents">
      <div class="title">
        <strong>{{ movieDetail.title }}</strong>

        <em class="round brown"><span>예매중</span></em>
        <em class="round red" v-if="isReleased(movieDetail.releaseDate)"
          ><span>D{{ calcD_day(movieDetail.releaseDate) }}</span></em
        >
      </div>
      <div class="score">
        <strong class="percent"
          >예매율&nbsp;<span>{{ movieDetail.reservationRate }}</span></strong
        >
      </div>
      <div class="spec">
        <dl>
          <dt>감독 :&nbsp;</dt>
          <dd>
            <span>{{ movieDetail.director }}</span>
          </dd>
          <dt>&nbsp;/ 배우 :&nbsp;</dt>
          <dd class="on">
            <span v-for="(actor, index) in movieDetail.actors" :key="actor">
              {{ actor }}
              <span v-if="index !== movieDetail.actors.length - 1"
                >,&nbsp;</span
              >
            </span>
          </dd>
          <dt>장르 :&nbsp;</dt>
          <dd>
            <span v-for="(genre, index) in movieDetail.genres" :key="genre">
              {{ genre.value }}
              <span v-if="index !== movieDetail.genres.length - 1"
                >,&nbsp;</span
              >
            </span>
          </dd>
          <dt>&nbsp;/ 기본 :&nbsp;</dt>
          <dd class="on">
            {{ movieDetail.filmRating.value }},&nbsp;{{
              movieDetail.runningTime
            }}분,&nbsp;{{ movieDetail.nation }}
          </dd>
          <dt>개봉 :&nbsp;</dt>
          <dd class="on">{{ movieDetail.releaseDate }}</dd>
        </dl>
      </div>
      <span class="screentype">
        <template v-for="format in movieDetail.formats" :key="format">
          <a
            href="#"
            v-if="format.value != '2D'"
            :class="format.code"
            title="상세정보 바로가기"
            >{{ format.value }}</a
          >
        </template>
      </span>
      <span class="like">
        <a
          class="link-reservation"
          href="/ticket/?MOVIE_CD=20029791&amp;MOVIE_CD_GROUP=20020357"
          >예매</a
        >
      </span>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "movie-detail",
  props: {
    movieDetail: Object,
  },
  setup() {
    const isReleased = (releaseDate) => {
      return moment(releaseDate, "YYYY.MM.DD").isAfter(moment());
    };
    const calcD_day = (releaseDate) => {
      return moment().diff(releaseDate, "days") - 1;
    };
    return {
      isReleased,
      calcD_day,
    };
  },
};
</script>

<style scoped></style>
