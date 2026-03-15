import { ProductCard } from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { type Category, products } from "@/data/products";
import { useSearch } from "@tanstack/react-router";
import { Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";

type FilterTab = "All" | Category;
const tabs: FilterTab[] = [
  "All",
  "Fashion",
  "Mobile Accessories",
  "Fitness",
  "Home Decor",
];

export function ProductsPage() {
  const search = useSearch({ from: "/products" }) as { category?: string };
  const initialCategory = (search.category as FilterTab) || "All";

  const [activeTab, setActiveTab] = useState<FilterTab>(
    tabs.includes(initialCategory as FilterTab)
      ? (initialCategory as FilterTab)
      : "All",
  );
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCategory = activeTab === "All" || p.category === activeTab;
      const matchQuery =
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase());
      return matchCategory && matchQuery;
    });
  }, [activeTab, query]);

  return (
    <main className="container mx-auto px-4 py-10">
      {/* Header */}
      <div
        className="mb-8 rounded-2xl p-8"
        style={{ background: "oklch(0.13 0.04 289)" }}
      >
        <p className="text-xs font-bold uppercase tracking-widest mb-1 text-vivid-pink">
          Explore
        </p>
        <h1 className="font-display font-extrabold text-3xl md:text-4xl mb-2 text-white">
          All Products
        </h1>
        <p className="font-semibold text-white/60">
          {filtered.length} items found
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-6 max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
        <Input
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          data-ocid="products.search_input"
          className="pl-9 text-white placeholder:text-white/40"
          style={{
            background: "oklch(0.15 0.02 270)",
            borderColor: "oklch(0.25 0.03 270)",
          }}
        />
      </div>

      {/* Category Tabs */}
      <Tabs
        value={activeTab}
        onValueChange={(v) => setActiveTab(v as FilterTab)}
        className="mb-8"
      >
        <div className="flex items-center gap-2 mb-1">
          <SlidersHorizontal className="w-4 h-4 text-white/50" />
          <span className="text-sm font-semibold text-white/50">
            Filter by:
          </span>
        </div>
        <TabsList
          className="flex flex-wrap h-auto gap-1 p-1 rounded-xl"
          style={{
            background: "oklch(0.14 0.02 270)",
            border: "1px solid oklch(0.25 0.03 270)",
          }}
        >
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              data-ocid="products.tab"
              className="text-xs md:text-sm font-semibold data-[state=active]:text-white rounded-lg px-3 py-1.5 text-white/50"
              style={
                {
                  "--tw-data-active-bg": "oklch(0.65 0.28 289)",
                } as React.CSSProperties
              }
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Products Grid */}
      {filtered.length === 0 ? (
        <div data-ocid="products.empty_state" className="text-center py-20">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="font-display font-bold text-xl mb-2 text-white">
            No products found
          </h3>
          <p className="font-medium text-white/50">
            Try adjusting your search or filter.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      )}
    </main>
  );
}
