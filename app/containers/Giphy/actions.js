/*
 *
 * Giphy actions
 *
 */

import {  LOAD_GIFS, LOAD_GIFS_ERROR, LOAD_GIFS_SUCCESS,  LOAD_GIFS_WITH_FORM_VALUES } from './constants';

export function loadGifs() {
  return {
    type: LOAD_GIFS,
  };
}

export function gifsLoaded(gifs) {
  return {
    type: LOAD_GIFS_SUCCESS,
    gifs,
  };
}

export function gifLoadingError(error) {
  return {
    type: LOAD_GIFS_ERROR,
    error,
  };
}

export function loadGifsWithFormValues(values) {
  return {
    type: LOAD_GIFS_WITH_FORM_VALUES,
    values
  }
}
