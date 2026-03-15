export type Category =
  | "Fashion"
  | "Mobile Accessories"
  | "Fitness"
  | "Home Decor";

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  description: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  stock: number;
  badge?: string;
}

export interface Review {
  id: string;
  productId: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Oversized White Essential Tee",
    category: "Fashion",
    price: 22,
    description:
      "The perfect oversized white tee for any casual look. Ultra-soft 100% cotton fabric with a relaxed drop-shoulder silhouette. Pairs effortlessly with joggers, jeans, or shorts. A wardrobe essential for every style lover.",
    imageUrl: "/assets/generated/product-tshirt-white.dim_400x400.jpg",
    rating: 4.8,
    reviewCount: 142,
    stock: 50,
    badge: "Bestseller",
  },
  {
    id: "2",
    name: "Oversized Black Streetwear Tee",
    category: "Fashion",
    price: 22,
    description:
      "Effortlessly cool, this oversized black tee is the staple piece your wardrobe needs. Premium heavyweight cotton with a boxy fit that looks amazing tucked, tied, or worn loose.",
    imageUrl: "/assets/generated/product-tshirt-black.dim_400x400.jpg",
    rating: 4.7,
    reviewCount: 98,
    stock: 40,
  },
  {
    id: "3",
    name: "Graphic Drop-Shoulder Tee",
    category: "Fashion",
    price: 25,
    description:
      "Make a statement with this limited edition graphic tee featuring bold abstract artwork. Drop-shoulder cut with oversized fit. Garment-washed for that lived-in feel from day one.",
    imageUrl: "/assets/generated/product-tshirt-graphic.dim_400x400.jpg",
    rating: 4.6,
    reviewCount: 74,
    stock: 25,
    badge: "New",
  },
  {
    id: "13",
    name: "Lavender Oversized Hoodie",
    category: "Fashion",
    price: 38,
    description:
      "Cozy meets aesthetic in this pastel lavender oversized hoodie. Premium fleece lining, kangaroo pocket, and ribbed cuffs. The go-to piece for cozy fits and effortless street style.",
    imageUrl: "/assets/generated/product-hoodie-lavender.dim_400x400.jpg",
    rating: 4.9,
    reviewCount: 210,
    stock: 35,
    badge: "Trending",
  },
  {
    id: "14",
    name: "Wide-Leg Cargo Pants",
    category: "Fashion",
    price: 45,
    description:
      "The ultimate streetwear statement. These wide-leg cargo pants feature multiple utility pockets, an adjustable waistband, and a relaxed fit that works for any body type. Available in beige and black.",
    imageUrl: "/assets/generated/product-cargo-pants.dim_400x400.jpg",
    rating: 4.7,
    reviewCount: 163,
    stock: 28,
    badge: "Hot",
  },
  {
    id: "4",
    name: "Clear Slim Phone Case",
    category: "Mobile Accessories",
    price: 15,
    description:
      "Show off your phone with this crystal-clear slim case. Military-grade drop protection meets ultra-thin profile. Precise cutouts for all ports and buttons. Available for all major phone models.",
    imageUrl: "/assets/generated/product-phone-case.dim_400x400.jpg",
    rating: 4.5,
    reviewCount: 213,
    stock: 100,
  },
  {
    id: "5",
    name: "Magnetic Wireless Charger",
    category: "Mobile Accessories",
    price: 29,
    description:
      "15W fast wireless charging with strong magnetic alignment. Works perfectly with MagSafe-compatible cases. Sleek minimalist disc design in premium white. Charges through most cases.",
    imageUrl: "/assets/generated/product-charger.dim_400x400.jpg",
    rating: 4.7,
    reviewCount: 156,
    stock: 60,
    badge: "Hot",
  },
  {
    id: "6",
    name: "Holographic PopSocket Grip",
    category: "Mobile Accessories",
    price: 12,
    description:
      "Level up your phone grip with this holographic PopSocket. Swappable top, collapsible design, sticks and re-sticks without losing adhesion. Doubles as a stand for hands-free viewing.",
    imageUrl: "/assets/generated/product-popsocket.dim_400x400.jpg",
    rating: 4.4,
    reviewCount: 89,
    stock: 150,
  },
  {
    id: "15",
    name: "Holographic AirPods Case",
    category: "Mobile Accessories",
    price: 18,
    description:
      "Protect your AirPods Pro in style with this iridescent holographic case. Shockproof silicone construction with a satisfying snap-fit and carabiner hole. Turns heads every time you take them out.",
    imageUrl: "/assets/generated/product-airpods-case.dim_400x400.jpg",
    rating: 4.6,
    reviewCount: 134,
    stock: 80,
    badge: "New",
  },
  {
    id: "16",
    name: "Rose Gold Phone Ring Holder",
    category: "Mobile Accessories",
    price: 10,
    description:
      "Upgrade your phone grip with this sleek rose gold metallic ring holder. 360° rotation and 180° flip stand for hands-free viewing. Strong adhesive backing, compatible with all phone cases.",
    imageUrl: "/assets/generated/product-phone-ring.dim_400x400.jpg",
    rating: 4.5,
    reviewCount: 97,
    stock: 200,
  },
  {
    id: "7",
    name: "Smart Fitness Tracker Band",
    category: "Fitness",
    price: 35,
    description:
      "Track your health 24/7 with this advanced fitness band. Features heart rate monitoring, sleep tracking, step counter, and 7-day battery life. Water-resistant with a vivid AMOLED display.",
    imageUrl: "/assets/generated/product-fitness-band.dim_400x400.jpg",
    rating: 4.9,
    reviewCount: 301,
    stock: 30,
    badge: "Top Rated",
  },
  {
    id: "8",
    name: "Pro Resistance Bands Set",
    category: "Fitness",
    price: 20,
    description:
      "A complete set of 5 resistance bands in varying tensions — perfect for strength training, yoga, Pilates, and physio recovery. Made from natural latex with anti-snap technology.",
    imageUrl: "/assets/generated/product-resistance-bands.dim_400x400.jpg",
    rating: 4.6,
    reviewCount: 187,
    stock: 75,
  },
  {
    id: "9",
    name: "Premium Yoga Mat",
    category: "Fitness",
    price: 28,
    description:
      "6mm thick eco-friendly yoga mat with superior grip and cushioning. Non-slip surface keeps you stable through every pose. Includes carry strap. Perfect for home workouts, studio classes, or outdoor sessions.",
    imageUrl: "/assets/generated/product-yoga-mat.dim_400x400.jpg",
    rating: 4.7,
    reviewCount: 124,
    stock: 45,
  },
  {
    id: "17",
    name: "Adjustable Dumbbell Set",
    category: "Fitness",
    price: 55,
    description:
      "Chrome and rubber adjustable dumbbells for home gym gains. Secure locking mechanism, anti-roll hex design. Perfect for strength, toning, and HIIT workouts. Sold as a pair.",
    imageUrl: "/assets/generated/product-dumbbell-set.dim_400x400.jpg",
    rating: 4.8,
    reviewCount: 88,
    stock: 22,
    badge: "New",
  },
  {
    id: "18",
    name: "Speed Jump Rope",
    category: "Fitness",
    price: 16,
    description:
      "Level up your cardio with this professional-grade speed jump rope. Wooden handles, ball-bearing swivel, and adjustable cable length. Perfect for boxing training, HIIT, and daily cardio sessions.",
    imageUrl: "/assets/generated/product-jump-rope.dim_400x400.jpg",
    rating: 4.5,
    reviewCount: 112,
    stock: 90,
  },
  {
    id: "10",
    name: "RGB LED Strip Lights 5M",
    category: "Home Decor",
    price: 24,
    description:
      "Transform your room with 5 meters of vibrant RGB LED strips. 16 million colors, music sync mode, and app control via Bluetooth. Easy peel-and-stick installation. Create the ultimate aesthetic setup.",
    imageUrl: "/assets/generated/product-led-strip.dim_400x400.jpg",
    rating: 4.8,
    reviewCount: 445,
    stock: 80,
    badge: "Bestseller",
  },
  {
    id: "11",
    name: "Aesthetic Neon Sign",
    category: "Home Decor",
    price: 42,
    description:
      "Add a vibrant glow to your room with this custom-style neon sign. Energy-efficient LED neon flex design with a remote control for brightness adjustment. Perfect for bedroom aesthetics and content creation backdrops.",
    imageUrl: "/assets/generated/product-neon-sign.dim_400x400.jpg",
    rating: 4.5,
    reviewCount: 203,
    stock: 35,
    badge: "Trending",
  },
  {
    id: "12",
    name: "Galaxy Projector Lamp",
    category: "Home Decor",
    price: 32,
    description:
      "Turn your ceiling into a galaxy with this rotating star projector lamp. 14 lighting modes, adjustable brightness, and 360° rotation. Built-in Bluetooth speaker for the ultimate chill ambiance. Perfect bedside companion.",
    imageUrl: "/assets/generated/product-galaxy-lamp.dim_400x400.jpg",
    rating: 4.9,
    reviewCount: 378,
    stock: 20,
    badge: "New",
  },
  {
    id: "19",
    name: "Fairy Lights String 3M",
    category: "Home Decor",
    price: 14,
    description:
      "Wrap your room in warm golden magic with these 3-meter fairy lights. USB-powered with 8 lighting modes, timer function, and flexible copper wire that bends into any shape. Instantly makes any space feel dreamy.",
    imageUrl: "/assets/generated/product-fairy-lights.dim_400x400.jpg",
    rating: 4.7,
    reviewCount: 289,
    stock: 120,
  },
  {
    id: "20",
    name: "Electric Blue Lava Lamp",
    category: "Home Decor",
    price: 36,
    description:
      "Retro vibes meet modern aesthetics in this electric blue lava lamp. Watch the mesmerizing wax blobs float up and down as the lamp heats up. Creates the perfect ambient glow for your room. A true conversation starter.",
    imageUrl: "/assets/generated/product-lava-lamp.dim_400x400.jpg",
    rating: 4.6,
    reviewCount: 156,
    stock: 18,
    badge: "Trending",
  },
];

