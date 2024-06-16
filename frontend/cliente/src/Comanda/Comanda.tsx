import Header from "./components/Header/Header.tsx";
import { Main } from "./components/Main/Main.tsx";
import { FooterComanda } from "./components/Footer/FooterComanda.tsx"; 
import { CalculationProvider } from "./CalculandoComanda.tsx";


function Comanda(){
  return (
    <>
    <CalculationProvider>
      <Header />
      <Main/>
      <FooterComanda />
    </CalculationProvider>
    </>
  );
}
export default Comanda;
