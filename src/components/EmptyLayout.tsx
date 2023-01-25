import { ReactNode } from "react";

type EmptyLayoutProps = {
  children?: ReactNode;
};

const EmptyLayout: React.FC<EmptyLayoutProps> = (props) => {
  const { children } = props;
  return <>{children}</>;
};
export default EmptyLayout;
