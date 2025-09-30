const Footer = () => {
  return (
    <footer className="px-8 py-16 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-hero-pink rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">S</span>
          </div>
          <span className="text-2xl font-bold text-hero-text">
            sama <span className="font-normal">social</span>
          </span>
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
