<template>
  <div id="container">
    <div
      id="ctl00_PlaceHolderContent_divMovieSelection_wrap"
      class="movieSelection_wrap"
    >
      <div class="contents">
        <div class="video_wrap">
          <video autoplay muted>
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
              >Stop</a
            >
            <a
              href="#none"
              id="ctl00_PlaceHolderContent_soundOnOff"
              class="btn_movieSelection_soundOnOff"
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
    <div class="movieChartBeScreen_wrap">
      <div class="contents">
        <div class="movieChartBeScreen_btn_wrap">
          <div class="tabBtn_wrap">
            <h3><a href="#none" class="active" id="btnMovie">무비차트</a></h3>
            <h3><a href="#none" id="btnReserMovie">상영예정작</a></h3>
          </div>
          <a
            href="/movies/?lt=1&amp;ft=0"
            id="btn_allView_Movie"
            class="btn_allView"
            >전체보기</a
          >
        </div>

        <div
          class="carousel movieChart_list"
          id="movieChart_list"
        >
          <movie-chart-slide :movie-chart="movieChart">

          </movie-chart-slide>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import PaymentService from "@/services/payment.service";
import MovieChartSlide from "@/components/moviechart/MovieChartSlide";
import { useMovie } from "@/composables/movie";

export default {
  name: "home",
  components: {MovieChartSlide},
  setup() {
    // const { error, payment, isPending } = usePayment();
    const amount = ref(10000);
    const name = ref("예매 테스트");
    const buyer_email = ref("movie@gmail.com");
    const buyer_name = ref("이규연");
    const buyer_tel = ref("010-1111-1111");
    const ticketNumber = ref("2206-8157-4561-80DE");

    const payInfo = {
      amount: amount.value,
      name: name.value,
      buyer_email: buyer_email.value,
      buyer_name: buyer_name.value,
      buyer_tel: buyer_tel.value,
    };

    console.log(payInfo);
    const paymentBtn = () => {
      PaymentService.readyPayment(payInfo);
    };

    const cancelPaymentBtn = () => {
      PaymentService.cancelPayment(ticketNumber.value, buyer_email.value);
    };

    const { movieChart, getMovieChart } = useMovie();
    if (!movieChart || !movieChart.length){
      getMovieChart();
    }

    return {
      amount,
      name,
      buyer_email,
      buyer_name,
      buyer_tel,
      payInfo,
      ticketNumber,
      paymentBtn,
      cancelPaymentBtn,
      movieChart
    };
  },
};
</script>
<style>
video {
  object-fit: contain;
}
</style>
