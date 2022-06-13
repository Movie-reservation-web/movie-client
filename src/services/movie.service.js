import axios from "@/axios";

class MovieService {
  async getMovieChart() {
    try {
      const res = await axios.get("movies/chart?sortType=AUDIENCE_DESC");
      console.log(res.data.data);
      return res.data.data;
    } catch (err) {
      console.log(err);
    }
  }
  async getMovieDetail(id) {
    try {
      const res = await axios.get(`movies/${id}`);
      console.log(res.data.data);
      return res.data.data;
    } catch (err) {
      console.log(err);
    }
  }
}

export default new MovieService();
