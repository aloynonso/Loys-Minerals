import logo from "@/assets/loys-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Loys Minerals" className="h-10 w-auto brightness-0 invert" />
          </div>

          <div className="text-center md:text-right">
            <p className="text-primary-foreground/80">
              © {currentYear} Loys Gems and Minerals. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/60 mt-1">
              Mining · Processing · Trading · Partnerships
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
