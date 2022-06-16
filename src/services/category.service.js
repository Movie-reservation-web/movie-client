import axios from "@/axios";

class CategoryService {
  getGenderType() {
    return axios.get("/api/v1/categories/gender-type").then((response) => {
      return response.data.data;
    });
  }
  getSortType(name) {
    return axios
      .get(`/api/v1/categories/sort-type/${name}`)
      .then((response) => {
        return response.data.data;
      });
  }
}

export default new CategoryService();
