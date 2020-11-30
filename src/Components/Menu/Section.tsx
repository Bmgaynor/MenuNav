import * as React from 'react'
import { InView } from "react-intersection-observer";
import { MenuContext } from './Menu'


type SectionProps = {
  children?: React.ReactNode;
  id: string;
  // All other props
  [x:string]: any;
};


export const Section = ({ id, children, ...props }: SectionProps) => {
  const { setSectionInView } = React.useContext(MenuContext);
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
      {...props}
    >
      {children}
    </InView>
  );
};