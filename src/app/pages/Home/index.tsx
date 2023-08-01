import CardHomePage from "../../components/CardHomePage";
import Technology from '../../components/Technology';

export function Home() {
  return (
    <div className="flex flex-col items-center">
      <CardHomePage/>
      <Technology />
    </div>
  )
}