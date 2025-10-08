import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ExplanationModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: number;
    name: string;
    image: string;
    price: number;
  } | null;
}

export const ExplanationModal = ({ isOpen, onClose, product }: ExplanationModalProps) => {
  const [isRegenerating, setIsRegenerating] = useState(false);
  const [explanation, setExplanation] = useState(
    "We recommended this because you often browse minimalist tech accessories and prefer products with excellent reviews. This item matches your style preferences and has a 4.8-star rating from verified buyers. Plus, it's currently on sale!"
  );

  const handleRegenerate = () => {
    setIsRegenerating(true);
    setTimeout(() => {
      const explanations = [
        "Based on your recent searches for premium electronics and your interest in sustainable products, this item stood out. It features eco-friendly materials and has won several design awards.",
        "Your purchase history shows a preference for high-quality, minimalist designs. This product aligns perfectly with those preferences and comes from a brand you've favorited.",
        "We noticed you've been looking at similar products in this category. This one has the best value-for-money ratio and includes features you've previously shown interest in.",
      ];
      setExplanation(explanations[Math.floor(Math.random() * explanations.length)]);
      setIsRegenerating(false);
    }, 1500);
  };

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-card rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden pointer-events-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold">AI Explanation</h2>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="rounded-full"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Product Preview */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold line-clamp-1">{product.name}</h3>
                    <p className="text-lg font-bold text-primary">${product.price}</p>
                  </div>
                </div>

                {/* Explanation */}
                <div className="space-y-3">
                  <h4 className="font-medium text-sm text-muted-foreground">
                    Why we recommend this:
                  </h4>
                  <AnimatePresence mode="wait">
                    {isRegenerating ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="p-4 rounded-xl bg-gradient-to-r from-muted to-muted/50 animate-shimmer bg-[length:200%_100%]"
                        style={{
                          backgroundImage: "linear-gradient(90deg, hsl(var(--muted)) 0%, hsl(var(--muted)/.5) 50%, hsl(var(--muted)) 100%)",
                        }}
                      >
                        <div className="h-4 bg-muted-foreground/20 rounded mb-2" />
                        <div className="h-4 bg-muted-foreground/20 rounded w-3/4" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="explanation"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-4 rounded-xl bg-muted/30 border border-border"
                      >
                        <p className="text-sm leading-relaxed">{explanation}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Action */}
                <Button
                  variant="outline"
                  className="w-full gap-2"
                  onClick={handleRegenerate}
                  disabled={isRegenerating}
                >
                  <RefreshCw className={`w-4 h-4 ${isRegenerating ? 'animate-spin' : ''}`} />
                  Regenerate Explanation
                </Button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
