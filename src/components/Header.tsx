import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full px-8 py-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-hero-pink to-primary rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">S</span>
        </div>
        <span className="text-xl font-semibold text-hero-text">
          sama <span className="font-normal">social</span>
        </span>
      </div>
      
      <Button variant="hero" size="sm">
        ✨ Join waitlist
      </Button>
    </header>
  );
};

export default Header;