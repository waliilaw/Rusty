import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";


const  Page = ()  => {

  return(
    <div className="flex items-center justify-center min-h-screen min-w-screen bg-black ">
      <Header />
      <Hero />
      <Footer />
    </div>
  )
}


export default Page;