
import Footer from "@/app/footer";

import Navbar from "@/app/navBar";

export default function MainLayout({ children }) {
  return (
   <>
      
            <Navbar/>
        
          <div >{children}</div>


          <Footer/>
    
       
        </>
     
  );
}
