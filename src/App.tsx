import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import RoomsPage from "./pages/RoomsPage.tsx";
import RoomDetailsPage from "./pages/RoomDetailsPage.tsx";
import GalleryPage from "./pages/GalleryPage.tsx";
import LocationPage from "./pages/LocationPage.tsx";
import ServicesPage from "./pages/ServicesPage.tsx";
import AttractionsPage from "./pages/AttractionsPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/rooms" element={<RoomsPage />} />
          <Route path="/rooms/:id" element={<RoomDetailsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/attractions" element={<AttractionsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
