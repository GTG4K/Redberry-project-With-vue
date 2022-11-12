<template>
  <main>
    <div class="landing-container">
      <img
        class="landing-logo"
        src="../../assets/logo/LandingPageLogo.png"
        alt="RedBerry Logo"
      />
      <img
        class="landing-picture"
        src="../../assets/images/LandingPage.png"
        alt="landing page picture"
      />
      <nav>
        <base-button redirect="/add" size="large"> Add Entry </base-button>
        <base-button redirect="/entry/list" size="large">
          Entry List
        </base-button>
      </nav>
    </div>
  </main>
</template>

<!-- @click="redirectTo('/add') -->

<script>
export default {
  methods: {
    redirectTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style scoped>
main {
  margin: auto;
  height: 100vh;
  width: fit-content;
  display: flex;
  align-items: center;
}
.landing-container {
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
}
nav {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
}
.landing-logo {
  width: 110px;
}
.landing-picture {
  width: 700px;
}

/* a {
  display: block;
  text-decoration: none;
  color: white;
  font-size: 20px;
  width: 100%;
  height: 100%;
} */
</style>
