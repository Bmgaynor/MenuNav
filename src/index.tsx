import * as React from "react";
import { render } from "react-dom";
import { MenuWrapper, NavItem, Section } from "./Components/Menu";
import "./styles.css";

function App() {
  return (
    <MenuWrapper>
      <div className="App">
        <nav className="Menu">
          <ol>
            <NavItem id="apple">apple</NavItem>
            <NavItem id="banana">banana</NavItem>
            <NavItem id="orange">orange</NavItem>
            <NavItem id="mango">mango</NavItem>
            <NavItem id="dragon_fruit">dragon fruit</NavItem>
            <NavItem id="grape">grape</NavItem>
          </ol>
        </nav>
        <div className="Content">
          <Section id="apple" ><h1>apple</h1></Section>
          <Section id="banana" ><h1>banana</h1></Section>
          <Section id="orange" ><h1>orange</h1></Section>
          <Section id="mango" ><h1>mango</h1></Section>
          <Section id="dragon_fruit" ><h1>dragon fruit</h1></Section>
          <Section id="grape" ><h1>grape</h1></Section>
        </div>
      </div>
    </MenuWrapper>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
