"use client"
import Header from "./partner/Header";
import { HeaderProvider } from "./contexts/HeaderContext/provider";
import Footer from "./partner/Footer";
import { Home } from "./pages/Home";
import Projects from "./pages/projects";
import { ProjectProvider } from "./contexts/ProjectContext/provider";
import About from "./pages/About";
import { Suspense, useEffect, useState } from "react";
import Loading from "./Loading";

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  
  return (
    <main className="bg-primary w-full overflow-hidden">
        <HeaderProvider>
          <ProjectProvider>
          {
            loading && (
              <div className="fixed w-full h-[100vh] bg-primary z-50">
                <div className="flex w-full h-full justify-center items-center">
                  <Loading />
                </div>
              </div>
            )
          }
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
