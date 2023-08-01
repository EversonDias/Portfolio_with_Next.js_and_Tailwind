import Header from "./partner/Header";
import { HeaderProvider } from "./contexts/HeaderContext/provider";
import Footer from "./partner/Footer";
import { Home } from "./pages/Home";
import Projects from "./pages/projects";
import { ProjectProvider } from "./contexts/ProjectContext/provider";
import About from "./pages/About";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const OK = process.env.URL_FIRST
    console.log(OK)
  }, [])
  
  return (
    <main className="bg-primary w-full overflow-hidden">
      <HeaderProvider>
        <ProjectProvider>
        <Header />
        <Home/>
        <Projects />
        <About/>
        <Footer/>
        </ProjectProvider>
      </HeaderProvider>
    </main>
  )
}
