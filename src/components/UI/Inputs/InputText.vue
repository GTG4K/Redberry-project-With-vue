<template>
  <div>
    <label for="" :class="errorClass"> {{ title }} </label>
    <input
      :type="type"
      :placeholder="placeholder"
      :class="inputClass"
      @input="updateValue"
      @blur="setValue"
    />
    <span v-if="error" class="hint" :class="errorClass"> {{ hint }}</span>
  </div>
</template>

<script>
export default {
  // Size prop can be half or full
  // validate recieves an array of names *Optional [length, english, email, mobile, number]
  props: [
    "title",
    "placeholder",
    "hint",
    "size",
    "modelValue",
    "validate",
    "type",
  ],
  emits: ["update:modelValue"],
  data() {
    return {
      inputValue: this.modelValue,
      validatedInputValue: null,
      error: false,
    };
  },
  methods: {
    updateValue(event) {
      this.inputValue = event.target.value;
    },
    setValue() {
      const input = this.inputValue;

      if (this.validate) {
        let checkFailed = false;
        for (const validate of this.validate) {
          switch (validate) {
            case "length":
              if (!this.validateInputLength(input)) {
                this.error = true;
                checkFailed = true;
                this.errorMessage(validate);
              }
              break;
            case "email":
              if (!this.validateInputEmail(input)) {
                this.error = true;
                checkFailed = true;
                this.errorMessage(validate);
              }
              break;
            case "number":
              if (!this.validateInputNumber(input)) {
                this.error = true;
                checkFailed = true;
                this.errorMessage(validate);
              }
              break;
            case "mobile":
              if (!this.validateInputMobile(input)) {
                this.error = true;
                checkFailed = true;
                this.errorMessage(validate);
              }
              break;
          }
        }
        if (!checkFailed) {
          this.error = false;
        }
      }

      if (!this.error) {
        this.validatedInputValue = this.inputValue;
        this.$emit("update:modelValue", this.validatedInputValue);
      }
    },
    //VALIDATION METHODS
    validateInputLength(value, min = 2) {
      return value.length >= min ? true : false;
    },
    validateInputEmail(value) {
      return value.endsWith("@redberry.ge") ? true : false;
    },
    validateInputMobile(value) {
      return value.length === 9 && this.validateInputNumber(value)
        ? true
        : false;
    },
    validateInputNumber(value) {
      const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      let charIsNum;
      for (let i = 0; i < value.length; i++) {
        charIsNum = false;
        for (let n = 0; n < numbers.length; n++) {
          if (value[i] === numbers[n]) {
            charIsNum = true;
            break;
          }
        }
        if (charIsNum === false) {
          return false;
        }
      }
      return true;
    },
    errorMessage(validate) {
      console.log(
        validate + " validation failed on '" + this.title + "' field"
      );
    },
  },
  computed: {
    inputClass() {
      return {
        third: this.size === "third",
        half: this.size === "half",
        full: this.size === "full",
        error: this.error === true,
      };
    },
    errorClass() {
      return {
        error: this.error === true,
      };
    },
  },
};
</script>

<style scoped>
* {
  font-family: var(--font);
}
div {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 6px;
  margin: 0 0 22px 0;
}
label {
  color: var(--text-dark);
  font-size: 18px;
  font-weight: 700;
}
label.error {
  color: var(--error-color);
}
input {
  border: solid 1px;
  border-color: var(--color-100);
  padding: 18px 15px;
  border-radius: 8px;
  outline: none;
}
input:hover {
  border-color: var(--color-200);
}
input:active,
input:focus {
  border-color: var(--color-300);
}

input:hover.error,
input:active.error,
input:focus.error {
  border-color: var(--error-color);
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
.error {
  border-color: var(--error-color);
}

span {
  font-weight: 300;
  font-size: 15px;
  color: var(--input-grey-text);
}
span.error {
  color: var(--error-color);
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
