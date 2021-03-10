import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  makeSelectGiphy, 
  makeSelectGifs,
  makeSelectLoading,
  makeSelectGifsUrls,
  makeSelectError,} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import SimpleForm from './Form';
import FormWithValues from './FormWithValues';
import { loadGifs, loadGifsWithFormValues } from './actions';
import GifsList from 'components/GifsList';
import styled from 'styled-components'

export function Giphy(
  {loading,
  error,
  gifs,
  gifsUrls,
  onSubmitForm,
  onSubmitFormWithValues
}
) {
  useInjectReducer({ key: 'giphy', reducer });
  useInjectSaga({ key: 'giphy', saga });

  const gifsListProps = {
    loading,
    error,
    gifs : gifsUrls,
  };

  return (
    <div>
      <FlexContainer>
      <SimpleForm onSubmit={onSubmitForm}/>
      <FormWithValues onSubmit={(values) => onSubmitFormWithValues(values)}/>
      </FlexContainer>
      <GifsList {...gifsListProps}/>
    </div>
  );
}

Giphy.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  gifs: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  gifsUrls: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  giphy: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  onSubmitFormWithValues: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  giphy: makeSelectGiphy(),
  gifs: makeSelectGifs(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  gifsUrls: makeSelectGifsUrls()
});

function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: () => {
      dispatch(loadGifs());
    },
    onSubmitFormWithValues : (values) => {
      dispatch(loadGifsWithFormValues(values))
    }
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Giphy);


const FlexContainer = styled.div`
  display:flex;
  align-items:flex-start;
  justify-content:space-between;
  padding:1rem 0 2rem 0;
`