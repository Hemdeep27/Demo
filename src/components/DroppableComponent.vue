<template>
  <div @dragover.prevent @drop="dropHandler">
    <slot :value="value"></slot>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      required: true,
    },
    group: {
      type: String,
      default: "",
    },
  },
  methods: {
    dropHandler(event) {
      event.preventDefault();
      const data = JSON.parse(event.dataTransfer.getData("application/json"));
      this.$emit("input", [...this.value, data]);
    },
  },
};
</script>
