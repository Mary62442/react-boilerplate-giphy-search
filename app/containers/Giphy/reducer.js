/*
 *
 * Giphy reducer
 *
 */
import produce from 'immer';
import { LOAD_GIFS, LOAD_GIFS_ERROR, LOAD_GIFS_SUCCESS, LOAD_GIFS_WITH_FORM_VALUES } from './constants';

export const initialState = {
  loading: false,
  error: false,
  gifs: false
};

/* eslint-disable default-case, no-param-reassign */
const giphyReducer = (state = initialState, action) =>
produce(state, draft => {
  switch (action.type) {
    case LOAD_GIFS:
      draft.loading = true;
      draft.error = false;
      draft.gifs = false;
      break;

    case LOAD_GIFS_SUCCESS:
      draft.gifs = action.gifs;
      draft.loading = false;
      break;

    case LOAD_GIFS_ERROR:
      draft.error = action.error;
      draft.loading = false;
      break;

    case LOAD_GIFS_WITH_FORM_VALUES:
      draft.loading = true;
      draft.error = false;
      draft.gifs = false;
      break;
}
});
export default giphyReducer;

