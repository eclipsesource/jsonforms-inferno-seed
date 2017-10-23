import { render } from 'inferno';
import { Provider } from 'inferno-redux';
import App from './App';
import './index.css';
import schema from './schema.json';
import uischema from './uischema.json';
import { initJsonFormsStore } from 'jsonforms-inferno/dist/ts-build/store'

const store = initJsonFormsStore({
  name: "Max"
}, schema, uischema);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
