<template>
  <div class="cols-content" id="menu">
    <div class="col-detail">
      <div class="sect-story-movie">
        {{ info }}
      </div>
      <div class="sect-grade">
        <ul class="sort" id="sortTab">
          <li
            v-for="sortType in sortTypes"
            :key="sortType"
            :class="isClick ? 'on' : ''"
            @click="switchOrder(sortType.code)"
          >
            {{ sortType.value }}
            <span class="arrow-down"></span>
          </li>
        </ul>
        <div class="wrap-persongrade">
          <!-- 평점 목록 -->
          <ul id="movie_point_list_container" class="point_col2">
            <li v-for="review in reviews" :key="review.id">
              <div class="box-contents">
                <ul class="writerinfo">
                  <li class="writer-name">{{ review.writer }}</li>
                  <li class="writer-etc">
                    <span class="day">{{ review.writeDate }}</span>
                  </li>
                </ul>
              </div>
              <div class="box-comment">
                <p>{{ review.comment }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Pagination
      v-if="reviews.length"
      :number-of-pages="numberOfPages"
      :current-page="currentPage"
      @click="getReviews"
    />
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import CategoryService from "@/services/category.service";
import ReviewService from "@/services/review.service";

export default {
  name: "movie-detail-etc",
  setup() {
    const store = useStore();
    const movieDetail = computed(() => store.getters["movie/movieDetail"]);
    const reviews = ref([]);
    const numberOfReviews = ref(0);
    const limit = 10;
    const currentPage = ref(1);
    const numberOfPages = computed(() => {
      return Math.ceil(numberOfReviews.value / limit);
    });
    const getReviews = async () => {
      currentPage.value = page;
      try {
        const res = await axios.get(`todos?_sort=id&_order=desc&subject_like=${searchText.value}&_page=${page}&_limit=${limit}`)
        numberOfTodos.value = res.headers['x-total-count'];
        todos.value = res.data;
      } catch (err) {
        console.log(err);
        triggerToast('Something went wrong..', 'danger');
      }
    }

    const isClick = ref(true);
    const sortTypes = CategoryService.getSortType("review");
    const switchOrder = async (sortType) => {
      isClick.value = !isClick.value;
      reviews.value = await ReviewService.getReview(
        movieDetail.value.title,
        sortType
      );
    };
    return {
      currentPage,
      numberOfPages,
      numberOfReviews,
      isClick,
      switchOrder,
      sortTypes,
      info: movieDetail.value.info,
      reviews,
    };
  },
};
</script>

<style scoped></style>
