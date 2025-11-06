import configPromise from "@payload-config";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { SearchFilters } from "./search-filters";
import { getPayload } from "payload";

interface Props{
    children: React.ReactNode;
};

//manny
const Layout = async({ children }: Props) => {

  const payload = await getPayload(
    {
      config: configPromise,
    }
  );
  const data = await payload.find({
    collection: 'users',
    // 
  })

  return (
    <div className="flex flex-col min-h-screen">
    <Navbar/>
    <SearchFilters data = {data}/>
      <div className="flex-1">
      {children}
      </div>
    
      <Footer/>
    </div>
    
  );
};

export default Layout;
