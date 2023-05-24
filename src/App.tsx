import Header from "./partner/Header";
import { HeaderProvider } from "./contexts/HeaderContext/provider";
// import { Home } from "./pages/Home";
import MyRoutes from "./routes";
import Footer from "./partner/Footer";

export default function App() {
  return (
    <main className="bg-primary h-[100vh]">
      <HeaderProvider>
        <Header />
        <MyRoutes />
        <Footer/>
      </HeaderProvider>
    </main>
  )
}
