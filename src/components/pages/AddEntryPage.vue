<template>
  <div class="body">
    <base-header>
      <base-nav
        :navLinks="navLinks"
        @changeSelectedForm="updateNavLinks"
      ></base-nav>
    </base-header>
    <base-form>
      <!-- Form Component goes here -->
      <template v-slot:main>
        <keep-alive>
          <component
            :is="currentComponent"
            @updateData="updateData"
          ></component>
        </keep-alive>
      </template>
      <!-- Buttons go here-->
      <template v-slot:action>
        <!-- If on page Employee-Details -->
        <base-button
          v-if="activeForm === 'employee-details'"
          type="button"
          size="small"
          @click="updateNavLinks('laptop-details')"
        >
          Next
        </base-button>

        <!-- If on page Laptop Details -->
        <base-button
          v-if="activeForm === 'laptop-details'"
          type="button"
          size="small"
          @click="uploadData"
        >
          Submit
        </base-button>

        <base-button
          v-if="activeForm === 'laptop-details'"
          type="button"
          size="small"
          theme="light"
          @click="updateNavLinks('employee-details')"
        >
          Back
        </base-button>
      </template>
    </base-form>
  </div>
</template>

<script>
import EmployeeDetails from "../forms/EmployeeDetails.vue";
import LaptopDetails from "../forms/LaptopDetails.vue";

export default {
  data() {
    return {
      activeForm: "employee-details",
      navLinks: [
        { selected: true, linkTitle: "employee-details" },
        { selected: false, linkTitle: "laptop-details" },
      ],
      formInputs: {
        token: "afad755928216965498192889e4ca455",
        inputName: null,
        inputLastName: null,
        inputEmail: null,
        inputMobile: null,
        selectedPosition: null,
        selectedTeam: null,
        inputPrice: null,
        inputAquisitionDate: null,
        inputLaptopName: null,
        inputLaptopImage: null,
        inputLaptopBrand: null,
        inputCpu: null,
        inputCpuCore: null,
        inputCpuFlow: null,
        inputRam: null,
        inputCondition: null,
        inputStorageType: null,
      },
    };
  },
  watch: {
    formInputs() {
      console.table(this.formInputs);
    },
  },
  components: { EmployeeDetails, LaptopDetails },
  methods: {
    updateNavLinks(linkTitle) {
      for (let i = 0; i < this.navLinks.length; i++) {
        if (this.navLinks[i].linkTitle === linkTitle) {
          this.navLinks[i].selected = true;
          this.activeForm = this.navLinks[i].linkTitle;
        } else {
          this.navLinks[i].selected = false;
        }
      }
    },
    updateData(key, value) {
      switch (key) {
        case "inputName":
          this.formInputs.inputName = value;
          break;
        case "inputLastName":
          this.formInputs.inputLastName = value;
          break;
        case "inputEmail":
          this.formInputs.inputEmail = value;
          break;
        case "inputMobile":
          this.formInputs.inputMobile = value;
          break;
        case "selectedTeam":
          this.formInputs.selectedTeam = value;
          break;
        case "selectedPosition":
          this.formInputs.selectedPosition = value;
          break;
        case "inputPrice":
          this.formInputs.inputPrice = value;
          break;
        case "inputAquisitionDate":
          this.formInputs.inputAquisitionDate = value;
          break;
        case "inputLaptopName":
          this.formInputs.inputLaptopName = value;
          break;
        case "inputLaptopImage":
          this.formInputs.inputLaptopImage = value;
          break;
        case "inputLaptopBrand":
          this.formInputs.inputLaptopBrand = value;
          break;
        case "inputCpu":
          this.formInputs.inputCpu = value;
          break;
        case "inputCpuCore":
          this.formInputs.inputCpuCore = value;
          break;
        case "inputCpuFlow":
          this.formInputs.inputCpuFlow = value;
          break;
        case "inputRam":
          this.formInputs.inputRam = value;
          break;
        case "inputCondition":
          this.formInputs.inputCondition = value;
          break;
        case "inputStorageType":
          this.formInputs.inputStorageType = value;
          break;
        default:
          console.log(`not a valid key: ${key} or value: ${value}`);
          break;
      }
      console.table(this.formInputs);
    },
    uploadData() {
      const values = Object.values(this.formInputs);
      for (let i = 0; i < values.length; i++) {
        if (values[i] === null) {
          console.log("Enter All Values");
          break;
        }
      }

      const inputs = this.formInputs;
      console.log("ok we submit now :3");
      fetch("https://pcfy.redberryinternship.ge/api/laptop/create", {
        method: "POST",
        body: JSON.stringify({
          name: inputs.inputName,
          surname: inputs.inputLastName,
          team_id: Number(inputs.selectedTeam),
          position_id: Number(inputs.selectedPosition),
          phone_number: "+995" + inputs.inputMobile,
          email: inputs.inputEmail,
          token: inputs.token,
          laptop_name: inputs.inputLaptopName,
          laptop_image: inputs.inputLaptopImage,
          laptop_brand_id: Number(inputs.inputLaptopBrand),
          laptop_cpu: inputs.inputCpu,
          laptop_cpu_cores: Number(inputs.inputCpuCore),
          laptop_cpu_threads: Number(inputs.inputCpuFlow),
          laptop_ram: Number(inputs.inputRam),
          laptop_hard_drive_type: inputs.inputStorageType,
          laptop_state: inputs.inputCondition,
          laptop_purchase_date: inputs.inputAquisitionDate,
          laptop_price: Number(inputs.inputPrice),
        }),
        headers: {
          "Content-type": "multipart/form-data; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
  },
  computed: {
    currentComponent() {
      return this.activeForm;
    },
  },
};
</script>

<style scoped>
.body {
  min-height: 100vh;
  background: var(--bg-color);
}
</style>
