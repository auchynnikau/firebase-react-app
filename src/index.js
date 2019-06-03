import * as React from 'react';
import * as ReactDOM from 'react-dom';

import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { rootReducer } from './store/reducers';
import { createStore, applyMiddleware, compose } from 'redux';

import firebaseConfig from './config/firebaseConfig';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';

import { App } from './App';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebaseConfig),
    reactReduxFirebase(
      firebaseConfig,
      {
        useFirestoreForProfile: true,
        attachAuthIsReady: true,
        userProfile: 'users',
      }
    ),
  ),
);

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
});
