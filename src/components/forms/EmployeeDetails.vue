<template>
  <form action="">
    <div class="duo">
      <input-text
        title="name"
        placeholder="Chika"
        hint="at least 2 characters, english letters"
        size="half"
        :validate="['length', 'english']"
        v-model="inputName"
      />
      <input-text
        title="last name"
        placeholder="Fujiwara"
        hint="at least 2 characters, english letters"
        size="half"
        :validate="['length', 'english']"
        v-model="inputLastName"
      />
    </div>
    <input-select
      v-if="teamsLoading"
      :selectOptions="['Loading...']"
      loop="name"
      size="full"
    />
    <input-select
      v-else-if="!teamsLoading"
      name="team"
      :selectOptions="teamNames"
      v-model="selectedTeam"
      size="full"
    />
    <input-select
      v-if="!teamsLoading"
      name="position"
      :selectOptions="currentTeamPositionNames"
      v-model="selectedPosition"
      size="full"
    />
    <input-text
      title="Email"
      placeholder="chika.fujiwara@redberry.ge"
      hint="must end with @redberry.ge"
      size="full"
      :validate="['email']"
      v-model="inputEmail"
    />
    <input-text
      title="Mobile Number"
      placeholder="995 598 00 07 01"
      hint="must be in line with the georgian number format "
      size="full"
      :validate="['mobile']"
      v-model="inputMobile"
    />
  </form>
</template>

<script>
export default {
  data() {
    return {
      //input values
      inputName: null,
      inputLastName: null,
      inputEmail: null,
      inputMobile: null,
      selectedTeam: null,
      selectedTeamId: null,
      selectedPosition: null,
      selectedPositionId: null,

      teamsLoading: true,
      teams: [],
      positions: [],
      // teams have an id, name and teamPositions
      teamNames: [],
      currentTeamPositionNames: [],
    };
  },
  mounted() {
    this.fetchTeams();
  },
  watch: {
    selectedTeam() {
      console.log("Updating Team...");
      for (let i = 0; i < this.teams.length; i++) {
        if (this.teams[i].name === this.selectedTeam) {
          this.selectedTeamId = this.teams[i].id;
        }
      }
      this.$emit("updateData", "selectedTeam", this.selectedTeamId);
      this.updatePositions();
    },
    selectedPosition() {
      console.log("Updating position...");
      for (let i = 0; i < this.teams.length; i++) {
        if (this.teams[i].name === this.selectedTeam) {
          for (let j = 0; j < this.teams[i].teamPosition.length; j++) {
            if (this.teams[i].teamPosition[j].name === this.selectedPosition) {
              this.selectedPositionId = this.teams[i].teamPosition[j].id;
            }
          }
        }
      }
      console.log(
        `team name/id: ${this.selectedTeam} / ${this.selectedTeamId}, position name/id: ${this.selectedPosition}/${this.selectedPositionId}`
      );
      this.$emit("updateData", "selectedPosition", this.selectedPositionId);
    },
    inputName() {
      console.log("Updating Name...");
      this.$emit("updateData", "inputName", this.inputName);
    },
    inputLastName() {
      console.log("Updating LastName...");
      this.$emit("updateData", "inputLastName", this.inputLastName);
    },
    inputEmail() {
      console.log("Updating Email...");
      this.$emit("updateData", "inputEmail", this.inputEmail);
    },
    inputMobile() {
      console.log("Updating Mobile...");
      this.$emit("updateData", "inputMobile", this.inputMobile);
    },
  },
  methods: {
    fetchTeams() {
      fetch("https://pcfy.redberryinternship.ge/api/teams")
        .then((response) => response.json())
        .then((data) => {
          const recievedData = data.data;
          for (let i = 0; i < recievedData.length; i++) {
            if (i === 0) {
              this.selectedTeam = recievedData[i].name;
              this.selectedTeamId = recievedData[i].id;
              this.$emit("updateData", "selectedTeam", this.selectedTeamId);
            }
            const teamsObject = {
              id: recievedData[i].id,
              name: recievedData[i].name,
              teamPosition: [],
            };
            this.teams.push(teamsObject);
            this.teamNames.push(recievedData[i].name);
          }
          this.teamsLoading = false;
          this.fetchPositions();
        });
    },
    fetchPositions() {
      fetch("https://pcfy.redberryinternship.ge/api/positions")
        .then((response) => response.json())
        .then((data) => {
          const positions = data.data;
          for (let i = 0; i < this.teams.length; i++) {
            for (let j = 0; j < positions.length; j++) {
              if (i === 0 && j === 0) {
                this.selectedPositionId = positions[j].id;
                this.selectedPosition = positions[j].name;
                this.$emit(
                  "updateData",
                  "selectedPosition",
                  this.selectedPositionId
                );
              }
              if (this.teams[i].id === positions[j].team_id) {
                if (i === 0) {
                  this.currentTeamPositionNames.push(positions[j].name);
                }
                this.teams[i].teamPosition.push(positions[j]);
              }
            }
          }
          console.log(
            `team name/id: ${this.selectedTeam} / ${this.selectedTeamId}, position name/id: ${this.selectedPosition}/${this.selectedPositionId}`
          );
        });
    },
    updatePositions() {
      const ctp = this.currentTeamPositionNames;
      ctp.splice(0, ctp.length);

      for (let i = 0; i < this.teams.length; i++) {
        if (this.teams[i].name === this.selectedTeam) {
          for (let j = 0; j < this.teams[i].teamPosition.length; j++) {
            if (j === this.teams[i].teamPosition.length - 1) {
              this.selectedPositionId = this.teams[i].teamPosition[j].id;
              this.$emit(
                "updateData",
                "selectedPosition",
                this.selectedPositionId
              );
            }
            this.currentTeamPositionNames.push(
              this.teams[i].teamPosition[j].name
            );
          }
          break;
        }
      }
      console.log(
        `team name/id: ${this.selectedTeam} / ${this.selectedTeamId}, position name/id: ${this.selectedPosition}/${this.selectedPositionId}`
      );
    },
  },
};
</script>

<style scoped>
.duo {
  display: flex;
  justify-content: space-between;
}
@media only screen and (max-width: 850px) {
  .duo {
    display: flex;
    flex-direction: column;
  }
}
</style>
