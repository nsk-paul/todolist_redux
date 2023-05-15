import { createStore } from "redux"
import { rootReducer } from "./rootReducer"
import storage from 'redux-persist/lib/storage'
import {persistStore, persistReducer} from 'redux-persist';

const persistConfig = { 
    key:'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


// export const store = createStore(
//     rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

export const store = createStore(persistedReducer)

export const persistor = persistStore(store)