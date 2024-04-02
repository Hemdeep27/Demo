<template>
  <div class="inProgress">
    <div class="heading"><h5>IN PROGRESS</h5></div>
    {{ inTicketList }}
    <droppable-component
      v-model="inTicketList"
      group="items"
      :value="inTicketList"
    >
      <div v-for="ticket in inTicketList" :key="ticket.id" class="lists">
        {{ ticket }}
      </div>
    </droppable-component>
  </div>
</template>

<script>
import DroppableComponent from "./DroppableComponent.vue";
export default {
  components: { DroppableComponent },
  data() {
    return {
      inTicketList: [
        {
          name: "Integrate Payment Gateway",
          description:
            "Add payment processing functionality through a third-party payment gateway",
          ETA: "2023-05-10",
          storypoints: 6,
        },
      ],
      status: "in-progress",
    };
  },
};
</script>

<style scoped>
.inProgress {
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
