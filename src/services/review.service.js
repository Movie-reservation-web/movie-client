import axios from "@/axios";

const configHeaders = {
  "content-type": "application/json; charset=utf-8",
};

class ReviewService {
  getReview = async (movieTitle, page, size, sortType) => {
    try {
      let request = {
        movieTitle: movieTitle,
        writer: "",
      };
      const res = await axios.post(
        `reviews/search?page=${page - 1}&size=${size}&sort=${sortType}`,
        JSON.stringify(request),
        { headers: configHeaders }
      );
      return res.data.data;
    } catch (err) {
      console.log(err);
    }
  };
}
export default new ReviewService();
