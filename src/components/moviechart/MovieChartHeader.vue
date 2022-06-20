<template>
  <div class="tit-heading-wrap">
    <h3>무비차트</h3>
    <div class="submenu">
      <ul>
        <li :class="isChart ? 'on' : ''">
          <a
            href="#none"
            :title="isChart ? '선택' : ''"
            @click="switchChart(true)"
            >무비차트</a
          >
        </li>
        <li :class="isChart ? '' : 'on'">
          <a
            href="#none"
            :title="isChart ? '' : '선택'"
            @click="switchChart(false)"
            >상영예정작</a
          >
        </li>
        <!--<li><a href="/movies/?lt=3">CGV아트하우스</a></li>//-->
      </ul>
    </div>
  </div>
  <div class="sect-sorting" v-if="isChart">
    <div class="nowshow">
      <input
        type="checkbox"
        id="chk_nowshow"
        title="현재 선택됨"
        v-model="isReleased"
        @click="switchReleased"
      />
      <label for="chk_nowshow">현재 상영작만 보기</label>
    </div>
    <label for="order_type" class="hidden">정렬</label>
    <select
      id="order_type"
      name="order-type"
      style="margin-left: 5px"
      @change="switchSort($event)"
    >
      <option v-for="sort in sortTypes" :key="sort" :value="sort.code">
        {{ sort.value }}
      </option>
    </select>
    <!--    <button type="button" class="round gray" @click="onClick(selected, true)">-->
    <!--      <span style="padding-left: 0">GO</span>-->
    <!--    </button>-->
  </div>
</template>

<script>
import { ref, getCurrentInstance } from "vue";

export default {
  name: "movie-chart-header",
  props: {
    isChart: Boolean,
    sortTypes: Array,
    currentSort: String,
  },
  emits: ["click"],
  setup(props) {
    const { emit } = getCurrentInstance();
    const selected = ref(props.currentSort);
    const isReleased = ref(true);
    const switchChart = (isChart) => {
      emit("click", props.currentSort, !isReleased.value, isChart);
    };
    const switchSort = (event) => {
      emit("click", event.target.value, !isReleased.value, true);
    };
    const switchReleased = () => {
      isReleased.value = !isReleased.value;
      emit("click", props.currentSort, !isReleased.value, true);
    };
    return {
      isReleased,
      selected,
      switchChart,
      switchSort,
      switchReleased,
    };
  },
};
</script>

<style scoped></style>
