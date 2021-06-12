import { applyMiddleware, createStore } from "redux";
import { mobilereducer } from "../reducers/Mobilereducer";
 import createSagaMiddleware from "@redux-saga/core";
import { watchUser } from "../../saga/usersaga";

const sagamiddleware = createSagaMiddleware();
export const store= createStore(mobilereducer, applyMiddleware(sagamiddleware));

sagamiddleware.run(watchUser);
