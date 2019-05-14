import React from "react";
import injectSheet from "react-jss";

const styles = {
  BaseBox: {
    borderStyle: "dotted",
    border: {
      width: "1px"
    },
    width: 48,
    height: 48
  }
};

const BaseBox = (props: { [x: string]: any }) => {
  const { classes, children } = props;
  return <div className={classes.BaseBox}>{children}</div>;
};

const StyledBaseBox = injectSheet(styles)(BaseBox);

export default StyledBaseBox;
