<template>
  <img :src="formLogo" alt="" />
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  props: {
    reverse: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const store = useStore();

    const formLogo = computed(() => {
      return props.reverse ? store.state.logo_reverse : store.state.logo;
    });
    return { formLogo };
  },
};
</script>
