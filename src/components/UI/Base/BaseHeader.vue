<template>
  <header>
    <base-button size="tiny"></base-button>
    <div class="header-details">
      <slot></slot>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  padding: 25px 60px 25px 25px;
}
.header-details {
  margin: auto;
  width: 1000px;
  height: 50px;
  text-align: center;
}
@media only screen and (max-width: 850px) {
  .header-details {
    width: 95%;
  }
}
@media only screen and (max-width: 450px) {
  .header-details {
    width: 80%;
  }
}
</style>
