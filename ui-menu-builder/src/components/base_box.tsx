import React from "react";
import injectSheet from "react-jss";
import { DragSource } from "react-dnd";

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

const knightSource = {
  //@ts-ignore
  beginDrag(props) {
    return {};
  }
};

//@ts-ignore
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

const BaseBox = (props: { [x: string]: any }) => {
  const { classes, children, connectDragSource, isDragging } = props;
  return connectDragSource(<div className={classes.BaseBox}>{children}</div>);
};

const StyledBaseBox = injectSheet(styles)(BaseBox);

export default DragSource("cell", knightSource, collect)(StyledBaseBox);
// export default StyledBaseBox;
