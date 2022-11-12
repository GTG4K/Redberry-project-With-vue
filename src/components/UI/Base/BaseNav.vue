<template>
  <nav>
    <div
      v-for="link in navLinks"
      :key="link.linkTitle"
      @click="changeForm(link.linkTitle)"
    >
      <li>{{ link.linkTitle }}</li>
      <div :class="{ indicator: link.selected === true }"></div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    // this.fillNav();
  },
  props: ["navLinks"],
  methods: {
    changeForm(linkTitle) {
      this.$emit("changeSelectedForm", linkTitle);
    },
  },
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
  gap: 60px;
}
li {
  color: var(--text-dark);
  font-family: var(--font);
  font-weight: 700;
  font-size: 19px;
  margin: 7px 0;
}
.indicator {
  margin: auto;
  width: 80px;
  height: 2px;
  background: black;
  border-radius: 3px;
}
</style>
