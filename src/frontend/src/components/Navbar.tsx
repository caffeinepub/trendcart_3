import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, ShoppingCart, X, Zap } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const { cartCount } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) =>
    href === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(href);

  return (
    <header
      className="sticky top-0 z-50 shadow-lg"
      style={{
        background: "oklch(0.08 0.01 270)",
        borderBottom: "1px solid oklch(0.22 0.03 289)",
      }}
    >
      <nav className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center group-hover:scale-105 transition-transform">
            <Zap className="w-5 h-5 text-white fill-current" />
          </div>
          <span className="font-display font-extrabold text-xl tracking-tight text-white">
            Trend<span style={{ color: "oklch(0.75 0.28 289)" }}>Cart</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              data-ocid="nav.link"
              className={`px-4 py-2 rounded-md text-sm font-bold transition-colors ${
                isActive(link.href)
                  ? "text-white"
                  : "text-white/60 hover:text-white hover:bg-white/10"
              }`}
              style={
                isActive(link.href)
                  ? { background: "oklch(0.65 0.28 289)" }
                  : {}
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Cart + Mobile Menu */}
        <div className="flex items-center gap-2">
          <Link to="/cart">
            <Button
              variant="ghost"
              size="icon"
              data-ocid="nav.cart_button"
              className="relative text-white/70 hover:text-white hover:bg-white/10"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span
                  className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-white text-xs flex items-center justify-center font-bold"
                  style={{ background: "oklch(0.65 0.28 289)" }}
                >
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Button>
          </Link>

          {/* Mobile hamburger */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white/70 hover:text-white hover:bg-white/10"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden px-4 pb-4 pt-2 flex flex-col gap-1"
          style={{
            background: "oklch(0.1 0.015 270)",
            borderTop: "1px solid oklch(0.22 0.03 289)",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              data-ocid="nav.link"
              onClick={() => setMobileOpen(false)}
              className={`px-4 py-3 rounded-md text-sm font-bold transition-colors ${
                isActive(link.href)
                  ? "text-white"
                  : "text-white/60 hover:text-white hover:bg-white/10"
              }`}
              style={
                isActive(link.href)
                  ? { background: "oklch(0.65 0.28 289)" }
                  : {}
              }
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/cart"
            onClick={() => setMobileOpen(false)}
            className="px-4 py-3 rounded-md text-sm font-bold text-white/60 hover:text-white hover:bg-white/10 flex items-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Cart{" "}
            {cartCount > 0 && (
              <span
                className="font-bold"
                style={{ color: "oklch(0.75 0.28 289)" }}
              >
                ({cartCount})
              </span>
            )}
          </Link>
        </div>
      )}
    </header>
  );
}
