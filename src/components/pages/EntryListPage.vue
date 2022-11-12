<template>
  <div class="body">
    <base-header>
      <h1>Entry List</h1>
    </base-header>
    <main v-if="dataLoaded">
      <entry-component
        v-for="entry in data"
        :key="entry.id"
        :data="entry"
      ></entry-component>
    </main>
  </div>
</template>

<script>
import EntryComponent from "../UI/EntryComponent.vue";

export default {
  inject: ["data"],
  data() {
    return {
      recievedData: [],
      dataLoaded: false,
    };
  },
  created() {
    this.recievedData = this.data;
    this.dataLoaded = true;
  },
  components: { EntryComponent },
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

@media only screen and (max-width: 1050px) {
  main {
    width: 95%;
  }
}
@media only screen and (max-width: 950px) {
  main {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
@media only screen and (max-width: 550px) {
  h1 {
    margin-top: 10px;
    font-weight: 700;
    font-size: 30px;
  }
  main {
    gap: 10px;
  }
}
</style>
