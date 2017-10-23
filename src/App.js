import Component from 'inferno-component';
import './registerServiceWorker';
import Logo from './logo';
import './App.css';
import schema from './schema.json';
import uischema from './uischema.json';
import JsonFormsRenderer from 'jsonforms-inferno/dist/ts-build/renderers/dispatch-renderer'
import 'jsonforms-inferno/dist/ts-build/renderers';
import { connect } from 'inferno-redux';
import {getData} from 'jsonforms-inferno/dist/ts-build/reducers';

class App extends Component {

  render() {


    return (
      <div className="App">
        <header className="App-header">
          <Logo width="80" height="80" />
          <h1>{`Welcome to JSONForms based on Inferno`}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        Bound data:
        <p>{this.props.dataAsString}</p>
        <JsonFormsRenderer schema={schema} uischema={uischema} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dataAsString: JSON.stringify(getData(state))
});

export default connect(
  mapStateToProps,
  null
)(App)
