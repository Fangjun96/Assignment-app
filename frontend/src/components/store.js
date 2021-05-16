import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import appReducer from './reducer.js'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(appReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))

export default store