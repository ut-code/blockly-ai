import { useEffect, useRef } from "react";
import Blockly from "blockly";
import type { WorkspaceSvg } from "blockly";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import logoUrl from "./resources/logo.svg";
import blocklyOptions from "./blockly/options";

export default function App() {
  const workspaceRef = useRef<WorkspaceSvg>();
  const workspaceContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!workspaceContainerRef.current) return undefined;
    const workspace = Blockly.inject(
      workspaceContainerRef.current,
      blocklyOptions
    );
    workspaceRef.current = workspace;
    return () => {
      workspace.dispose();
    };
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateRows: "48px auto",
      }}
    >
      <AppBar position="sticky">
        <Toolbar variant="dense">
          <Box sx={{ height: 32 }}>
            <a href="https://utcode.net/" target="_blank" rel="noreferrer">
              <img src={logoUrl} alt="ut.code();" height="100%" />
            </a>
          </Box>
          <Typography sx={{ ml: 2 }}>ML Workshop</Typography>
        </Toolbar>
      </AppBar>
      <Box ref={workspaceContainerRef} />
    </Box>
  );
}
