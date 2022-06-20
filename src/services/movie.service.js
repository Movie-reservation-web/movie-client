import axios from "@/axios";

class MovieService {
  getMovieChart = async (isReleased) => {
    try {
      const res = await axios.get(
        `movies/chart?sortType=AUDIENCE_DESC&isReleased=${isReleased}`
      );
      return res.data.data;
    } catch (err) {
      console.log(err);
    }
  };
  getUnreleasedMovieChart = async () => {
    try {
      const res = await axios.get("movies/chart/unreleased");
      return res.data.data;
    } catch (err) {
      console.log(err);
    }
  };
  getMovieDetail = async (id) => {
    try {
      const res = await axios.get(`movies/${id}`);
      return res.data.data;
    } catch (err) {
      console.log(err);
    }
  };
}

export default new MovieService();
