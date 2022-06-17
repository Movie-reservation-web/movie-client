<template>
  <div class="paging">
    <ul id="paging_point">
      <li :class="currentPage ? 'on' : ''" @click="currentPage">
        <a href="#1" title="1페이지 선택">1</a>
      </li>
      <li class="paging-side">
        <button class="btn-paging next" type="button">다음 10개</button>
      </li>
      <li class="paging-side">
        <button class="btn-paging end" type="button">끝</button>
      </li>
    </ul>
  </div>

  <div class="paging">
    <ul class="paging_point">
      <template v-if="!isFirstPage(currentPage)">
        <li class="paging-side">
          <button class="btn-paging first" type="button">처음</button>
        </li>
        <li class="paging-side">
          <button
            class="btn-paging prev"
            @click="
              onClick((Math.round(currentPage / pageLimit) + 1) * pageLimit)
            "
            type="button"
          >
            이전 5개
          </button>
        </li>
      </template>
      <li
        v-for="page in pageLimit"
        :key="page"
        :class="currentPage % pageLimit === page ? 'on' : ''"
      >
        <a @click="onClick(page)" :title="page+'페이지 선택'"> {{ page + 1 }}</a>
      </li>
      <template v-if="!isLastPage(currentPage, numberOfPages)">
        <li class="paging-side">
          <button
            class="btn-paging next"
            @click="onClick(currentPage + 5)"
            type="button"
          >
            다음 5개
          </button>
        </li>
        <li class="paging-side">
          <button
            v-if="currentPage > pageLimit"
            class="btn-paging first"
            type="button"
          >
            끝
          </button>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import { computed, getCurrentInstance } from "vue";

export default {
  props: {
    numberOfPages: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
    pageLimit: {
      type: Number,
      required: true,
    },
    contentLimit: {
      type: Number,
      required: true,
    },
  },
  emits: ["click"],
  setup(props) {
    const { emit } = getCurrentInstance();
    const onClick = (page) => {
      emit("click", page);
    };
    const isLastPage = (cp, np) => {
      return parseInt(cp / props.pageLimit) === parseInt(np / props.pageLimit);
    };
    const isFirstPage = (cp) => {
      return cp < props.pageLimit;
    };
    return {
      currentPage,
      isFirstPage,
      isLastPage,
      onClick,
    };
  },
};
</script>

<style scoped></style>
