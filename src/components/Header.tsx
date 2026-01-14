import { Button } from "@/components/ui/button";
import logo from "@/assets/sama-social-logo.png";
import { WAITLIST_URL } from "@/config/constants";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full px-8 py-4 bg-background/80 backdrop-blur-md border-b border-border/50 flex items-center justify-between">
      <div className="flex items-center">
        <img src={logo} alt="Sama Social" className="h-10" />
      </div>
      
      <Button variant="hero" size="sm" asChild>
        <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer">
          ✨ Join community
        </a>
      </Button>
    </header>
  );
};

export default Header;