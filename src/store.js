import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducer';

import thunkMiddleware from 'redux-thunk';
import createAnalyticsMiddleware from './analytics/middleware';

import actionsToTrack from './analytics/actions-to-track';

export default function() {
  const analyticsMiddleware = createAnalyticsMiddleware(
    window.dataLayer,
    actionsToTrack
  );
  return createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware, analyticsMiddleware))
  );
}
