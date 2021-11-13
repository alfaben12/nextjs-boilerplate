import { applyMiddleware, createStore, Middleware, StoreEnhancer } from "redux";
import { createWrapper, MakeStore } from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import { UserState } from "./users/interfaces/state.interface";
import storage from "./sync_storage";
import { DefaultRootState } from "react-redux";

export interface RootAppState {
    users: UserState;
}

const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
    if (process.env.NODE_ENV !== "production") {
        const { composeWithDevTools } = require("redux-devtools-extension");
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

export const makeStore: MakeStore<DefaultRootState> = () => {
    const isServer = typeof window === 'undefined';
    if (isServer) {
        const sagaMiddleware = createSagaMiddleware();

        const store = createStore(
            rootReducer,
            bindMiddleware([sagaMiddleware])
        );

        store.sagaTask = sagaMiddleware.run(rootSaga);
        return store;
    } else {
        const { persistStore, persistReducer } = require("redux-persist");

        const persistConfig = {
            key: "nextjs",
            whitelist: ["users"],
            storage,
        };

        const sagaMiddleware = createSagaMiddleware();
        const persistedReducer = persistReducer(persistConfig, rootReducer);
        const store = createStore<RootAppState, any, any, any>(
            persistedReducer,
            bindMiddleware([sagaMiddleware])
        );

        store.__persistor = persistStore(store);

        store.sagaTask = sagaMiddleware.run(rootSaga);
        return store;
    }
};

export const wrapper = createWrapper(makeStore);
