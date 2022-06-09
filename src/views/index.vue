<template>
  <div class="home">
    <div class="container px-4 px-lg-5">
      <button @click="paymentBtn">결제하기</button>
      <button @click="cancelPaymentBtn">취소하기</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import PaymentService from "@/services/payment.service";

export default {
  name: "home",
  components: {},
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
