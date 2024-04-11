import React from "react";

export interface ButtonProps {
  text: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: (event: any) => void;
  rounded?: boolean;
}

const Button = ({ text, rounded = true, onClick }: ButtonProps) => {
  return (
    <button
      className={`bg-primary text-white ${rounded ?? "rounnded-3xl"}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
