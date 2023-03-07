import Blockly from "blockly";
import Ja from "blockly/msg/ja";
import { CONSOLE_LOG } from "./blocks";

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
