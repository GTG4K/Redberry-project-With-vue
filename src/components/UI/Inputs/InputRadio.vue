<template>
  <div class="radio-input-container">
    <p>{{ title }}</p>
    <div class="radio-inputs-holder">
      <div v-for="option in radioOptions" :key="option" @change="changeValue">
        <input type="radio" :name="name" :value="option" />
        <label :for="name">{{ option }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeOption: this.modelValue,
    };
  },
  props: ["title", "radioOptions", "name", "modelValue"],
  emits: ["update:modelValue"],
  methods: {
    changeValue(event) {
      this.activeOption = event.target.value;
      this.$emit("update:modelValue", this.activeOption);
    },
  },
};
</script>

<style scoped>
p {
  color: var(--text-dark);
  font-size: 18px;
  font-weight: 700;
}
.radio-inputs-holder {
  display: flex;
  padding: 18px 0;
}

.radio-input-container {
  width: 360px;
  margin: 6px 0 20px 0;
  height: 100px;
}

label {
  margin: 0 30px 0 2px;
  color: var(--text-dark);
  font-size: 17px;
  font-weight: 400;
}

@media only screen and (max-width: 850px) {
  div {
    width: 100%;
  }

  input.third,
  input.half,
  input.full {
    width: 100%;
  }
}
</style>
