import Blockly from "blockly";
import Ja from "blockly/msg/ja";
import { CONSOLE_LOG, CENTER_OF_CLUSTER, ASSIGN_CLUSTER, DISTANCE_BETWEEN_X_AND_Y, CLUSTER_OF_X, Y_IS_SMALLER_THAN_X} from "./blocks";

Blockly.setLocale(Ja);
Object.assign(Blockly, {
  HSV_SATURATION: 0.6,
  HSV_VALUE: 1,
});

const blocklyOptions = {
  toolbox: {
    kind: "categoryToolbox",
    contents: [
      {
        kind: "category",
        name: "デバッグ",
        contents: [
          {
            kind: "block",
            type: CENTER_OF_CLUSTER,
          },
          {
            kind: "block",
            type: ASSIGN_CLUSTER,
          },
          {
            kind: "block",
            type: DISTANCE_BETWEEN_X_AND_Y,
          },
          {
            kind: "block",
            type: CLUSTER_OF_X,
          },
          {
            kind: "block",
            type: Y_IS_SMALLER_THAN_X,
          },
          {
            kind: "block",
            type: CONSOLE_LOG,
          },
        ],
      },
    ],
  },
  grid: {
    spacing: 20,
    length: 3,
    colour: "#ccc",
    snap: true,
  },
  move: {
    wheel: true,
  },
  zoom: {
    controls: true,
  },
  renderer: "thrasos",
};

export default blocklyOptions;
