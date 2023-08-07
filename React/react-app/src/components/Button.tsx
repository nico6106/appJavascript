import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  nameClass?: 'primary' | 'secondary' | 'success' | 'danger';
  onClick: () => void;
}

const Button = ({ children, nameClass = 'primary', onClick }: Props) => {
  return (
    <button type="button" className={'btn btn-' + nameClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
