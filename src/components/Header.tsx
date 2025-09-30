import { Button } from "@/components/ui/button";
import logo from "@/assets/sama-social-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full px-8 py-4 bg-background/80 backdrop-blur-md border-b border-border/50 flex items-center justify-between">
      <div className="flex items-center">
        <img src={logo} alt="Sama Social" className="h-10" />
      </div>
      
      <Button variant="hero" size="sm">
        ✨ Join waitlist
      </Button>
    </header>
  );
};

export default Header;