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
    <pagination
      v-if="reviews.length"
      :number-of-pages="numberOfPages"
      :current-page="currentPage"
      :contentLimit="contentLimit"
      :pageLimit="pageLimit"
      @click="getReviews"
    />
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import CategoryService from "@/services/category.service";
import ReviewService from "@/services/review.service";
import Pagination from "../slot/Pagination";

export default {
  name: "movie-detail-etc",
  components: {
    Pagination,
  },
  setup() {
    const store = useStore();
    const movieDetail = computed(() => store.getters["movie/movieDetail"]);
    const reviews = ref([]);
    const numberOfReviews = ref(0);
    const contentLimit = 6;
    const pageLimit = 5;
    const currentPage = ref(0);
    const isClick = ref(true);
    const sortTypes = CategoryService.getSortType("review");

    const numberOfPages = ref(0);
    const getReviews = async (title, page, sortType) => {
      currentPage.value = page;
      try {
        const res = ReviewService.getReview(
          title,
          page,
          contentLimit.value,
          sortType
        );
        numberOfReviews.value = res.totalElements;
        reviews.value = res.content;
        numberOfPages.value = res.totalPages;
      } catch (err) {
        console.log(err);
      }
    };
    getReviews(movieDetail.value.title, currentPage, sortTypes[0]);
    const switchOrder = async (sortType) => {
      isClick.value = !isClick.value;
      reviews.value = await ReviewService.getReview(
        movieDetail.value.title,
        currentPage,

        sortType
      );
    };
    return {
      pageLimit,
      contentLimit,
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
