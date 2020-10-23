import * as React from "react";
import { render } from "react-dom";
import { MenuWrapper, MenuItem, Section } from "./Components/Menu";
import "./styles.css";

function App() {
  return (
    <MenuWrapper>
      <div className="App">
        <nav className="Menu">
          <ol>
            <MenuItem id="apple">apple</MenuItem>
            <MenuItem id="banana">banana</MenuItem>
            <MenuItem id="orange">orange</MenuItem>
            <MenuItem id="mango">mango</MenuItem>
            <MenuItem id="dragon_fruit">dragon fruit</MenuItem>
            <MenuItem id="grape">grape</MenuItem>
          </ol>
        </nav>
        <div className="Content">
          <Section id="apple" />
          <Section id="banana" />
          <Section id="orange" />
          <Section id="mango" />
          <Section id="dragon_fruit" />
          <Section id="grape" />
        </div>
      </div>
    </MenuWrapper>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
