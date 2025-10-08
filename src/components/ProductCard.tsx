import { motion } from "framer-motion";
import { Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    rating: number;
    image: string;
    category: string;
    tags: string[];
  };
  onExplainClick: (product: any) => void;
}

export const ProductCard = ({ product, onExplainClick }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group relative bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="p-5 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <Badge variant="secondary" className="mb-2">
              {product.category}
            </Badge>
            <h3 className="font-semibold text-lg line-clamp-2">{product.name}</h3>
          </div>
        </div>

        <div className="flex items-center gap-1 text-sm">
          <Star className="w-4 h-4 fill-accent text-accent" />
          <span className="font-medium">{product.rating.toFixed(1)}</span>
          <span className="text-muted-foreground ml-1">(128 reviews)</span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-border">
          <span className="text-2xl font-bold text-primary">${product.price}</span>
          <Button
            size="sm"
            variant="outline"
            onClick={() => onExplainClick(product)}
            className="gap-1.5 group/btn"
          >
            <Sparkles className="w-3.5 h-3.5 group-hover/btn:text-primary transition-colors" />
            Why?
          </Button>
        </div>
      </div>

      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="bg-primary/10 backdrop-blur-sm rounded-full p-2">
          <Sparkles className="w-4 h-4 text-primary" />
        </div>
      </div>
    </motion.div>
  );
};
