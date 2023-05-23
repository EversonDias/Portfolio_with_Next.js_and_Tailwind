import Header from "./partner/Header";
import { HeaderProvider } from "./contexts/HeaderContext/provider";
import { Home } from "./pages/Home";
// import MyRoutes from "./routes";

export default function App() {
  return (
    <main className="bg-light-background h-[100vh]">
      <HeaderProvider>
        <Header />
        <Home />
        {/* <MyRoutes /> */}
      </HeaderProvider>
    </main>
  )
}
