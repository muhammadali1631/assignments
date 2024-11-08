import About from "@/components/about/About";
import Main from "@/components/main/Main";
import Pricing from "@/components/pricing/Pricing";
import Server from "@/components/server/Server";
import Service from "@/components/services/Service";
import Contact from '@/components/contact/Cantact'

export default function Home() {
  return (
    <div>
      <Main/>
      <Service/>
      <About/>
      <Server/>
      <Pricing/>
      <Contact/>
    </div>
    );
}
