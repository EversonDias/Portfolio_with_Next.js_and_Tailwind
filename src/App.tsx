import Header from "./partner/Header";
import { HeaderProvider } from "./contexts/HeaderContext/provider";
import Footer from "./partner/Footer";
import { Home } from "./pages/Home";
import Projects from "./pages/projects";
import { ProjectProvider } from "./contexts/ProjectContext/provider";

export default function App() {
  return (
    <main className="bg-primary w-full">
      <HeaderProvider>
        <ProjectProvider>
        <Header />
        <Home/>
        <Projects />
        <Footer/>
        </ProjectProvider>
      </HeaderProvider>
    </main>
  )
}
