import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/rootReducers";
import { rootSaga } from "./sagas/root";

const sagaMiddleware = createSagaMiddleware();

// TODO apply logger only for dev env
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;

