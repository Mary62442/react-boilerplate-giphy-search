/**
 *
 * Asynchronously loads the component for Giphy
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
