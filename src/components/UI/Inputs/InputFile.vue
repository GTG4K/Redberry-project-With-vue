<template>
  <div v-if="!inputValueSrc" class="file-input-container">
    <div class="hint">{{ hint }}</div>
    <base-button size="small" type="button">
      <label :for="fileName"> Upload </label>
      <input
        @change="updateInput"
        type="file"
        :id="fileName"
        :name="fileName"
        accept="image/*"
      />
    </base-button>
  </div>
  <div v-else div="file-input-container-active">
    <img :src="inputValueSrc" class="file-image" alt="" />

    <div class="right">
      <base-button size="small" type="button">
        <label :for="fileName"> Upload </label>
        <input
          @change="updateInput"
          type="file"
          :id="fileName"
          :name="fileName"
          accept="image/*"
        />
      </base-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValueSrc: null,
    };
  },
  props: ["fileName", "hint", "modelValue"],
  emits: ["update:modelValue"],
  methods: {
    updateInput(event) {
      const fileInputControl = event.target;
      const files = fileInputControl.files;
      const firstFile = files[0];

      let reader = new FileReader();

      reader.onload = (e) => {
        this.inputValueSrc = e.target.result;
        this.$emit("update:modelValue", this.inputValueSrc);
      };

      reader.readAsDataURL(firstFile);
    },
  },
};
</script>

<style scoped>
input {
  position: relative;
  display: none;
}

.right {
  display: flex;
  justify-content: flex-end;
}
.file-input-container {
  border: dashed 2px;
  border-radius: 18px;
  background: var(--bg-color);
  height: 350px;
  border-color: var(--color-100);
  transition: 0.2s ease;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
}
.file-image {
  margin-bottom: 25px;
  border-radius: 18px;
  max-height: 350px;
  overflow: hidden;
  width: 100%;
}
img {
  width: 100%;
}
.file-input-container-active {
  margin-bottom: 400px;
}
.file-input-container:hover,
.file-input-container:active,
.file-input-container:focus {
  border-color: var(--color-200);
}
.hint {
  width: 200px;
  text-align: center;
  color: var(--color-100);
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
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
