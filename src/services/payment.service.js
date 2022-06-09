import axios from "@/axios";

const configHeaders = {
  "content-type": "application/json; charset=utf-8",
};

class PaymentService {
  readyPayment(payInfo) {
    console.log(payInfo);
    /* 1. 가맹점 식별하기 */
    const { IMP } = window;
    IMP.init("imp96729299");

    /* 2. 결제 데이터 정의하기 */
    const data = {
      pg: "kakao", // PG사
      pay_method: "card", // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      amount: payInfo.amount, // 결제금액
      name: payInfo.name, // 주문명
      buyer_name: payInfo.buyer_name, // 구매자 이름
      buyer_tel: payInfo.buyer_tel, // 구매자 전화번호
      buyer_email: payInfo.buyer_email, // 구매자 이메일
    };
    IMP.request_pay(data, this.callback);
  }

  callback(response) {
    const { success, imp_uid, error_msg, merchant_uid, paid_amount,buyer_email } = response;
    if (success) {
      let request = {
        merchant_uid: merchant_uid,
        paid_amount: paid_amount,
      };
      return axios
        .post(`/payment/complete/${imp_uid}`, JSON.stringify(request), {
          headers: configHeaders,
        })
        .then((response) => {
          let reserveRequest = {
            merchant_uid: merchant_uid,
            schedule_number: "2206F38328D9",
            member_email: buyer_email,
            seats: ["A1", "A2"],
          };
          return axios
            .post("/tickets", JSON.stringify(reserveRequest), {
              headers: configHeaders,
            })
            .then(() => {
              console.log(response.data.message);
            })
            .catch((reason) => {
              console.log(reason.data.message);
            });
        });
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  }

  cancelPayment(ticketNumber, memberEmail) {
    let request = {
      member_email: memberEmail,
      reserved_number: ticketNumber,
    };
    console.log(request)
    return axios
      .post("/tickets/cancel", JSON.stringify(request), {
        headers: configHeaders,
      })
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((reason) => {
        console.log(reason.data.message);
      });
  }
}

export default new PaymentService();
