import * as React from "react";
import { ReactNode } from "react";

const Button = ({ children }: { children: ReactNode }) => {
  return (
    <button style={{ padding: 4, backgroundColor: "blue" }}>{children}</button>
  );
};

export { Button };
