<template>
  <div class="entry-item">
    <img :src="data.laptop.image" alt="" />
    <div class="item-details">
      <div class="item-description">
        <h2>{{ data.user.name }} {{ data.user.surname }}</h2>
        <p>{{ data.laptop.name }}</p>
      </div>
      <router-link :to="{ name: 'entry', params: { id: data.id } }"
        >Details</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style scoped>
.entry-item {
  background: var(--entry-item-background);
  border: 1px solid;
  border-color: var(--entry-item-border);
  border-radius: 20px;
  height: 200px;

  display: flex;
  align-items: center;
  gap: 20px;
}

img {
  width: 220px;
  height: 170px;
  object-fit: cover;
  object-position: 0% 15%;
  border-radius: 20px;
  margin: 0 0 0 15px;
}

.item-details {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
}

.item-description {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

h2 {
  font-size: 19px;
  font-weight: 700;
  color: var(--text-dark);
}

p {
  font-size: 18px;
  font-weight: 400;
  color: var(--text-dark);
}
@media only screen and (max-width: 550px) {
  .entry-item {
    height: 125px;
  }
  img {
    height: 100px;
    width: 125px;
  }
  .item-details {
    gap: 30px;
  }
  .item-description {
    gap: 5px;
  }
  h2 {
    font-size: 16px;
  }
  p {
    font-size: 14px;
  }
}
</style>
