import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';

function GifsList({ loading, error, gifs }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }

  if (gifs !== false) {
    return gifs.map((item) => <img style={{margin:"1rem"}} src={item} />);
  }

  return null;
}

GifsList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  gifs: PropTypes.any,
};

export default GifsList;
