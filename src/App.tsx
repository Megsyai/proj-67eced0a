
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Biography from "./pages/Biography";
import Classics from "./pages/Classics";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { Music, History, Mic2, MessageSquare, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const queryClient = new QueryClient();

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "الرئيسية", path: "/", icon: <Mic2 className="w-4 h-4" /> },
    { name: "سيرة الخلود", path: "/biography", icon: <History className="w-4 h-4" /> },
    { name: "روائع الأغاني", path: "/classics", icon: <Music className="w-4 h-4" /> },
    { name: "تواصل معنا", path: "/contact", icon: <MessageSquare className="w-4 h-4" /> },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-yellow-900/30 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-2xl font-serif font-bold text-yellow-500 tracking-widest uppercase">
            أم كلثوم
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 space-x-reverse">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className="flex items-center gap-2 hover:text-yellow-500 transition-colors duration-300 font-medium"
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-yellow-500" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={cn(
        "fixed inset-0 top-20 bg-black/95 z-40 transition-transform duration-300 md:hidden",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col p-8 space-y-6">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              onClick={() => setIsOpen(false)}
              className="text-2xl font-medium border-b border-yellow-900/20 pb-4"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-black text-white py-12 border-t border-yellow-900/30">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-serif text-yellow-500 mb-4">كوكب الشرق</h2>
      <p className="max-w-md mx-auto text-gray-400 mb-8 italic">
        "صوت الدنيا، ورمز العظمة الفنية العربية التي لا تتكرر."
      </p>
      <div className="flex justify-center space-x-6 space-x-reverse mb-10 text-yellow-600">
        <span className="hover:text-yellow-400 cursor-pointer transition-colors">فيسبوك</span>
        <span className="hover:text-yellow-400 cursor-pointer transition-colors">تويتر</span>
        <span className="hover:text-yellow-400 cursor-pointer transition-colors">إنستغرام</span>
      </div>
      <p className="text-sm text-gray-600">© جميع الحقوق للذكرى الخالدة - أم كلثوم</p>
    </div>
  </footer>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-sans rtl" dir="rtl">
          <Navigation />
          <main className="pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/biography" element={<Biography />} />
              <Route path="/classics" element={<Classics />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
