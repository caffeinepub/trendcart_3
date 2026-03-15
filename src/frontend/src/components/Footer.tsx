import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle, Twitter, Youtube, Zap } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer style={{ background: "oklch(0.12 0.03 290)" }} className="mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Zap className="w-5 h-5 text-white fill-current" />
              </div>
              <span className="font-display font-bold text-xl text-white">
                Trend<span style={{ color: "oklch(0.75 0.18 289)" }}>Cart</span>
              </span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed max-w-xs">
              Your go-to destination for trendy fashion, tech accessories,
              fitness gear, and aesthetic home decor.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-pink-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-sky-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-red-400 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-green-400 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-3">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/products"
                  search={{ category: undefined }}
                  className="text-white/75 hover:text-white transition-colors font-medium"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  search={{ category: "Fashion" }}
                  className="text-white/75 hover:text-white transition-colors font-medium"
                >
                  Fashion
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  search={{ category: "Mobile Accessories" }}
                  className="text-white/75 hover:text-white transition-colors font-medium"
                >
                  Mobile Accessories
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  search={{ category: "Fitness" }}
                  className="text-white/75 hover:text-white transition-colors font-medium"
                >
                  Fitness
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  search={{ category: "Home Decor" }}
                  className="text-white/75 hover:text-white transition-colors font-medium"
                >
                  Home Decor
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-3">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/contact"
                  className="text-white/75 hover:text-white transition-colors font-medium"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/75 hover:text-green-400 transition-colors font-medium"
                >
                  WhatsApp Support
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/75 hover:text-white transition-colors font-medium"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/75 hover:text-white transition-colors font-medium"
                >
                  Track Order
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/75 hover:text-white transition-colors font-medium"
                >
                  Returns Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            © {year} TrendCart. All rights reserved.
          </p>
          <p className="text-white/60 text-sm">
            Built with ❤️ using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:underline font-semibold"
              style={{ color: "oklch(0.75 0.18 289)" }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
