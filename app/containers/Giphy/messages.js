/*
 * Giphy Messages
 *
 * This contains all the text for the Giphy container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Giphy';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Giphy container!',
  },
});
