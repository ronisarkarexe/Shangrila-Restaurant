import { createStore } from "redux";
import { Reducer } from "./Action";



const myStore = createStore(Reducer);
export default myStore;