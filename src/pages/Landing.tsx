import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, TrendingUp, Brain, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import heroBg from "@/assets/hero-bg.jpg";

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: "AI-Powered",
      description: "Smart recommendations based on your preferences",
    },
    {
      icon: Sparkles,
      title: "Personalized",
      description: "Every suggestion tailored just for you",
    },
    {
      icon: TrendingUp,
      title: "Trending",
      description: "Discover what's popular and loved",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <ParticlesBackground />
      
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-4">
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20"
              whileHover={{ scale: 1.05 }}
            >
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">Powered by Advanced AI</span>
            </motion.div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              Discover what
              <br />
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                you'll love
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Experience personalized product recommendations powered by AI. 
              Find exactly what you need with intelligent explanations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              variant="hero"
              onClick={() => navigate("/dashboard")}
              className="text-lg px-8 py-6 h-auto"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Explore Recommendations
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/analytics")}
              className="text-lg px-8 py-6 h-auto"
            >
              View Analytics
            </Button>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="glass-card p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
