import React from "react";
import injectSheet from "react-jss";
import { DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import { range } from "lodash";
import StyledBaseBox from "./base_box";

const styles = {
  TenByTen: {
    display: "flex",
    flexFlow: "row wrap",
    width: 500
  }
};

const TenByTen = (props: { [x: string]: any }) => {
  const classes = props["classes"];
  const Lines = range(0, 100).map(i => {
    return <StyledBaseBox />;
  });
  return (
    <DragDropContextProvider backend={HTML5Backend}>
      <div className={classes.TenByTen}>{Lines}</div>
    </DragDropContextProvider>
  );
};

const StyledTenByTen = injectSheet(styles)(TenByTen);

export default StyledTenByTen;
