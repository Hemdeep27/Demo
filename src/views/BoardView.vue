<template>
  <div class="main">
    <!-- This is Board View -->
    <boards-component></boards-component>
    <div class="inside-board">
      <div class="inside-inside-desc">
        <h1>GAME 2023</h1>
      </div>
      <div class="inside-inside-board">
        <div class="assignedComponent">
          <div class="heading"><h5>TO DOO</h5></div>
          <draggable class="board1-list" v-model="ticketList" group="items">
            <div
              v-for="(ticket, index) in ticketList"
              :key="index"
              class="lists"
              :data-index="index"
            >
              <b>{{ ticket.name }}</b> <br />
              {{ ticket.description }} <br />
              {{ ticket.ETA }} <br />
              {{ ticket.storypoints }} <br />
              <b>status</b>:{{ status1 }}
            </div>
          </draggable>
        </div>
        <div class="inProgressComponent">
          <div class="heading"><h5>IN PROGRESS</h5></div>
          <draggable
            class="board1-list"
            v-model="inTicketList"
            @start="drag = true"
            @end="drag = true"
            group="items"
          >
            <div
              v-for="(ticket, index) in inTicketList"
              :key="index"
              class="lists"
              :data-index="index"
            >
              <b>{{ ticket.name }}</b> <br />
              {{ ticket.description }} <br />
              {{ ticket.ETA }} <br />
              {{ ticket.storypoints }} <br />
              <b>status</b>:{{ status2 }}
            </div>
          </draggable>
        </div>
        <div class="closedComponent">
          <div class="heading"><h5>DONE</h5></div>
          <draggable
            class="board1-list"
            v-model="doneTicketList"
            @start="drag = true"
            @end="drag = true"
            group="items"
          >
            <div
              v-for="(ticket, index) in doneTicketList"
              :key="index"
              class="lists"
              :data-index="index"
            >
              <b>{{ ticket.name }}</b> <br />
              {{ ticket.description }} <br />
              {{ ticket.ETA }} <br />
              {{ ticket.storypoints }} <br />
              <b>status</b>:{{ status3 }}
            </div>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import AssignedComponent from "@/components/AssignedComponent.vue";
// import ClosedComponent from "@/components/ClosedComponent.vue";
// import InProgressComponent from "@/components/InProgressComponent.vue";
import { EventBus } from "@/eventBus.js";
import draggable from "vuedraggable";
import BoardsComponent from "@/components/BoardsComponent.vue";
export default {
  components: {
    // AssignedComponent,
    // ClosedComponent,
    // InProgressComponent,
    BoardsComponent,
    draggable,
  },
  data() {
    return {
      ticketList: [],
      inTicketList: [
        {
          name: "Optimize database queries",
          description:
            "Identify slow running queries and optimize them for better performance",
          ETA: "2023-03-20",
          storypoints: 3,
        },
      ],
      doneTicketList: [
        {
          name: "Optimize database queries",
          description:
            "Identify slow running queries and optimize them for better performance",
          ETA: "2023-03-20",
          storypoints: 3,
        },
      ],
      status1: "open",
      status2: "inprogress",
      status3: "closed",
    };
  },
  mounted() {
    EventBus.$on("New-list", (data) => {
      this.ticketList = data;
      console.log(this.ticketList);
    });
  },
};
</script>

<style scoped>
* {
  margin: 0;
}
.main {
  height: 100vh;
  width: 100vw;
  /* background-color: brown; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.inside-board {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  height: 100%;
  width: 85%;
  margin: 1px;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  box-sizing: border-box;
}

.inside-inside-desc {
  text-align: left;
}

.inside-inside-board {
  display: flex;
  flex-direction: row;
  height: 60%;
  width: 100%;
  /* margin-left: 3.5%; */
}
.boards {
  height: 100%;
  width: 15%;
}
.assignedComponent {
  width: 33%;
  height: 90%;
  background-color: rgb(239, 243, 244);
  margin: 4px;
  overflow: scroll;
  display: flex;
  flex-direction: column;
}

.inProgressComponent {
  width: 33%;
  height: 90%;
  background-color: rgb(239, 243, 244);
  margin: 4px;
  overflow: scroll;
  display: flex;
  flex-direction: column;
}

.closedComponent {
  width: 33%;
  height: 90%;
  background-color: rgb(239, 243, 244);
  margin: 4px;
  overflow: scroll;
  display: flex;
  flex-direction: column;
}

.lists {
  width: 95%;
  height: fit-content;
  margin: 4px;
  background-color: white;
  cursor: pointer;
}

.heading {
  align-self: flex-start;
  margin-left: 4%;
  margin: 4%;
}
</style>
