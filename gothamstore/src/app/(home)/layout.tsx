import { Navbar } from "./navbar";

interface Props{
    children: React.ReactNode;
};

//manny
const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
    <Navbar/>
      {children}
    </div>
  );
};

export default Layout;
