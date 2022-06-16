<template>
  <div id="container">
    <video-slot />
    <simple-movie-chart />
  </div>
</template>

<script>
import { ref } from "vue";
import PaymentService from "@/services/payment.service";
import VideoSlot from "@/components/slot/VideoSlot";
import SimpleMovieChart from "@/components/moviechart/SimpleMovieChart";
export default {
  name: "Home",
  components: { VideoSlot, SimpleMovieChart },
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

    const paymentBtn = () => {
      PaymentService.readyPayment(payInfo);
    };

    const cancelPaymentBtn = () => {
      PaymentService.cancelPayment(ticketNumber.value, buyer_email.value);
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
    };
  },
};
</script>

<style scoped>
video {
  object-fit: contain;
}
</style>
