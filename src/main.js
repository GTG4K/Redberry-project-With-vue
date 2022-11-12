import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";

//UI Components
import BaseHeader from "./components/UI/Base/BaseHeader.vue";
import BaseButton from "./components/UI/Base/BaseButton.vue";
import BaseForm from "./components/UI/Base/BaseForm.vue";
import BaseNav from "./components/UI/Base/BaseNav.vue";
//UI Components - Inputs
import InputText from "./components/UI/Inputs/InputText.vue";
import InputSelect from "./components/UI/Inputs/InputSelect.vue";
import InputFile from "./components/UI/Inputs/InputFile.vue";
import InputRadio from "./components/UI/Inputs/InputRadio.vue";

//Pages
import AddEntryPage from "./components/pages/AddEntryPage.vue";
import LandingPage from "./components/pages/LandingPage.vue";
import EntryListPage from "./components/pages/EntryListPage.vue";
import ViewEntryPage from "./components/pages/ViewEntryPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: LandingPage,
    },
    {
      path: "/add",
      component: AddEntryPage,
    },
    {
      path: "/entry/list",
      component: EntryListPage,
    },
    {
      path: "/entry/list/:id",
      component: ViewEntryPage,
      name: "entry",
      props: true,
    },
  ],
});

const app = createApp(App);
app.component("base-header", BaseHeader);
app.component("base-button", BaseButton);
app.component("base-form", BaseForm);
app.component("input-text", InputText);
app.component("input-select", InputSelect);
app.component("input-file", InputFile);
app.component("input-radio", InputRadio);
app.component("base-nav", BaseNav);
app.use(router);

app.mount("#app");

// const formData = new FormData();
// formData.append("name", inputs.inputName);
// formData.append("surname", inputs.inputLastName);
// formData.append("team_id", inputs.selectedTeam);
// formData.append("position_id", inputs.selectedPosition);
// formData.append("phone_number", inputs.inputMobile);
// formData.append("email", inputs.inputEmail);
// formData.append("token", inputs.token);
// formData.append("laptop_name", inputs.inputLaptopName);
// formData.append("laptop_image", inputs.inputLaptopImage);
// formData.append("laptop_brand_id", inputs.inputLaptopBrand);
// formData.append("laptop_cpu", inputs.inputCpu);
// formData.append("laptop_cpu_cores", inputs.inputCpuCore);
// formData.append("laptop_cpu_threads", inputs.inputCpuFlow);
// formData.append("laptop_ram", inputs.inputRam);
// formData.append("laptop_hard_drive_type", inputs.inputStorageType);
// formData.append("laptop_state", inputs.inputCondition);
// formData.append("laptop_purchase_date", inputs.inputAquisitionDate);
// formData.append("laptop_price", inputs.inputPrice);
