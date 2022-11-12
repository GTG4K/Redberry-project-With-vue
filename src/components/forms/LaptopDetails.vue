<template>
  <form action="">
    <input-file
      v-model="inputLaptopImage"
      hint="Drag or Upload The image of a laptop"
      fileName="image"
    ></input-file>
    <div class="duo">
      <input-text
        size="half"
        title="Laptop Name"
        placeholder="HP"
        hint="at least 2 characters, english letters"
        :validate="['length', 'english']"
        v-model="inputLaptopName"
      />
      <input-select
        v-if="!brandLoaded"
        size="half"
        name="brand"
        :selectOptions="['Loading...']"
        v-model="inputLaptopBrand"
      />
      <input-select
        v-else
        size="half"
        name="brand"
        :selectOptions="brandNames"
        v-model="inputLaptopBrand"
      />
    </div>
    <div class="separator"></div>
    <div class="duo">
      <input-select
        v-if="!cpuLoaded"
        size="third"
        name="CPU"
        :selectOptions="['Loading...']"
        v-model="inputCpu"
      />
      <input-select
        v-else
        size="third"
        name="CPU"
        :selectOptions="cpuNames"
        v-model="inputCpu"
      />
      <input-text
        size="third"
        title="CPU Cores"
        placeholder="14"
        hint="numbers only"
        :validate="['number']"
        v-model="inputCpuCore"
      />
      <input-text
        size="third"
        title="CPU Flow"
        placeholder="365"
        hint="numbers only"
        :validate="['number']"
        v-model="inputCpuFlow"
      />
    </div>
    <div class="duo">
      <input-text
        size="half"
        title="Laptop RAM (GB)"
        placeholder="16"
        hint="numbers only"
        :validate="['number']"
        v-model="inputRam"
      />
      <input-radio
        title="Storage Type"
        :radioOptions="['SSD', 'HDD']"
        name="storage"
        v-model="inputStorageType"
      ></input-radio>
    </div>
    <div class="separator"></div>
    <div class="duo">
      <input-text
        size="half"
        title="acquisition Date (Optional)"
        placeholder="dd / mm / yyyy"
        hint="valid year"
        type="date"
        v-model="inputAquisitionDate"
      />
      <input-text
        size="half"
        title="Price"
        placeholder="0000"
        hint="numbers only"
        :validate="['number']"
        v-model="inputPrice"
      />
    </div>
    <input-radio
      title="condition"
      :radioOptions="['new', 'used']"
      name="condition"
      v-model="inputCondition"
    ></input-radio>
  </form>
</template>

<script>
export default {
  data() {
    return {
      inputPrice: null,
      inputAquisitionDate: null,
      inputLaptopName: null,
      inputLaptopImage: null,
      inputLaptopBrand: null,
      laptopBrandId: null,
      inputCpu: null,
      inputCpuCore: null,
      inputCpuFlow: null,
      inputRam: null,
      inputCondition: null,
      inputStorageType: null,

      cpuLoaded: false,
      cpuNames: [],
      brandLoaded: false,
      brand: [],
      brandNames: [],
    };
  },
  watch: {
    inputPrice() {
      console.log("Updating Price...");
      this.$emit("updateData", "inputPrice", this.inputPrice);
    },
    inputAquisitionDate() {
      console.log("Updating Aquisition Date...");
      this.$emit("updateData", "inputAquisitionDate", this.inputAquisitionDate);
    },
    inputLaptopName() {
      console.log("Updating Laptop Name...");
      this.$emit("updateData", "inputLaptopName", this.inputLaptopName);
    },
    inputLaptopImage() {
      console.log("Updating Laptop image...");
      this.$emit("updateData", "inputLaptopImage", this.inputLaptopImage);
    },
    inputLaptopBrand() {
      console.log("Updating Laptop Brand...");
      for (const [id, name] of this.brand) {
        if (name === this.inputLaptopBrand) {
          this.laptopBrandId = id;
        }
      }
      this.$emit("updateData", "inputLaptopBrand", this.laptopBrandId);
    },
    inputCpu() {
      console.log("Updating CPU...");
      this.$emit("updateData", "inputCpu", this.inputCpu);
    },
    inputCpuCore() {
      console.log("Updating CPU core(s)...");
      this.$emit("updateData", "inputCpuCore", this.inputCpuCore);
    },
    inputCpuFlow() {
      console.log("Updating CPU Flow...");
      this.$emit("updateData", "inputCpuFlow", this.inputCpuFlow);
    },
    inputRam() {
      console.log("Updating Ram...");
      this.$emit("updateData", "inputRam", this.inputRam);
    },
    inputCondition() {
      console.log("Updating Condition...");
      this.$emit("updateData", "inputCondition", this.inputCondition);
    },
    inputStorageType() {
      console.log("Updating Storage Type...");
      this.$emit("updateData", "inputStorageType", this.inputStorageType);
    },
  },
  mounted() {
    this.fetchCpu();
    this.fetchBrands();
  },
  methods: {
    fetchCpu() {
      fetch("https://pcfy.redberryinternship.ge/api/cpus")
        .then((response) => response.json())
        .then((data) => {
          const recievedData = data.data;
          for (let i = 0; i < recievedData.length; i++) {
            if (i == 0) {
              console.log("Updating CPU...");
              this.$emit("updateData", "inputCpu", recievedData[i].name);
            }
            this.cpuNames.push(recievedData[i].name);
          }
          this.cpuLoaded = true;
        });
    },
    fetchBrands() {
      fetch("https://pcfy.redberryinternship.ge/api/brands")
        .then((response) => response.json())
        .then((data) => {
          const recievedData = data.data;
          for (let i = 0; i < recievedData.length; i++) {
            if (i === 0) {
              console.log("Updating Brand...");
              this.laptopBrandId = recievedData[i].id;
              this.$emit("updateData", "inputLaptopBrand", this.laptopBrandId);
            }
            this.brand.push([recievedData[i].id, recievedData[i].name]);
            this.brandNames.push(recievedData[i].name);
          }
          this.brandLoaded = true;
        });
    },
  },
};
</script>

<style scoped>
.duo {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.separator {
  margin: auto;
  width: 100%;
  height: 1px;
  background: var(--input-grey-300);
  margin: 30px 0 50px 0;
}
@media only screen and (max-width: 850px) {
  .duo {
    display: flex;
    flex-direction: column;
  }
}
</style>
