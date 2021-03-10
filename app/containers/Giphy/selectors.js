import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the giphy state domain
 */

const selectGiphyDomain = state => state.giphy || initialState;

const selectForm = state => state.form.giphy || initialState;

const makeSelectFormQ = () =>
  createSelector(
    selectForm,
    giphy => giphy.values.q,
);

const makeSelectFormLimit = () =>
  createSelector(
    selectForm,
    giphy => giphy.values.limit,
);

const makeSelectFormLang = () =>
  createSelector(
    selectForm,
    giphy => giphy.values.lang,
);

const makeSelectGiphy = () =>
  createSelector(
    selectGiphyDomain,
    substate => substate,
  );

  const makeSelectGifs = () =>
  createSelector(
    selectGiphyDomain,
    substate => substate.gifs,
  );

const makeSelectGifsUrls = () =>
createSelector(
  makeSelectGifs(),
  gifsObj => gifsObj && gifsObj.data.map(item => item.images.original.url)
)

const makeSelectLoading = () => 
createSelector(
  selectGiphyDomain,
  substate => substate.loading,
)

const makeSelectError = () => 
createSelector(
  selectGiphyDomain,
  substate => substate.error,
)

export { selectGiphyDomain, makeSelectGifsUrls, makeSelectGiphy, makeSelectError, makeSelectLoading, makeSelectFormQ, makeSelectGifs, makeSelectFormLimit, makeSelectFormLang };
