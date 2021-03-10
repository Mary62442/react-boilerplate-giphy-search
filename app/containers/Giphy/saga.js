import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_GIFS, LOAD_GIFS_WITH_FORM_VALUES } from './constants';
import { gifsLoaded, gifLoadingError } from './actions';
import { makeSelectFormLang, makeSelectFormQ, makeSelectFormLimit } from './selectors';

import request from 'utils/request';

const requestGiphyUrl = (q,lang,limit) => `https://api.giphy.com/v1/gifs/search?api_key=HWMx6fiylqIxrcPdJmbI14xcd6myyqRv&q=${q}&limit=${limit}&lang=${lang}`;

export function* getGifs() {
  try {
    const q = yield select(makeSelectFormQ());
    const lang = yield select(makeSelectFormLang());
    const limit = yield select(makeSelectFormLimit());
    const gifs = yield call(request, requestGiphyUrl(q, lang, limit));
    yield put(gifsLoaded(gifs));
  } catch (err) {
    yield put(gifLoadingError(err));
  }
}

export function* getGifsWithFormValues({values}) {
  try {
    const q = yield values.q;
    const lang = yield values.lang;
    const limit = yield values.limit;
    const gifs = yield call(request, requestGiphyUrl(q, lang, limit));
    yield put(gifsLoaded(gifs));
  } catch (err) {
    yield put(gifLoadingError(err));
  }
}

export default function* giphySaga() {
  yield takeLatest(LOAD_GIFS, getGifs);
  yield takeLatest(LOAD_GIFS_WITH_FORM_VALUES, getGifsWithFormValues);
}
