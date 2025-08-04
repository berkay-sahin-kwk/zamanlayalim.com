import { TrendingUp, Github, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">zamanlayalim.com</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Türkiye'deki enflasyon, döviz kurları ve temel gıda fiyatlarını 
              takip edin ve karşılaştırın.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Sayfalar</h3>
            <nav className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Ana Sayfa
              </Link>
              <Link to="/compare" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Karşılaştır
              </Link>
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Hakkında
              </Link>
              <Link to="/blog" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Güncellemeler
              </Link>
            </nav>
          </div>

          {/* Data Sources */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Veri Kaynakları</h3>
            <nav className="space-y-2">
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                TCMB
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                TÜİK
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                EPDK
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">İletişim</h3>
            <div className="flex space-x-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 zamanlayalim.com. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Gizlilik Politikası
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Kullanım Koşulları
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};