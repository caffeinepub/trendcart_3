import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/CartContext";
import { Link } from "@tanstack/react-router";
import { CheckCircle2, CreditCard, Lock, Package } from "lucide-react";
import { useState } from "react";

export function CheckoutPage() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const shipping = cartTotal >= 50 ? 0 : 4.99;
  const total = cartTotal + shipping;

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const num = `TC-${Date.now().toString().slice(-6)}`;
    setOrderNumber(num);
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <main className="container mx-auto px-4 py-20">
        <div
          data-ocid="checkout.success_state"
          className="max-w-md mx-auto text-center"
        >
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="font-display font-extrabold text-3xl mb-2">
            Order Placed! 🎉
          </h1>
          <p className="text-muted-foreground mb-2">
            Your order has been confirmed.
          </p>
          <p className="font-bold text-lg text-primary mb-6">
            Order #{orderNumber}
          </p>
          <div className="bg-muted/50 rounded-xl p-4 mb-8 text-sm text-muted-foreground">
            <Package className="w-5 h-5 mx-auto mb-2 text-primary" />
            <p>
              You'll receive a confirmation email shortly. Estimated delivery:{" "}
              <strong>2-3 business days</strong>.
            </p>
          </div>
          <Link to="/products" search={{ category: undefined }}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold gap-2"
            >
              Continue Shopping
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  if (cartItems.length === 0) {
    return (
      <main className="container mx-auto px-4 py-20 text-center">
        <h2 className="font-display font-bold text-2xl mb-4">
          Your cart is empty
        </h2>
        <Link to="/products" search={{ category: undefined }}>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
            Shop Now
          </Button>
        </Link>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="font-display font-extrabold text-3xl mb-8">Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="font-display font-bold text-lg mb-4">
                Shipping Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <Label className="text-sm font-semibold mb-1.5 block">
                    Full Name
                  </Label>
                  <Input
                    name="name"
                    placeholder="Alex Johnson"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <Label className="text-sm font-semibold mb-1.5 block">
                    Email Address
                  </Label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="alex@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <Label className="text-sm font-semibold mb-1.5 block">
                    Address
                  </Label>
                  <Input
                    name="address"
                    placeholder="123 Main Street, Apt 4B"
                    value={form.address}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label className="text-sm font-semibold mb-1.5 block">
                    City
                  </Label>
                  <Input
                    name="city"
                    placeholder="New York"
                    value={form.city}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label className="text-sm font-semibold mb-1.5 block">
                    ZIP Code
                  </Label>
                  <Input
                    name="zip"
                    placeholder="10001"
                    value={form.zip}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <CreditCard className="w-5 h-5 text-primary" />
                <h2 className="font-display font-bold text-lg">
                  Payment Details
                </h2>
                <Lock className="w-4 h-4 text-green-600 ml-auto" />
                <span className="text-xs text-green-600 font-semibold">
                  Secure
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <Label className="text-sm font-semibold mb-1.5 block">
                    Card Number
                  </Label>
                  <Input
                    name="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={form.cardNumber}
                    onChange={handleChange}
                    maxLength={19}
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <Label className="text-sm font-semibold mb-1.5 block">
                    Cardholder Name
                  </Label>
                  <Input
                    name="cardName"
                    placeholder="Alex Johnson"
                    value={form.cardName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label className="text-sm font-semibold mb-1.5 block">
                    Expiry Date
                  </Label>
                  <Input
                    name="expiry"
                    placeholder="MM/YY"
                    value={form.expiry}
                    onChange={handleChange}
                    maxLength={5}
                    required
                  />
                </div>
                <div>
                  <Label className="text-sm font-semibold mb-1.5 block">
                    CVV
                  </Label>
                  <Input
                    name="cvv"
                    placeholder="123"
                    value={form.cvv}
                    onChange={handleChange}
                    maxLength={4}
                    type="password"
                    required
                  />
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {["VISA", "MC", "AMEX", "PayPal"].map((method) => (
                  <span
                    key={method}
                    className="px-3 py-1 bg-muted rounded-md text-xs font-bold text-muted-foreground border border-border"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-2xl p-6 sticky top-24">
              <h2 className="font-display font-bold text-lg mb-4">
                Order Summary
              </h2>
              <div className="space-y-3 mb-4">
                {cartItems.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-3 items-center"
                  >
                    <img
                      src={item.product.imageUrl}
                      alt={item.product.name}
                      className="w-12 h-12 object-cover rounded-lg bg-muted"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold truncate">
                        {item.product.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <p className="text-sm font-bold">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
              <Separator className="mb-4" />
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span
                    className={`font-semibold ${shipping === 0 ? "text-green-600" : ""}`}
                  >
                    {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
              </div>
              <Separator className="mb-4" />
              <div className="flex justify-between mb-6">
                <span className="font-display font-bold text-lg">Total</span>
                <span className="font-display font-bold text-xl text-primary">
                  ${total.toFixed(2)}
                </span>
              </div>
              <Button
                type="submit"
                size="lg"
                data-ocid="checkout.submit_button"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold gap-2"
              >
                <Lock className="w-4 h-4" /> Place Order
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-3">
                By placing your order, you agree to our Terms of Service and
                Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}
