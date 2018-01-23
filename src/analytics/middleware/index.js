const createMiddleware = (
  dataLayer,
  actionsToTrack = {}
) => store => next => action => {
  next(action);

  if (!Object.keys(actionsToTrack).includes(action.type)) {
    return;
  }

  const nextState = store.getState();

  const transform = actionsToTrack[action.type];
  const data = transform(nextState, action);

  dataLayer.push(data);
};

export default createMiddleware;
