import { GO_TO_PREV_PAGE } from 'src/action/page/prev';
import { GO_TO_NEXT_PAGE } from 'src/action/page/next';
import decks from 'src/app/decks';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case GO_TO_PREV_PAGE:
      return state > 0 ? state - 1 : state;
    case GO_TO_NEXT_PAGE:
      return state < decks.length - 1 ? state + 1 : state;
    default:
      return state;
  }
};

export default reducer;
