<template>
  <div class="assigned">
    <div class="heading"><h5>TO DO</h5></div>
    <draggable class="board1-list" v-model="ticketList" group="items">
      <div
        v-for="(ticket, index) in ticketList"
        :key="index"
        class="lists"
        draggable="true"
        @dragstart="dragstartHandler"
        :data-index="index"
      >
        <b>{{ ticket.name }}</b> <br />
        {{ ticket.description }} <br />
        {{ ticket.ETA }} <br />
        {{ ticket.storypoints }} <br />
        <b>status</b>:{{ status }}
      </div>
    </draggable>
  </div>
</template>

<script>
import { EventBus } from "@/eventBus.js";
import draggable from "vuedraggable";
export default {
  components: {
    draggable,
  },
  data() {
    return {
      ticketList: [],
      status: "open",
    };
  },
  mounted() {
    EventBus.$on("New-list", (data) => {
      this.ticketList = data;
      console.log(this.ticketList);
    });
  },
  methods: {
    dragstartHandler(event) {
      // debugger;
      const index = event.target.getAttribute("data-index");
      const item = this.list[index];
      event.dataTransfer.setData("application/json", JSON.stringify(item));
    },
  },
};
</script>

<style scoped>
.assigned {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  overflow: scroll;
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
