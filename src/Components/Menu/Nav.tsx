import * as React from "react";

type NavItemProps = {
  children: React.ReactNode;
  id: string;
  // All other props
  [x:string]: any;
};

export const NavItem = ({ children, id, ...props }: NavItemProps) => {
  return (
    <li {...props}> 
      <a href={`#${id}`}>{children}</a>
    </li>
  );
};

