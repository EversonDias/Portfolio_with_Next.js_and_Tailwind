"use client"
import Header from "./components/Header";
import { HeaderProvider } from "./contexts/HeaderContext/provider";
import Footer from "./components/Footer";
import { Home } from "./components/Home";
import Projects from "./components/projects";
import { ProjectProvider } from "./contexts/ProjectContext/provider";
import About from "./components/About";
import { Suspense, useEffect, useState } from "react";
import Loading from "./Loading";

export default function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
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
