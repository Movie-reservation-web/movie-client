<template>
  <div
    id="ctl00_PlaceHolderContent_divMovieSelection_wrap"
    class="movieSelection_wrap"
  >
    <div class="contents">
      <div class="video_wrap">
        <video autoplay muted ref="video">
          <source
            src="https://adimg.cgv.co.kr/images/202205/Witch2/220527_Witch2_1080x608.mp4"
            type="video/mp4"
          />
          이 브라우저는 Video 태그를 지원하지 않습니다. (Your browser does not
          support the video tag.)
        </video>
        <strong
          id="ctl00_PlaceHolderContent_AD_MOVIE_NM"
          class="movieSelection_title"
          >마녀(魔女) Part2. The Other One</strong
        >
        <span
          id="ctl00_PlaceHolderContent_AD_DESCRIPTION_NM"
          class="movieSelection_txt"
          >모든 것의 시작,<br />또 다른 존재가 깨어난다!</span
        >
        <div class="movieSelection_video_controller_wrap">
          <a
            href="http://ad.cgv.co.kr/click/CGV/CGV_201401/main@MovieSelection2021?ads_id%3d47082%26creative_id%3d66729%26click_id%3d87079%26maid%3D%26event%3d"
            id="ctl00_PlaceHolderContent_AD_CLIP_DETAIL_URL"
            class="btn_movieSelection_detailView"
            >상세보기</a
          >
          <a
            href="#none"
            id="ctl00_PlaceHolderContent_playStop"
            class="btn_movieSelection_playStop"
            :class="{ active: !this.isStop }"
            @click="this.switchPlay()"
            >Stop</a
          >
          <a
            href="#none"
            id="ctl00_PlaceHolderContent_soundOnOff"
            class="btn_movieSelection_soundOnOff"
            :class="{ active: this.isSoundOn }"
            @click="this.switchSound()"
            >Sound On</a
          >
          <input
            name="ctl00$PlaceHolderContent$AD_CNT_URL"
            type="hidden"
            id="ctl00_PlaceHolderContent_AD_CNT_URL"
            value="http://ad.cgv.co.kr/NetInsight/imp/CGV/CGV_201401/main@MovieSelection2021?ads_id%3d47082%26creative_id%3d66729"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "video-slot",
  components: {},
  data() {
    return {
      isStop: false,
      isSoundOn: false,
    };
  },
  setup() {},
  methods: {
    switchPlay() {
      this.isStop = !this.isStop;
      this.isStop ? this.$refs.video.pause() : this.$refs.video.play();
    },
    switchSound() {
      this.isSoundOn = !this.isSoundOn;
      this.$refs.video.muted = !this.isSoundOn;
      if (this.$refs.video.volume === 1) this.$refs.video.volume = 0.1;
      console.log(this.$refs.video.volume);
    },
  },
};
</script>

<style></style>
