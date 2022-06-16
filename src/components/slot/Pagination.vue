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

  <nav aria-label="Page navigation example">
    <ul class="pagination">

      <li
        v-for="page in numberOfPages"
        :key="page"
        :class="currentPage === page ? 'on' : ''"
      >
        <a style="cursor: pointer" @click="onClick(page)"> {{ page }}</a>
      </li>
      <li v-if="currentPage !== 1" class="paging-side">
        <button
          class="btn-paging prev"
          @click="onClick(currentPage - 10)"
          type="button"
        >
          이전 10개
        </button>
      </li>
      <li v-if="numberOfPages !== currentPage" class="paging-side">
        <button
          class="btn-paging prev"
          @click="onClick(currentPage + 10)"
          type="button"
        >
          다음 10개
        </button>
      </li>
      <li v-if="currentPage !== 1" class="paging-side">
        <button
          class="btn-paging prev"
          @click="onClick(currentPage - 10)"
          type="button"
        >
          이전 10개
        </button>
      </li>
      <li v-if="numberOfPages !== currentPage" class="paging-side">
        <button
          class="btn-paging prev"
          @click="onClick(currentPage + 10)"
          type="button"
        >
          다음 10개
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
import { getCurrentInstance } from "vue";

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
  },
  emits: ["click"],
  setup() {
    const { emit } = getCurrentInstance();
    const onClick = (page) => {
      emit("click", page);
    };

    return {
      onClick,
    };
  },
};
</script>

<style scoped></style>
