import { EnumControl, enumControlTester } from 'jsonforms-inferno/dist/ts-build/renderers/controls/enum.control';
import { and, rankWith, schemaMatches, uiTypeIs } from 'jsonforms-inferno/dist/ts-build/core/testers';
import { registerStartupRenderer } from 'jsonforms-inferno/dist/ts-build/renderers/renderer.util';
import { connect } from 'inferno-redux';
import { mapStateToControlProps } from 'jsonforms-inferno/dist/ts-build/renderers/controls/base.control';

const materializedEnumControlTester = rankWith(3, and(
  uiTypeIs('Control'),
  schemaMatches(schema => schema.hasOwnProperty('enum'))
));

export class MaterializedEnumControl extends EnumControl {

  componentDidMount() {
    // document.getElementsByTagName('select').material_select();
  }

  componentDidUpdate() {
    // document.getElementsByTagName('select').material_select();
  }
}

export default registerStartupRenderer(
  materializedEnumControlTester,
  connect(mapStateToControlProps)(MaterializedEnumControl)
);
