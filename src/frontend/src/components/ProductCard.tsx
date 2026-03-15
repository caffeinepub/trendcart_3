import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";
import { Link } from "@tanstack/react-router";
import { ShoppingCart, Star } from "lucide-react";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    toast.success(`${product.name} added to cart!`, {
      description: `$${product.price.toFixed(2)}`,
    });
  };

  return (
    <Link
      to="/products/$productId"
      params={{ productId: product.id }}
      data-ocid={`product.item.${index + 1}`}
      className="block group"
    >
      <div className="product-card-hover bg-card rounded-xl overflow-hidden border border-border">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {product.badge && (
            <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground font-semibold text-xs">
              {product.badge}
            </Badge>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-1">
            {product.category}
          </p>
          <h3 className="font-display font-semibold text-foreground text-sm leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-3">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  className={`w-3 h-3 ${s <= Math.round(product.rating) ? "star-filled fill-current" : "star-empty"}`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              ({product.reviewCount})
            </span>
          </div>

          <div className="flex items-center justify-between gap-2">
            <span className="font-display font-bold text-lg text-foreground">
              ${product.price.toFixed(2)}
            </span>
            <Button
              size="sm"
              onClick={handleAddToCart}
              data-ocid="product.add_button"
              className="gap-1.5 bg-primary hover:bg-primary/90 text-primary-foreground text-xs px-3"
            >
              <ShoppingCart className="w-3 h-3" />
              Add
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
}
