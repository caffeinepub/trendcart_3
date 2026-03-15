import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/CartContext";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";

export function CartPage() {
  const { cartItems, cartTotal, cartCount, removeFromCart, updateQuantity } =
    useCart();
  const shipping = cartTotal >= 50 ? 0 : 4.99;
  const total = cartTotal + shipping;

  if (cartCount === 0) {
    return (
      <main className="container mx-auto px-4 py-20">
        <div data-ocid="cart.empty_state" className="text-center">
          <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
            <ShoppingCart className="w-10 h-10 text-muted-foreground" />
          </div>
          <h2 className="font-display font-bold text-2xl mb-3">
            Your cart is empty
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xs mx-auto">
            Looks like you haven't added anything yet. Let's fix that!
          </p>
          <Link to="/products" search={{ category: undefined }}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 font-bold"
            >
              Start Shopping <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="font-display font-extrabold text-3xl mb-8">
        Your Cart{" "}
        <span className="text-muted-foreground font-normal text-xl">
          ({cartCount} items)
        </span>
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item, index) => (
            <div
              key={item.product.id}
              data-ocid={`cart.item.${index + 1}`}
              className="flex gap-4 bg-card border border-border rounded-xl p-4"
            >
              <Link
                to="/products/$productId"
                params={{ productId: item.product.id }}
              >
                <img
                  src={item.product.imageUrl}
                  alt={item.product.name}
                  className="w-24 h-24 object-cover rounded-lg bg-muted shrink-0"
                />
              </Link>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                      {item.product.category}
                    </p>
                    <Link
                      to="/products/$productId"
                      params={{ productId: item.product.id }}
                    >
                      <h3 className="font-semibold text-sm hover:text-primary transition-colors leading-snug">
                        {item.product.name}
                      </h3>
                    </Link>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-7 h-7 text-muted-foreground hover:text-destructive shrink-0"
                    onClick={() => removeFromCart(item.product.id)}
                    data-ocid={`cart.delete_button.${index + 1}`}
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </Button>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-1 border border-border rounded-lg">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-7 h-7"
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity - 1)
                      }
                    >
                      <Minus className="w-3 h-3" />
                    </Button>
                    <span className="w-8 text-center text-sm font-bold">
                      {item.quantity}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-7 h-7"
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity + 1)
                      }
                    >
                      <Plus className="w-3 h-3" />
                    </Button>
                  </div>
                  <p className="font-display font-bold text-base">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-card border border-border rounded-2xl p-6 sticky top-24">
            <h2 className="font-display font-bold text-lg mb-4">
              Order Summary
            </h2>
            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">
                  Subtotal ({cartCount} items)
                </span>
                <span className="font-semibold">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span
                  className={`font-semibold ${shipping === 0 ? "text-green-600" : ""}`}
                >
                  {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              {shipping > 0 && (
                <p className="text-xs text-muted-foreground bg-muted/50 rounded-lg p-2">
                  Add ${(50 - cartTotal).toFixed(2)} more for free shipping!
                </p>
              )}
            </div>
            <Separator className="mb-4" />
            <div className="flex justify-between mb-6">
              <span className="font-display font-bold text-lg">Total</span>
              <span className="font-display font-bold text-xl text-primary">
                ${total.toFixed(2)}
              </span>
            </div>
            <Link to="/checkout">
              <Button
                size="lg"
                data-ocid="cart.primary_button"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold gap-2"
              >
                Proceed to Checkout <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/products" search={{ category: undefined }}>
              <Button
                variant="ghost"
                className="w-full mt-2 text-muted-foreground hover:text-foreground text-sm"
              >
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
