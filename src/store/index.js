import {createStore,applyMiddleware} from 'redux'
import createSagaMidwer from "redux-saga"

import rootReducer from './modules/rootRedux'
import rootSaga from "./modules/rootSagas"

const sagaMidwer = createSagaMidwer()

const store = createStore(rootReducer,applyMiddleware(sagaMidwer))
sagaMidwer.run(rootSaga)
export default store