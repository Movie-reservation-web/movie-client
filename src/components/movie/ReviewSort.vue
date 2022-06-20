<template>
  <ul class="sort" id="sortTab">
    <li
      v-for="sort in sortTypes"
      :key="sort"
      class="sortTab"
      :class="sortType === sort.code ? 'on' : ''"
    >
      <a style="cursor: pointer" @click="onClick(sort.code)">
        {{ sort.value }}
        <span class="arrow-down"></span>
      </a>
    </li>
  </ul>
</template>

<script>
import { getCurrentInstance } from "vue";

export default {
  name: "review-sort",
  props: {
    sortTypes: Array,
    sortType:String,
  },
  emits: ["click"],
  setup() {
    const { emit } = getCurrentInstance();
    const onClick = (sort) => {
      emit("click", sort);
    };

    return {
      onClick,
    };
  },
};
</script>

<style scoped>
a:hover{
  color: inherit;
}
</style>
