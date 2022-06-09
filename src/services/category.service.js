import axios from "axios";

const API_URL = "http://localhost:8080";

class CategoryService {
  getGenderType() {
    return axios
      .get(API_URL + "/api/v1/categories/gender-type")
      .then((response) => {
        // localStorage.setItem('genderTypes', JSON.stringify(response.data.data))
        return response.data.data;
      });
  }
}

export default new CategoryService();
