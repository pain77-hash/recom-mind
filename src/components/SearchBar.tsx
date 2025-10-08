import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  onFilterToggle: () => void;
}

export const SearchBar = ({ onSearch, onFilterToggle }: SearchBarProps) => {
  const [activeFilters, setActiveFilters] = useState<string[]>(["All Products"]);

  const quickFilters = [
    "All Products",
    "Electronics",
    "Fashion",
    "Home & Garden",
    "Sports",
    "Books",
  ];

  const handleFilterClick = (filter: string) => {
    setActiveFilters([filter]);
  };

  return (
    <div className="space-y-4">
      {/* Search Input */}
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search your next favorite item…"
            className="pl-10 h-12 bg-card border-border rounded-xl shadow-sm focus-visible:shadow-md transition-shadow"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        <Button
          variant="outline"
          size="icon"
          className="h-12 w-12 rounded-xl"
          onClick={onFilterToggle}
        >
          <SlidersHorizontal className="w-5 h-5" />
        </Button>
      </div>

      {/* Quick Filters */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {quickFilters.map((filter, index) => (
          <motion.div
            key={filter}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Badge
              variant={activeFilters.includes(filter) ? "default" : "secondary"}
              className={`cursor-pointer whitespace-nowrap px-4 py-2 transition-all ${
                activeFilters.includes(filter)
                  ? "shadow-md hover:shadow-lg"
                  : "hover:bg-muted"
              }`}
              onClick={() => handleFilterClick(filter)}
            >
              {filter}
            </Badge>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
