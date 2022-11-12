<template>
  <select :name="name" :class="inputSize" @change="changeValue">
    <option v-for="option in selectOptions" :key="option" :value="option">
      {{ option }}
    </option>
  </select>
</template>

<script>
export default {
  props: ["name", "selectOptions", "size", "modelValue"],
  emits: ["update:modelValue"],
  data() {
    return {
      activeOption: this.modelValue,
    };
  },
  methods: {
    changeValue(event) {
      this.activeOption = event.target.value;
      this.$emit("update:modelValue", this.activeOption);
      console.log(this.activeOption);
    },
  },
  computed: {
    inputSize() {
      return {
        third: this.size === "third",
        half: this.size === "half",
        full: this.size === "full",
      };
    },
  },
};
</script>

<style scoped>
select {
  border: none;
  background: var(--input-grey-100);
  padding: 18px 15px;
  border-radius: 8px;
  margin: 0 0 22px 0;
  font-weight: 700;
  height: 60px;
  color: var(--text-dark);
  font-size: 18px;
}
select:hover {
  background: var(--input-grey-200);
}
select:active,
select:focus {
  background: var(--input-grey-300);
}
option {
  background: white;
  border: none;
}
.third {
  width: 220px;
}
.half {
  width: 360px;
}
.full {
  width: 100%;
}

@media only screen and (max-width: 850px) {
  div {
    width: 100%;
  }

  select.third,
  select.half,
  select.full {
    width: 100%;
  }
}
</style>
