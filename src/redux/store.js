import { configureStore } from '@reduxjs/toolkit'
import rootReducer from "./reducers/index"
import monitorReducersEnhancer from './enhancers/monitorReducers'
import loggerMiddleware from './middleware/logger'
import auth from './auth_reducers';
import authRegistar from './registar_auth_reducers';
import user from './user_reducers';


export default function configureAppStore(preloadedState) {
    const store = configureStore({
      reducer: {
        auth: auth,
        authRegister: authRegister,
        user: user,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loggerMiddleware),
      preloadedState,
      enhancers: [monitorReducersEnhancer],
    })
  
    if (process.env.NODE_ENV !== 'production' && module.hot) {
      module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
    }
  
    return store
  }