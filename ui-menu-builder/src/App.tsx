import React from "react";
import logo from "./logo.svg";
import "./App.css";
import StyledBaseBox from "./components/base_box";
import StyledTenByTen from "./components/TenByTen";

const App: React.FC = () => {
  return (
    <div className="App">
      <StyledTenByTen />
    </div>
  );
};

export default App;
