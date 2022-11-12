<template>
  <button @click="redirectTo" :type="type" :class="buttonSize">
    <slot v-if="size != 'tiny'"></slot>
    <i v-else class="fas fa-chevron-left"></i>
  </button>
</template>

<script>
export default {
  props: ["type", "size", "theme", "redirect"],
  methods: {
    redirectTo() {
      if (this.redirect) {
        this.$router.push(this.redirect);
      } else if (this.size === "tiny") {
        this.$router.back();
      }
    },
  },
  computed: {
    buttonSize() {
      return {
        tiny: this.size === "tiny",
        small: this.size === "small",
        medium: this.size === "medium",
        large: this.size === "large",
        light: this.theme === "light",
      };
    },
  },
};
</script>

<style scoped>
button {
  color: white;
  height: 60px;
  border: none;
  border-radius: 8px;
  font-family: inherit;
  padding: 18px 20px;
  text-align: center;
  background: var(--color-100);
  font-size: 20px;
  transition: 0.2s ease;
}

button:hover {
  background: var(--color-200);
  transition: 0.2s ease;
}

button:active {
  background: var(--color-300);
  transition: 0.1s;
}

.tiny {
  background: var(--input-grey-100);
  color: var(--input-grey-text);
  border-radius: 50%;
  height: 50px;
  width: 50px;
  padding: 0 2px 0 0;
}
.tiny:hover {
  background: var(--input-grey-200);
}
.tiny:active {
  background: var(--input-grey-300);
}
.small {
  width: 175px;
}
.medium {
  width: 220px;
}
.large {
  width: 380px;
}

.light {
  color: var(--color-100);
  transition: 0.2s ease;
  background: #00a2ff00;
}
.light:hover {
  color: var(--color-200);
  transition: 0.2s ease;
  background: #00a2ff20;
}
.light:active {
  color: var(--color-300);
  transition: 0.2s ease;
  background: #00a2ff40;
}

@media only screen and (max-width: 850px) {
  button.small,
  button.medium,
  button.large {
    width: 100%;
  }
}
</style>
