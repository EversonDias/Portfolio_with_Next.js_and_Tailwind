import Header from "./components/Header";
import { HeaderProvider } from "./contexts/HeaderContext/provider";

export default function App() {
  return (
    <main className="bg-light-background h-[100vh]">
      <HeaderProvider>
        <Header></Header>
      </HeaderProvider>
    </main>
  )
}
