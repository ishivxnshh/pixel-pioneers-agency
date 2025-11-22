import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Github, Mail } from "lucide-react";

const Auth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication - in production, integrate with your auth system
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen w-full flex">
      {/* Left side - Brand */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="hidden lg:flex lg:w-1/2 bg-gradient-mesh relative overflow-hidden items-center justify-center p-12"
      >
        <div className="absolute inset-0 bg-gradient-spotlight opacity-50"></div>
        
        <div className="relative z-10 max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="font-display text-6xl font-bold mb-6">
              <span className="gradient-text">Inventinity</span>
            </h1>
            <p className="text-2xl font-display mb-8 text-foreground/90">
              Full-Stack Digital Agency
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We build stunning websites, powerful mobile apps, and cutting-edge AI solutions. 
              From creative design to performance marketing, we handle everything from idea to launch.
            </p>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">AI-First Mindset</p>
                  <p className="text-sm text-muted-foreground">Cutting-edge AI integration</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold">End-to-End Execution</p>
                  <p className="text-sm text-muted-foreground">From concept to deployment</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right side - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="w-full max-w-md"
        >
          <Card className="glass-strong border-primary/20">
            <CardHeader className="space-y-1">
              <CardTitle className="text-3xl font-display">
                {isLogin ? "Welcome back" : "Create account"}
              </CardTitle>
              <CardDescription>
                {isLogin 
                  ? "Sign in to access your dashboard" 
                  : "Sign up to get started with Inventinity"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Social login buttons */}
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
                <Button variant="outline" className="w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  Google
                </Button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>

              {/* Email/Password form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-secondary/50 border-primary/20"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-secondary/50 border-primary/20"
                  />
                </div>

                {isLogin && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <input
                        id="remember"
                        type="checkbox"
                        className="rounded border-primary/20"
                      />
                      <label
                        htmlFor="remember"
                        className="text-sm text-muted-foreground cursor-pointer"
                      >
                        Remember me
                      </label>
                    </div>
                    <Button variant="link" className="px-0 text-sm">
                      Forgot password?
                    </Button>
                  </div>
                )}

                <Button type="submit" variant="hero" className="w-full" size="lg">
                  {isLogin ? "Sign In" : "Create Account"}
                </Button>
              </form>

              <div className="text-center text-sm">
                <span className="text-muted-foreground">
                  {isLogin ? "Don't have an account? " : "Already have an account? "}
                </span>
                <Button
                  variant="link"
                  className="px-0"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? "Sign up" : "Sign in"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Auth;
