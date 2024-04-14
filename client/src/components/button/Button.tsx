/* eslint-disable @typescript-eslint/no-explicit-any */

export interface ButtonProps {
  text: string;
  onClick?: (event: any) => void;
  rounded?: boolean;
  type?: any;
  disabled?: boolean;
  buttonColor?: string;
  style?: string;
}

const Button = ({
  text,
  rounded = true,
  onClick,
  type,
  disabled,
  buttonColor,
  style,
}: ButtonProps) => {
  return (
    <button
      className={` ${buttonColor ?? "bg-primary"} text-white ${
        rounded ?? "rounnded-3xl"
      } m-1 ${style}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
