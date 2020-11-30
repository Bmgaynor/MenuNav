import * as React from "react";

export type MenuContextProps = {
  sections: {
    [key: string]: boolean;
  },
  setSectionInView: (sectionId: string, inView: boolean) => void;
}

export const MenuContext = React.createContext<MenuContextProps>({
  sections: {},
  setSectionInView: () => {}
});

export const useActiveSectionId = () => {
  const { sections } = React.useContext(MenuContext);
  const activeSection = Object.keys(sections).find((sectionId) => {
    return sections[sectionId];
  });
  console.log('checking if inView ', activeSection)
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
  const [sections, setSections] = React.useState<{
    [key: string]: boolean;
  }>({});

  function setSectionInView(sectionId: string, inView: boolean) {
    const newSections = {
      ...sections
    }
    newSections[sectionId] = inView // not happy about mutation about need to keep its order
    setSections(newSections)
  }
  return (
    <MenuContext.Provider
      value={{ sections, setSectionInView}}
    >
      {children}
    </MenuContext.Provider>
  );
};

