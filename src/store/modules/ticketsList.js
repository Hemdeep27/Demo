import axios from "axios";
export default {
  state: {
    ticketsList: [],
    ticketsList2: [],
  },
  getters: {
    getTicketList(state) {
      return state.ticketsList;
    },
    getTicketList2(state) {
      return state.ticketsList2;
    },
    getTicketList3(state) {
      return state.ticketsList2;
    },
  },
  mutations: {
    setTicketList: (state, value) => {
      state.ticketsList = value;
    },
    setTicketList2: (state, value) => {
      state.ticketsList2 = value;
    },
    setTicketList3: (state, value) => {
      state.ticketsList2 = value;
    },
  },
  actions: {
    TICKETS_LIST: async ({ commit }, { success }) => {
      const res = await axios.get(
        "https://mocki.io/v1/f6af18f6-418c-4a23-b5e8-1906bbd72f87"
      );
      console.log(res.data.tasks);
      commit("setTicketList", res.data.tasks);
      success(res.data.tasks);
    },
    TICKETS_LIST2: async ({ commit }, { success }) => {
      const res = await axios.get(
        "https://mocki.io/v1/462f7991-b08a-49c7-af81-24cf3decc2a2"
      );
      console.log(res.data.tasks);
      commit("setTicketList2", res.data.tasks);
      success(res.data.tasks);
    },
    TICKETS_LIST3: async ({ commit }, { success }) => {
      const res = await axios.get(
        "https://mocki.io/v1/223bc7d7-d825-4de1-8bdb-0e5c45893892"
      );
      console.log(res.data.tasks);
      commit("setTicketList3", res.data.tasks);
      success(res.data.tasks);
    },
  },
};
