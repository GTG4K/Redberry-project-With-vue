<template>
  <main>
    <div>
      <slot name="main"></slot>
      <nav>
        <slot name="action"></slot>
      </nav>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
main {
  margin: auto;
  width: 1025px;
  height: fit-content;
  background: white;
  border-radius: 18px;
  padding: 80px 30px 30px 30px;
}
div {
  margin: auto;
  max-width: 780px;
}

nav {
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  margin: 70px 0 0px 0;
}

@media only screen and (max-width: 1050px) {
  main {
    width: 95%;
  }
}
</style>
