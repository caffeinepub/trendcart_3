import { StarRating } from "@/components/StarRating";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/context/CartContext";
import { type Review, products, sampleReviews } from "@/data/products";
import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, Check, Minus, Plus, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function ProductDetailPage() {
  const { productId } = useParams({ from: "/products/$productId" });
  const product = products.find((p) => p.id === productId);
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const baseReviews = sampleReviews.filter((r) => r.productId === productId);
  const [reviews, setReviews] = useState<Review[]>(baseReviews);
  const [reviewForm, setReviewForm] = useState({
    name: "",
    rating: 5,
    comment: "",
  });

  if (!product) {
    return (
      <main className="container mx-auto px-4 py-20 text-center">
        <div className="text-6xl mb-4">😕</div>
        <h2 className="font-display font-bold text-2xl mb-4">
          Product not found
        </h2>
        <Link to="/products" search={{ category: undefined }}>
          <Button>Back to Products</Button>
        </Link>
      </main>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    toast.success(`${product.name} added to cart!`, {
      description: `Qty: ${quantity}`,
    });
    setTimeout(() => setAdded(false), 2000);
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewForm.name.trim() || !reviewForm.comment.trim()) return;
    const newReview: Review = {
      id: `r-${Date.now()}`,
      productId: product.id,
      name: reviewForm.name,
      rating: reviewForm.rating,
      comment: reviewForm.comment,
      date: new Date().toISOString().split("T")[0],
    };
    setReviews((prev) => [newReview, ...prev]);
    setReviewForm({ name: "", rating: 5, comment: "" });
    toast.success("Review submitted! Thank you.");
  };

  const avgRating = reviews.length
    ? reviews.reduce((s, r) => s + r.rating, 0) / reviews.length
    : product.rating;

  return (
    <main className="container mx-auto px-4 py-10">
      <Link
        to="/products"
        search={{ category: undefined }}
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-8 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
        Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-10 mb-16">
        <div className="rounded-2xl overflow-hidden bg-muted aspect-square">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <Badge className="bg-accent text-accent-foreground border-primary/30 text-xs font-semibold">
              {product.category}
            </Badge>
            {product.badge && (
              <Badge className="bg-primary text-primary-foreground text-xs font-semibold">
                {product.badge}
              </Badge>
            )}
          </div>

          <h1 className="font-display font-extrabold text-2xl md:text-3xl text-foreground mb-3 leading-tight">
            {product.name}
          </h1>

          <div className="flex items-center gap-3 mb-4">
            <StarRating rating={avgRating} size="md" />
            <span className="font-semibold text-sm">
              {avgRating.toFixed(1)}
            </span>
            <span className="text-muted-foreground text-sm">
              ({reviews.length + product.reviewCount} reviews)
            </span>
          </div>

          <p className="text-3xl font-display font-extrabold text-foreground mb-6">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {product.description}
          </p>

          <Separator className="mb-6" />

          <div className="flex items-center gap-4 mb-6">
            <Label className="font-semibold text-sm">Quantity</Label>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="w-8 h-8"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                <Minus className="w-3 h-3" />
              </Button>
              <Input
                type="number"
                min={1}
                max={product.stock}
                value={quantity}
                onChange={(e) =>
                  setQuantity(
                    Math.max(
                      1,
                      Math.min(
                        product.stock,
                        Number.parseInt(e.target.value) || 1,
                      ),
                    ),
                  )
                }
                data-ocid="product.input"
                className="w-14 text-center font-bold"
              />
              <Button
                variant="outline"
                size="icon"
                className="w-8 h-8"
                onClick={() =>
                  setQuantity((q) => Math.min(product.stock, q + 1))
                }
              >
                <Plus className="w-3 h-3" />
              </Button>
            </div>
            <span className="text-xs text-muted-foreground">
              {product.stock} in stock
            </span>
          </div>

          <Button
            size="lg"
            onClick={handleAddToCart}
            data-ocid="product.add_button"
            className={`gap-2 font-bold text-base h-12 transition-all ${
              added
                ? "bg-green-600 hover:bg-green-600"
                : "bg-primary hover:bg-primary/90"
            }`}
          >
            {added ? (
              <>
                <Check className="w-5 h-5" /> Added to Cart!
              </>
            ) : (
              <>
                <ShoppingCart className="w-5 h-5" /> Add to Cart — $
                {(product.price * quantity).toFixed(2)}
              </>
            )}
          </Button>

          <div className="mt-4 flex flex-wrap gap-3 text-xs text-muted-foreground">
            <span>✓ Free shipping over $50</span>
            <span>✓ 30-day returns</span>
            <span>✓ Secure checkout</span>
          </div>
        </div>
      </div>

      <Separator className="mb-12" />

      <section>
        <h2 className="font-display font-bold text-2xl mb-6">
          Customer Reviews
        </h2>

        {reviews.length === 0 ? (
          <div className="text-center py-10 text-muted-foreground">
            <div className="text-4xl mb-3">💬</div>
            <p>No reviews yet. Be the first to review!</p>
          </div>
        ) : (
          <div className="grid gap-4 mb-10">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-card border border-border rounded-xl p-5"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-semibold text-sm">{review.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {review.date}
                    </p>
                  </div>
                  <StarRating rating={review.rating} size="sm" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {review.comment}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="bg-muted/50 rounded-2xl p-6 max-w-lg">
          <h3 className="font-display font-bold text-lg mb-4">
            Write a Review
          </h3>
          <form onSubmit={handleReviewSubmit} className="space-y-4">
            <div>
              <Label className="text-sm font-semibold mb-1.5 block">
                Your Name
              </Label>
              <Input
                placeholder="Jane Doe"
                value={reviewForm.name}
                onChange={(e) =>
                  setReviewForm((f) => ({ ...f, name: e.target.value }))
                }
                required
              />
            </div>
            <div>
              <Label className="text-sm font-semibold mb-1.5 block">
                Rating
              </Label>
              <StarRating
                rating={reviewForm.rating}
                interactive
                size="lg"
                onChange={(r) => setReviewForm((f) => ({ ...f, rating: r }))}
              />
            </div>
            <div>
              <Label className="text-sm font-semibold mb-1.5 block">
                Comment
              </Label>
              <Textarea
                placeholder="Share your experience with this product..."
                value={reviewForm.comment}
                onChange={(e) =>
                  setReviewForm((f) => ({ ...f, comment: e.target.value }))
                }
                rows={3}
                required
              />
            </div>
            <Button
              type="submit"
              data-ocid="review.submit_button"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
            >
              Submit Review
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
}
