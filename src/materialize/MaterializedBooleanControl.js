import * as _ from 'lodash';
import { JSX } from 'jsonforms-inferno/dist/ts-build/renderers/JSX';
import { BooleanControl, booleanControlTester } from 'jsonforms-inferno/dist/ts-build/renderers/controls/boolean.control';
import {and, rankWith, schemaMatches, schemaTypeIs, uiTypeIs} from 'jsonforms-inferno/dist/ts-build/core/testers';
import { JsonFormsControl, registerStartupRenderer } from 'jsonforms-inferno/dist/ts-build/renderers/renderer.util';
import { connect } from 'inferno-redux';
import { mapStateToControlProps } from 'jsonforms-inferno/dist/ts-build/renderers/controls/base.control';
import { convertToClassName } from 'jsonforms-inferno/dist/ts-build/core/renderer';
import { ControlElement } from 'jsonforms-inferno/dist/ts-build/models/uischema';

const materializedBooleanControlTester = rankWith(3, and(
  uiTypeIs('Control'),
  schemaTypeIs('boolean')
));

export class MaterializedBooleanControl extends BooleanControl {

  render() {
    const { uischema, labelText, errors } = this.props;
    const controlElement = uischema;
    const isValid = _.isEmpty(errors);

    const classes = !_.isEmpty(controlElement.scope) ?
      []
        .concat([`control ${convertToClassName(controlElement.scope.$ref)}`])
        .concat([isValid ? 'valid' : 'invalid'])
      : [''];
    const controlId = _.has(controlElement.scope, '$ref') ? controlElement.scope.$ref : '';

    return (
      <JsonFormsControl
        classes={classes.join(' ')}
        controlId={controlId}
        labelText={labelText}
        validationErrors={errors}
        createValidationDiv={false}
        labelFirst={false}
      >
        {this.createInputElement()}
      </JsonFormsControl>
    );
  }

}

export default registerStartupRenderer(
  materializedBooleanControlTester,
  connect(mapStateToControlProps)(MaterializedBooleanControl)
);
