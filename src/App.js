import { version } from 'inferno';
import Component from 'inferno-component';
import './registerServiceWorker';
import Logo from './logo';
import './App.css';
import { data, schema, uischema} from "./static";
import { Provider } from 'inferno-redux';
import { initJsonFormsStore } from 'jsonforms-inferno/dist/ts-build/store'
import JsonFormsRenderer from 'jsonforms-inferno/dist/ts-build/renderers/dispatch-renderer'
import 'jsonforms-inferno/dist/ts-build/renderers';
import 'jsonforms-inferno/'

class App extends Component {

  render() {

    const store = initJsonFormsStore(data, schema, uischema);

    return (
      <div className="App">
        <header className="App-header">
          <Logo width="80" height="80" />
          <h1>{`Welcome to Inferno ${version}`}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Provider store={store}>
          <JsonFormsRenderer schema={schema} uischema={uischema} />
        </Provider>
      </div>
    );
  }
}

export default App;
