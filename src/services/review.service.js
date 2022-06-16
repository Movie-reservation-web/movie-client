import axios from "@/axios";

const configHeaders = {
  "content-type": "application/json; charset=utf-8",
};

class ReviewService {
  getReview = async (movieTitle, sortType) => {
    try {
      let request = {
        movieTitle: movieTitle,
        writer: null,
      };
      return axios
        .get(`reviews/search?sort=${sortType}`, JSON.stringify(request), {
          headers: configHeaders,
        })
        .then((response) => {
          return response.data.data;
        });
    }

  }
}

export default new ReviewService();
