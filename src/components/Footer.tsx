import logo from "@/assets/sama-social-logo.png";

const Footer = () => {
  return (
    <footer className="px-8 py-16 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        {/* Logo */}
        <div className="flex items-center justify-center">
          <img src={logo} alt="Sama Social" className="h-12" />
        </div>

        {/* Tagline */}
        <p className="text-hero-subtext text-lg">
          Fueling India's Youth to Dream Bigger
        </p>
      </div>
    </footer>
  );
};

export default Footer;
