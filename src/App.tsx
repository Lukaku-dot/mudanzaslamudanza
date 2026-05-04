import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Guardamuebles from "./pages/Guardamuebles.tsx";
import MudanzasNunez from './pages/MudanzasNunez.tsx';
import MudanzasAlmagro from './pages/MudanzasAlmagro.tsx';
import MudanzasSanTelmo from './pages/MudanzasSanTelmo.tsx';
import MudanzasDevoto from './pages/MudanzasDevoto.tsx';
import MudanzasLomasZamora from './pages/MudanzasLomasZamora.tsx';
import MudanzasQuilmes from './pages/MudanzasQuilmes.tsx';
import MudanzasAvellaneda from './pages/MudanzasAvellaneda.tsx';
import MudanzasMoron from './pages/MudanzasMoron.tsx';
import MudanzasTigre from './pages/MudanzasTigre.tsx';
import MudanzasLaMatanza from './pages/MudanzasLaMatanza.tsx';
import MudanzasPalermo from './pages/MudanzasPalermo.tsx';
import MudanzasBelgrano from './pages/MudanzasBelgrano.tsx';
import MudanzasCaballito from './pages/MudanzasCaballito.tsx';
import MudanzasSanIsidro from './pages/MudanzasSanIsidro.tsx';
import MudanzasFlores from './pages/MudanzasFlores.tsx';
import MudanzasRecoleta from './pages/MudanzasRecoleta.tsx';
import MudanzasVillaUrquiza from './pages/MudanzasVillaUrquiza.tsx';
import MudanzasMataderos from './pages/MudanzasMataderos.tsx';
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/guardamuebles" element={<Guardamuebles />} />
            <Route path="/mudanzas-nunez" element={<MudanzasNunez />} />
            <Route path="/mudanzas-almagro" element={<MudanzasAlmagro />} />
            <Route path="/mudanzas-san-telmo" element={<MudanzasSanTelmo />} />
            <Route path="/mudanzas-villa-devoto" element={<MudanzasDevoto />} />
            <Route path="/mudanzas-lomas-de-zamora" element={<MudanzasLomasZamora />} />
            <Route path="/mudanzas-quilmes" element={<MudanzasQuilmes />} />
            <Route path="/mudanzas-avellaneda" element={<MudanzasAvellaneda />} />
            <Route path="/mudanzas-moron" element={<MudanzasMoron />} />
            <Route path="/mudanzas-tigre" element={<MudanzasTigre />} />
            <Route path="/mudanzas-la-matanza" element={<MudanzasLaMatanza />} />
            <Route path='/mudanzas-palermo' element={<MudanzasPalermo />} />
            <Route path='/mudanzas-belgrano' element={<MudanzasBelgrano />} />
            <Route path='/mudanzas-caballito' element={<MudanzasCaballito />} />
            <Route path='/mudanzas-san-isidro' element={<MudanzasSanIsidro />} />
            <Route path='/mudanzas-flores' element={<MudanzasFlores />} />
            <Route path='/mudanzas-recoleta' element={<MudanzasRecoleta />} />
            <Route path='/mudanzas-villa-urquiza' element={<MudanzasVillaUrquiza />} />
            <Route path='/mudanzas-mataderos' element={<MudanzasMataderos />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
