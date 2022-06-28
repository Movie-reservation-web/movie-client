<template>
  <div class="cols-content" id="menu">
    <div class="col-detail">
      <div class="sect-story-movie">
        {{ movieDetail.info }}
      </div>
      <div class="sect-grade">
        <review-sort
          v-if="sortTypes"
          @click="switchOrder"
          :sort-types="sortTypes"
          :sort-type="sortType"
        />
        <div class="wrap-persongrade">
          <!-- 평점 목록 -->
          <ul id="movie_point_list_container" class="point_col2">
            <li v-for="review in reviews" :key="review.id">
              <div class="box-image">
                <span class="thumb-image">
                  <img
                    src="http://img.cgv.co.kr/R2014/images/common/default_profile.gif"
                    alt="사용자 프로필"
                  />
                  <span class="profile-mask"> </span>
                  <div class="theater-sticker"></div>
                </span>
              </div>
              <div class="box-contents">
                <ul class="writerinfo">
                  <li class="writer-name">
                    <a>{{ review.writer }}</a>
                  </li>
                  <li class="writer-etc">
                    <span class="day">{{ review.writeDate }}</span>
                    <span class="like point_like"
                      >평점 : {{ review.score }}점</span
                    >
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
      <Pagination
        :number-of-pages="numberOfPages"
        :current-page="currentPage"
        :content-limit="contentLimit"
        :page-limit="pageLimit"
        :page-group="pageGroup"
        @click="getReviews"
      />
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import CategoryService from "@/services/category.service";
import ReviewService from "@/services/review.service";
import Pagination from "../slot/Pagination";
import ReviewSort from "@/components/movie/ReviewSort";

export default {
  name: "movie-detail-etc",
  components: {
    Pagination,
    "review-sort": ReviewSort,
  },
  props: {
    movieDetail: Object,
  },
  setup(props) {
    const reviews = ref([]);
    // pagination
    const numberOfReviews = ref(0);
    const contentLimit = 4;
    const pageLimit = 5;
    const pageGroup = computed(() => {
      return Math.ceil(currentPage.value / pageLimit) - 1;
    });
    const currentPage = ref(1);
    const numberOfPages = ref(0);
    const sortTypes = ref([]);
    const sortType = ref("id,desc");
    // sort
    const getSortTypes = async () => {
      try {
        const res = await CategoryService.getSortType("review");
        sortTypes.value = res;
      } catch (err) {
        console.log(err);
      }
    };

    const switchOrder = async (sort) => {
      sortType.value = sort;
      await getReviews(1, sort);
    };
    getSortTypes();

    // review
    const getReviews = async (
      page = currentPage.value,
      sort = sortType.value
    ) => {
      currentPage.value = page;
      try {
        const res = await ReviewService.getReview(
          props.movieDetail.title,
          page,
          contentLimit,
          sort
        );
        numberOfReviews.value = res.totalElements;
        reviews.value = res.content;
        numberOfPages.value = res.totalPages;
      } catch (err) {
        console.log(err);
      }
    };
    getReviews(currentPage.value, "id,desc");

    return {
      pageLimit,
      pageGroup,
      contentLimit,
      currentPage,
      numberOfPages,
      numberOfReviews,
      sortType,
      getReviews,
      switchOrder,
      sortTypes,
      reviews,
    };
  },
};
</script>

<style scoped></style>
