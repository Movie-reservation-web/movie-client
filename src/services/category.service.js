import axios from "@/axios";

class CategoryService {
  getGenderType = async () => {
    try {
      const res = await axios.get("categories/gender-type");
      return res.data.data;
    } catch (err) {
      console.log(err);
    }
  };
  getSortType = async (name) => {
    try {
      const res = await axios.get(`categories/sort-types/${name}`);
      return res.data.data;
    } catch (err) {
      console.log(err);
    }
  };
}

export default new CategoryService();
