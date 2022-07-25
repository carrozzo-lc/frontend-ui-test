/**
 * Setup the global elements of the react app:
 *  - redux store
 *  - react router
 *  - main component: App
 */
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createCartoSlice } from '@carto/react-redux';
import App from './App';
import { initialState } from 'store/initialStateSlice';
import store from './store/store';
// @ts-ignore
import { setDefaultCredentials } from '@deck.gl/carto';

// @ts-ignore
store.injectReducer('carto', createCartoSlice(initialState));

setDefaultCredentials({ ...initialState.credentials });

const AppProvider = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

render(AppProvider, document.getElementById('root'));
