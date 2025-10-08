import { Home, Sparkles, Clock, Settings, User } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/dashboard", icon: Home },
  { name: "My Recommendations", href: "/dashboard", icon: Sparkles },
  { name: "History", href: "/dashboard", icon: Clock },
  { name: "Analytics", href: "/analytics", icon: Sparkles },
  { name: "Settings", href: "/dashboard", icon: Settings },
];

export const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-card border-r border-border flex flex-col">
      {/* User Profile */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12 border-2 border-primary/20">
            <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
              JD
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">John Doe</h3>
            <p className="text-sm text-muted-foreground">Premium Member</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                "hover:bg-muted/50",
                isActive
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-foreground/80"
              )
            }
          >
            <item.icon className="w-5 h-5" />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Preferences Summary */}
      <div className="p-6 border-t border-border">
        <div className="p-4 rounded-lg bg-muted/50 space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <User className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">Your preferences:</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {["Tech", "Minimalist", "Eco-friendly"].map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
