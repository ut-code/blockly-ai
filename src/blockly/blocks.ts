import Blockly from "blockly";
import { javascriptGenerator } from "blockly/javascript";

const VALUE = "value";

//k-means

type data = {
  x:number;
  y:number;
}
type cluster = data[];

export const CENTER_OF_CLUSTER = "center_of_cluster";
export const ASSIGN_CLUSTER = "assign_cluster";
export const DISTANCE_BETWEEN_X_AND_Y = 'distance_between_x_and_y';
export const CLUSTER_OF_X = 'cluster_of_x';
export const Y_IS_SMALLER_THAN_X = 'y_is_smaller_than_x';
Blockly.Blocks[CENTER_OF_CLUSTER] = {
  init: function() {
    this.appendValueInput("CLUSTER")
        .setCheck("Cluster")
        .appendField("クラスター");
    this.appendDummyInput()
        .appendField("の中心");
    this.setInputsInline(true);
    this.setOutput(true, "Data");
    this.setColour(230);
    this.setTooltip("");
  }
};
Blockly.Blocks[ASSIGN_CLUSTER] = {
  init: function() {
    this.appendValueInput("DATA")
        .setCheck("Data")
        .appendField("点");
    this.appendDummyInput()
        .appendField("に");
    this.appendValueInput("CLUSTER")
        .setCheck("Cluster")
        .appendField("クラスタ");
    this.appendDummyInput()
        .appendField("を割り当てる");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
  }
};
Blockly.Blocks[DISTANCE_BETWEEN_X_AND_Y] = {
  init: function() {
    this.appendValueInput("DATA")
        .setCheck("Data")
        .appendField("点");
    this.appendDummyInput()
        .appendField("から");
    this.appendValueInput("DATA")
        .setCheck("Data")
        .appendField("点");
    this.appendDummyInput()
        .appendField("までの距離");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip("");
  }
};
Blockly.Blocks[CLUSTER_OF_X] = {
  init: function() {
    this.appendValueInput("DATA")
        .setCheck("Data")
        .appendField("点");
    this.appendDummyInput()
        .appendField("のクラスター");
    this.setInputsInline(true);
    this.setOutput(true, "Cluster");
    this.setColour(230);
    this.setTooltip("");
  }
};
Blockly.Blocks[Y_IS_SMALLER_THAN_X] = {
  init: function() {
    this.appendValueInput("NUMBER")
        .setCheck("Number")
        .appendField("");
    this.appendDummyInput()
        .appendField("より");
    this.appendValueInput("NUMBER")
        .setCheck("Number")
        .appendField("");
    this.appendDummyInput()
        .appendField("が小さい");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("");
  }
};

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
