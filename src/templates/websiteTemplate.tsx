import { ReactNode } from "react";
import Header from "./../components/header";

type Props = {
  children: ReactNode;
};

const WebsiteTemplate = ({ children }: Props) => (
  <div className="p-6 md:p-12">
    <Header />
    {children}
  </div>
);

export default WebsiteTemplate;
