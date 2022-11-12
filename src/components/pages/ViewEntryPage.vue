<template>
  <div class="body">
    <base-header>
      <h1>Entry Info</h1>
    </base-header>
    <main v-if="dataLoaded">
      <img :src="recievedData.laptop.image" alt="" />
    </main>
  </div>
</template>

<script>
export default {
  inject: ["data"],
  data() {
    return {
      recievedData: [],
      dataLoaded: false,
    };
  },
  created() {
    const entryId = this.$route.params.id;
    const selectedEntry = this.data.find((data) => data.id === Number(entryId));
    console.table(selectedEntry);
    this.recievedData = selectedEntry;
    this.dataLoaded = true;
  },
};
</script>

<style scoped>
h1 {
  font-weight: 700;
  font-size: 40px;
  font-family: var(--font);
}

main {
  margin: auto;
  width: 1025px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.body {
  background-color: var(--bg-color);
  min-height: 100vh;
}
@media only screen and (max-width: 450px) {
  h1 {
    margin-top: 10px;
    font-weight: 700;
    font-size: 30px;
  }
}
</style>
