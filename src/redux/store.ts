import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./reducers/rootReducer";
import {persistStore} from 'redux-persist'
import {Persistor} from "redux-persist/es/types";
import {EnhancedStore} from "@reduxjs/toolkit/src/configureStore";

const store: EnhancedStore = configureStore({
    reducer: rootReducer
});
const persistor: Persistor = persistStore(store);

export {store, persistor};