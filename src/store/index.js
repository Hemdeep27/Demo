import Vue from "vue";
import Vuex from "vuex";
import ticketsList from "../store/modules/ticketsList.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { ticketsList },
});
