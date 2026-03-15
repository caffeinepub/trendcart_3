import { ProductCard } from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { categories, products } from "@/data/products";
import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, RotateCcw, Shield, Truck, Zap } from "lucide-react";

export function HomePage() {
  const navigate = useNavigate();
  const featuredProducts = products.slice(0, 8);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="hero-gradient">
          <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
            <div className="max-w-2xl">
              <Badge className="mb-4 bg-white/10 !text-white border-white/20 hover:bg-white/20 text-xs font-semibold tracking-widest uppercase">
                ✦ New Arrivals Every Week
              </Badge>
              <h1 className="font-display font-extrabold text-4xl md:text-6xl !text-white leading-tight mb-4">
                Shop the
                <br />
                <span className="relative">
                  <span style={{ color: "oklch(0.75 0.28 289)" }}>Trend</span>
                  <span
                    className="absolute -bottom-1 left-0 w-full h-1 rounded-full"
                    style={{ background: "oklch(0.75 0.28 289)" }}
                  />
                </span>{" "}
                ✦
              </h1>
              <p className="!text-white/80 text-lg md:text-xl mb-8 max-w-md leading-relaxed font-medium">
                Oversized fits, aesthetic room decor, fitness gear, and mobile
                accessories — curated for students and young adults who live
                bold.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  size="lg"
                  data-ocid="hero.primary_button"
                  onClick={() =>
                    navigate({
                      to: "/products",
                      search: { category: undefined },
                    })
                  }
                  className="font-bold px-8 gap-2 shadow-lg"
                  style={{ background: "oklch(0.65 0.28 289)", color: "white" }}
                >
                  Shop Now <ArrowRight className="w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() =>
                    navigate({
                      to: "/products",
                      search: { category: undefined },
                    })
                  }
                  className="border-white/40 !text-white hover:bg-white/10 hover:!text-white px-8 font-semibold"
                >
                  Browse Categories
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 pointer-events-none hidden lg:block">
            <div
              className="absolute top-8 right-16 w-32 h-32 rounded-full blur-2xl"
              style={{ background: "oklch(0.65 0.28 289 / 0.5)" }}
            />
            <div
              className="absolute bottom-12 right-32 w-48 h-48 rounded-full blur-3xl"
              style={{ background: "oklch(0.72 0.22 50 / 0.4)" }}
            />
            <div
              className="absolute top-1/2 right-8 w-24 h-24 rounded-full blur-xl"
              style={{ background: "oklch(0.75 0.25 340 / 0.3)" }}
            />
          </div>
        </div>
        <div className="hidden lg:block absolute right-0 top-0 h-full w-5/12 overflow-hidden">
          <img
            src="/assets/generated/hero-trendcart.dim_1200x500.jpg"
            alt="TrendCart hero"
            className="w-full h-full object-cover opacity-40"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, oklch(0.08 0.02 270), transparent)",
            }}
          />
        </div>
      </section>

      {/* Trust Bar */}
      <section
        className="border-b"
        style={{
          borderColor: "oklch(0.22 0.02 270)",
          background: "oklch(0.11 0.015 270)",
        }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {[
              {
                icon: Truck,
                text: "Free shipping over $50",
                color: "text-violet-400",
              },
              {
                icon: Shield,
                text: "Secure checkout",
                color: "text-emerald-400",
              },
              {
                icon: RotateCcw,
                text: "Easy 30-day returns",
                color: "text-orange-400",
              },
              {
                icon: Zap,
                text: "Fast 2-3 day delivery",
                color: "text-pink-400",
              },
            ].map(({ icon: Icon, text, color }) => (
              <div
                key={text}
                className="flex items-center gap-2 text-sm font-semibold text-white"
              >
                <Icon className={`w-4 h-4 ${color}`} />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-1 text-vivid-pink">
              Browse By
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white">
              Categories
            </h2>
          </div>
          <Link
            to="/products"
            search={{ category: undefined }}
            className="text-sm font-semibold hover:underline flex items-center gap-1 text-vivid-blue"
          >
            View all <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <Link
              key={cat.name}
              to="/products"
              search={{ category: cat.name }}
              data-ocid={`category.item.${i + 1}`}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] flex flex-col justify-end p-5 cursor-pointer"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-90 group-hover:opacity-100 transition-opacity`}
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
              </div>
              <div className="relative z-10">
                <span className="text-4xl mb-2 block group-hover:scale-110 transition-transform origin-left">
                  {cat.icon}
                </span>
                <h3 className="font-display font-bold !text-white text-base leading-tight">
                  {cat.name}
                </h3>
                <p className="!text-white/80 text-xs mt-0.5 font-medium">
                  {cat.description}
                </p>
              </div>
              <ArrowRight className="absolute top-4 right-4 w-4 h-4 text-white/70 group-hover:translate-x-1 group-hover:text-white transition-all" />
            </Link>
          ))}
        </div>
      </section>

      {/* Promo Banner */}
      <section className="container mx-auto px-4">
        <div className="promo-gradient rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-2 left-8 text-9xl font-display font-black text-white leading-none">
              SALE
            </div>
          </div>
          <div className="relative z-10">
            <Badge className="bg-white/20 !text-white border-white/30 mb-3 text-xs font-bold uppercase tracking-widest">
              Limited Time
            </Badge>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl !text-white mb-2">
              Up to 40% Off 🔥
            </h2>
            <p className="!text-white/80 max-w-sm font-medium">
              Don&apos;t miss out on this week&apos;s hottest deals across all
              categories. Shop before stocks run out!
            </p>
          </div>
          <Link
            to="/products"
            search={{ category: undefined }}
            className="relative z-10 shrink-0"
          >
            <Button
              size="lg"
              className="bg-white text-orange-600 font-bold hover:bg-white/90 px-8 shadow-lg"
            >
              Grab the Deal <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-vivid-green mb-1">
              Hand-Picked
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white">
              Featured Products
            </h2>
          </div>
          <Link
            to="/products"
            search={{ category: undefined }}
            className="text-sm text-vivid-green font-semibold hover:underline flex items-center gap-1"
          >
            See all <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {featuredProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>

      {/* Why TrendCart */}
      <section className="py-16" style={{ background: "oklch(0.1 0.015 270)" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-vivid-orange mb-1">
              Why Choose Us
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white">
              Built for Your Vibe
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                emoji: "⚡",
                title: "Lightning Fast Delivery",
                desc: "Order today, receive in 2-3 business days. Express shipping available.",
                borderColor: "border-violet-700",
                titleColor: "text-violet-400",
              },
              {
                emoji: "🔒",
                title: "100% Secure Payment",
                desc: "Your transactions are protected with bank-grade encryption.",
                borderColor: "border-emerald-700",
                titleColor: "text-emerald-400",
              },
              {
                emoji: "💯",
                title: "Quality Guaranteed",
                desc: "Not happy? We offer hassle-free returns within 30 days, no questions asked.",
                borderColor: "border-orange-700",
                titleColor: "text-orange-400",
              },
            ].map(({ emoji, title, desc, borderColor, titleColor }) => (
              <div
                key={title}
                className={`border rounded-2xl p-6 text-center transition-all shadow-sm hover:shadow-lg ${borderColor}`}
                style={{ background: "oklch(0.13 0.02 270)" }}
              >
                <div className="text-4xl mb-4">{emoji}</div>
                <h3
                  className={`font-display font-bold text-lg mb-2 ${titleColor}`}
                >
                  {title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
