<template>
  <div class="main2">
    <div class="boardstotal">
      <div class="board" @click="board1"><h3>Board1</h3></div>
      <div class="board" @click="board2"><h3>Board2</h3></div>
      <div class="board" @click="board3"><h3>Board3</h3></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { EventBus } from "../eventBus.js";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getTicketList", "getTicketList2"]),
  },
  methods: {
    ...mapActions(["setTicketList", "setTicketList2"]),
    board1() {
      this.$store.dispatch("TICKETS_LIST", {
        success: (res) => {
          EventBus.$emit("New-list", res);
        },
      });
      this.$router.push("/boardview1");
    },
    board2() {
      this.$store.dispatch("TICKETS_LIST2", {
        success: (res) => {
          EventBus.$emit("New-list", res);
        },
      });
      this.$router.push("/boardview2");
    },
    board3() {
      this.$store.dispatch("TICKETS_LIST3", {
        success: (res) => {
          EventBus.$emit("New-list", res);
        },
      });
      this.$router.push("/boardview3");
    },
  },
};
</script>

<style scoped>
.main2 {
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.boardstotal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.board {
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300%;
  height: 60px;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.1);
  margin: 10%;
  cursor: pointer;
}
</style>