export const sampleReviews: Review[] = [
  {
    id: "r1",
    productId: "1",
    name: "Aisha K.",
    rating: 5,
    comment:
      "Obsessed with this tee! The fabric is so soft and the oversized fit is exactly what I wanted. Already ordered 3 more colors!",
    date: "2026-02-15",
  },
  {
    id: "r2",
    productId: "1",
    name: "Jordan M.",
    rating: 5,
    comment:
      "Perfect for streetwear looks. Ships fast and quality is way better than expected for the price.",
    date: "2026-02-10",
  },
  {
    id: "r3",
    productId: "1",
    name: "Priya S.",
    rating: 4,
    comment:
      "Love the fit and feel. Runs a little large but that's kind of the point lol. Great staple piece!",
    date: "2026-01-28",
  },
  {
    id: "r4",
    productId: "7",
    name: "Tyler R.",
    rating: 5,
    comment:
      "This fitness band is incredible for the price. The heart rate tracking is super accurate and battery lasts all week.",
    date: "2026-02-20",
  },
  {
    id: "r5",
    productId: "7",
    name: "Mei L.",
    rating: 5,
    comment:
      "Got it for step tracking and sleep monitoring — it does both brilliantly. The display is crisp and bright.",
    date: "2026-02-12",
  },
  {
    id: "r6",
    productId: "7",
    name: "Kai B.",
    rating: 4,
    comment:
      "Great band overall! The sleep tracking feature is surprisingly detailed. Took off one star because the app could use some work.",
    date: "2026-01-30",
  },
  {
    id: "r7",
    productId: "10",
    name: "Zara F.",
    rating: 5,
    comment:
      "My room looks completely different! The music sync feature is so cool for parties. Super easy to install too.",
    date: "2026-02-18",
  },
  {
    id: "r8",
    productId: "10",
    name: "Marcus T.",
    rating: 5,
    comment:
      "Best purchase I've made for my gaming setup. Colors are vibrant and the app is intuitive. 10/10",
    date: "2026-02-05",
  },
  {
    id: "r9",
    productId: "10",
    name: "Sophie N.",
    rating: 4,
    comment:
      "Absolutely love these lights! Adhesive could be stronger but overall great product. Makes my room aesthetic AF.",
    date: "2026-01-22",
  },
];

export const categories: {
  name: Category;
  icon: string;
  description: string;
  color: string;
}[] = [
  {
    name: "Fashion",
    icon: "👕",
    description: "Streetwear & trendy apparel",
    color: "from-violet-600 to-purple-800",
  },
  {
    name: "Mobile Accessories",
    icon: "📱",
    description: "Cases, chargers & more",
    color: "from-orange-500 to-red-700",
  },
  {
    name: "Fitness",
    icon: "💪",
    description: "Gear for your active lifestyle",
    color: "from-green-600 to-emerald-800",
  },
  {
    name: "Home Decor",
    icon: "✨",
    description: "Aesthetic room essentials",
    color: "from-pink-600 to-rose-800",
  },
];
