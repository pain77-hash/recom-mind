import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { SearchBar } from "@/components/SearchBar";
import { ProductCard } from "@/components/ProductCard";
import { ExplanationModal } from "@/components/ExplanationModal";
import { motion } from "framer-motion";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

const mockProducts = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299,
    rating: 4.8,
    image: product1,
    category: "Electronics",
    tags: ["Audio", "Wireless", "Premium"],
  },
  {
    id: 2,
    name: "Minimalist Running Shoes",
    price: 159,
    rating: 4.6,
    image: product2,
    category: "Fashion",
    tags: ["Sports", "Eco-friendly", "Minimalist"],
  },
  {
    id: 3,
    name: "Smart Fitness Watch",
    price: 399,
    rating: 4.9,
    image: product3,
    category: "Electronics",
    tags: ["Fitness", "Smart", "Health"],
  },
  {
    id: 4,
    name: "Ultra-Thin Laptop",
    price: 1299,
    rating: 4.7,
    image: product4,
    category: "Electronics",
    tags: ["Computing", "Portable", "Premium"],
  },
  {
    id: 5,
    name: "Modern Travel Backpack",
    price: 89,
    rating: 4.5,
    image: product5,
    category: "Accessories",
    tags: ["Travel", "Durable", "Minimalist"],
  },
  {
    id: 6,
    name: "Professional Camera Kit",
    price: 1899,
    rating: 4.9,
    image: product6,
    category: "Electronics",
    tags: ["Photography", "Professional", "Premium"],
  },
];

const Dashboard = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof mockProducts[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleExplainClick = (product: typeof mockProducts[0]) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const filteredProducts = mockProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <div className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto p-8 space-y-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-2"
          >
            <h1 className="text-4xl font-bold">Your Recommendations</h1>
            <p className="text-muted-foreground text-lg">
              Curated just for you with AI-powered insights
            </p>
          </motion.div>

          {/* Search Bar */}
          <SearchBar
            onSearch={setSearchQuery}
            onFilterToggle={() => {}}
          />

          {/* Products Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard
                  product={product}
                  onExplainClick={handleExplainClick}
                />
              </motion.div>
            ))}
          </motion.div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                No products found matching your search.
              </p>
            </div>
          )}
        </div>
      </div>

      <ExplanationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
      />
    </div>
  );
};

export default Dashboard;
