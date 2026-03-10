import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/541125535500?text=Hola%2C%20quiero%20cotizar%20una%20mudanza"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-float"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-primary-foreground" />
    </a>
  );
};

export default WhatsAppButton;
