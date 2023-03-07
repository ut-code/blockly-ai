import Blockly from "blockly";
import { javascriptGenerator } from "blockly/javascript";

const VALUE = "value";

// デバッグ用
// eslint-disable-next-line import/prefer-default-export
export const CONSOLE_LOG = "console_log";
Blockly.Blocks[CONSOLE_LOG] = {
  init(this: Blockly.Block) {
    this.appendValueInput(VALUE).appendField("console.log");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(160);
  },
};
javascriptGenerator[CONSOLE_LOG] = (block: Blockly.Block) =>
  `console.log(${Blockly.JavaScript.valueToCode(
    block,
    VALUE,
    Blockly.JavaScript.ORDER_NONE
  )});`;
