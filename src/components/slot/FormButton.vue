<template>
  <div class="form-group">
    <button
      v-if="!isPending"
      class="form-control btn btn-primary rounded submit mt-3 px-3"
    >
      {{ label }}
    </button>
    <button
      v-if="isPending"
      class="form-control btn btn-primary rounded submit mt-3 px-3"
      disabled
    >
      Loading
    </button>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    isPending: {
      type: Boolean,
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>
<style scoped>
.form-group {
  position: relative;
}

.form-group label {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1px;
  color: #943939;
}

.form-control {
  height: 52px;
  background: #fff;
  color: #000;
  font-size: 16px;
  border-radius: 5px;
  -webkit-box-shadow: none;
  box-shadow: none;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.btn {
  cursor: pointer;
  border-radius: 40px;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-size: 15px;
}

.btn:hover,
.btn:active,
.btn:focus {
  outline: none;
}

.btn.btn-primary {
  width: 90%;
  background: #943939;
  border: none;
  color: #ffdfa2;
  text-transform: uppercase;
  box-shadow: -6px -6px 5px rgba(201, 140, 110, 0.8), 3px 3px 10px;
}

.btn.btn-primary:hover {
  background: #ffdfa2;
  color: #943939;
  box-shadow: inset -3px -3px 5px rgba(201, 140, 110, 0.5),
    inset 8px 0px 16px rgba(201, 140, 110, 0.1);
}
</style>
