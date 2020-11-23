import * as React from "react";
import { InView } from "react-intersection-observer";

type MenuContextProps = {
  sections: {
    [key: string]: string;
  },
  activeSection: string;
  setSectionInView: (sectionId: string, inView: boolean) => void;
}

export const MenuContext = React.createContext<MenuContextProps>({
  sections: {},
  activeSection: "",
  setSectionInView: () => {}
});

export const useActiveSectionId = () => {
  const { sections } = React.useContext(MenuContext);
  const activeSection = Object.keys(sections).find((sectionId) => {
    return sections[sectionId];
  });
  return activeSection;
};

export const useIsSectionActive = (id: string) => {
  const activeSection = useActiveSectionId();
  return id === activeSection;
};

export const useSetSectionInView = (sectionId: string) => {
  const { setSectionInView } = React.useContext(MenuContext);
  React.useEffect(() => {
    // when component is unmounted set it to false
    return () => setSectionInView(sectionId, false);
  }, []);
  return (inView: boolean) => setSectionInView(sectionId, inView);
};

export const MenuWrapper = ({ children }: { children: React.ReactNode }) => {
  const [sections, setSections] = React.useState({});

  function setSectionInView(sectionId: string, inView: boolean) {
    setSections({
      ...sections,
      [sectionId]: inView
    });
  }
  return (
    <MenuContext.Provider
      value={{ sections, setSectionInView, activeSection: "" }}
    >
      {children}
    </MenuContext.Provider>
  );
};

type NavItemProps = {
  children: React.ReactNode;
  isActive?: boolean;
  id: string;
  onClick?: () => void;
};

const NavItem = ({ isActive, children, onClick, id }: NavItemProps) => {
  const bgColor = isActive ? "red" : "white";

  return (
    <li style={{ backgroundColor: bgColor }} onClick={onClick}>
      <a href={`#${id}`}>{children}</a>
    </li>
  );
};

type MenuItemProps = {
  children: React.ReactNode;
  id: string;
};

export const MenuItem = ({ children, id }: MenuItemProps) => {
  const isActive = useIsSectionActive(id);

  return (
    <NavItem id={id} isActive={isActive}>
      {children}
    </NavItem>
  );
};

type SectionProps = {
  children?: React.ReactNode;
  id: string;
};

export const Section = ({ id, children, ...props }: SectionProps) => {
  console.log("rendering ", id);
  const { setSectionInView } = React.useContext(MenuContext);
  const isSectionActive = useIsSectionActive(id);

  const bgColor = isSectionActive ? "red" : "black";
  // it seems like a margin of 1px is required for the section to become active on url change
  return (
    <InView
      id={id}
      as="section"
      className="Section"
      threshold={0}
      onChange={(inView, entry) => {
        console.debug(`${id} is ${inView ? "" : "not"} inView`);
        setSectionInView(id, inView);
      }}
      style={{ color: bgColor, margin: "1px 0" }}
      {...props}
    >
      <h1>{id}</h1>
      {children}
    </InView>
  );
};
