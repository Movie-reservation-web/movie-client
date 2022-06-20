<template>
  <div v-if="error !== ''">
    <p class="field-error msg">{{ error }}</p>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: String,
    },
  },
};
</script>
<style scoped>
.msg {
  font-size: 15px;
  color: red;
}
</style>
