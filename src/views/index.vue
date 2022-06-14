<template>
  <div id="container">
    <video-slot />
    <div class="movieChartBeScreen_wrap">
      <div class="contents">
        <div class="movieChartBeScreen_btn_wrap">
          <div class="tabBtn_wrap">
            <h3>
              <a
                href="#none"
                :class="{ active: isActive }"
                @click="switchMovieChart"
                >무비차트</a
              >
            </h3>
            <h3>
              <a
                href="#none"
                :class="{ active: !isActive }"
                @click="switchMovieChart"
                >상영예정작</a
              >
            </h3>
          </div>
          <a
            href="/movies/?lt=1&amp;ft=0"
            id="btn_allView_Movie"
            class="btn_allView"
            >전체보기</a
          >
        </div>

        <div class="carousel movieChart_list" id="movieChart_list">
          <movie-chart-slide :movie-chart="movieChart"></movie-chart-slide>
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
import VideoSlot from "@/components/slot/VideoSlot";
export default {
  name: "home",
  components: {
    VideoSlot,
    MovieChartSlide },
  setup() {
    // const { error, payment, isPending } = usePayment();
    const amount = ref(10000);
    const name = ref("예매 테스트");
    const buyer_email = ref("movie@gmail.com");
    const buyer_name = ref("이규연");
    const buyer_tel = ref("010-1111-1111");
    const ticketNumber = ref("2206-8157-4561-80DE");
    const isActive = ref(true);

    const payInfo = {
      amount: amount.value,
      name: name.value,
      buyer_email: buyer_email.value,
      buyer_name: buyer_name.value,
      buyer_tel: buyer_tel.value,
    };

    const paymentBtn = () => {
      PaymentService.readyPayment(payInfo);
    };

    const cancelPaymentBtn = () => {
      PaymentService.cancelPayment(ticketNumber.value, buyer_email.value);
    };

    const { movieChart, getMovieChart } = useMovie();

    if (!movieChart || !movieChart.length) {
      getMovieChart(isActive.value);
    }

    const switchMovieChart = () => {
      isActive.value = !isActive.value;
      getMovieChart(isActive.value);
    };

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
      isActive,
      switchMovieChart,
      movieChart,
    };
  },
};
</script>
<style>
video {
  object-fit: contain;
}
</style>
