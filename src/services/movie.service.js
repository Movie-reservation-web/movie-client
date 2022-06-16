import axios from "@/axios";

class MovieService {
  async getMovieChart(isReleased) {
    try {
      const res = await axios.get(`movies/chart?sortType=AUDIENCE_DESC&isReleased=${isReleased}`);
      console.log(res.data.data);
      return res.data.data;
    } catch (err) {
      console.log(err);
    }
  }
  async getUnreleasedMovieChart() {
    try {
      const res = await axios.get("movies/chart/unreleased");
      localStorage.setItem("movieChart", JSON.stringify(res.data.data));
      console.log(res.data.data);
      return res.data.data;
    } catch (err) {
      console.log(err);
    }
  }
  async getMovieDetail(id) {
    try {
      const res = await axios.get(`movies/${id}`);
      localStorage.setItem("movieDetail", JSON.stringify(res.data.data));
      console.log(res.data.data);
      return res.data.data;
    } catch (err) {
      console.log(err);
    }
  }
}

export default new MovieService();
