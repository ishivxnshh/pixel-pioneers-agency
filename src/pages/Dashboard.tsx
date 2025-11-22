import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Sparkles,
  FileText,
  DollarSign,
  MessageSquare,
  LogOut,
  Home,
  CheckCircle2,
  Clock,
  Rocket,
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [userName] = useState("John"); // Mock user data

  const handleLogout = () => {
    navigate("/auth");
  };

  const projects = [
    {
      name: "E-Commerce Platform Redesign",
      status: "Development",
      progress: 65,
      dueDate: "Dec 28, 2025",
      statusColor: "primary",
    },
    {
      name: "Mobile App MVP",
      status: "Design",
      progress: 40,
      dueDate: "Jan 15, 2026",
      statusColor: "accent",
    },
    {
      name: "AI Chatbot Integration",
      status: "Discovery",
      progress: 15,
      dueDate: "Feb 1, 2026",
      statusColor: "muted",
    },
    {
      name: "Brand Identity Package",
      status: "Live",
      progress: 100,
      dueDate: "Nov 20, 2025",
      statusColor: "accent",
    },
  ];

  const proposals = [
    {
      title: "Q1 2026 Marketing Strategy",
      date: "Nov 15, 2025",
      amount: "$12,500",
      status: "Pending Review",
    },
    {
      title: "Website Maintenance - Annual",
      date: "Nov 1, 2025",
      amount: "$8,000",
      status: "Accepted",
    },
  ];

  const updates = [
    {
      project: "E-Commerce Platform",
      message: "Homepage design approved, moving to development phase",
      date: "2 hours ago",
    },
    {
      project: "Mobile App MVP",
      message: "Wireframes ready for review in client portal",
      date: "1 day ago",
    },
    {
      project: "AI Chatbot",
      message: "Initial discovery call scheduled for Nov 25",
      date: "3 days ago",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="glass-strong border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="font-display text-xl font-bold gradient-text">
                Inventinity
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
                <Home className="mr-2 h-4 w-4" />
                Home
              </Button>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="font-display text-4xl font-bold mb-2">
            Welcome back, <span className="gradient-text">{userName}</span>!
          </h1>
          <p className="text-muted-foreground">
            Here's what's happening with your projects
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Active Projects", value: "4", icon: Rocket, color: "primary" },
            { label: "Pending Proposals", value: "1", icon: FileText, color: "accent" },
            { label: "Total Invoices", value: "2", icon: DollarSign, color: "primary" },
            { label: "Unread Messages", value: "3", icon: MessageSquare, color: "accent" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass hover-glow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {stat.label}
                      </p>
                      <p className="text-3xl font-bold font-display">
                        {stat.value}
                      </p>
                    </div>
                    <div
                      className={`w-12 h-12 rounded-xl ${
                        stat.color === "accent" ? "bg-accent/20" : "bg-primary/20"
                      } flex items-center justify-center`}
                    >
                      <stat.icon
                        className={`w-6 h-6 ${
                          stat.color === "accent" ? "text-accent" : "text-primary"
                        }`}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Main Dashboard Tabs */}
        <Tabs defaultValue="projects" className="space-y-6">
          <TabsList className="glass">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="proposals">Proposals & Invoices</TabsTrigger>
            <TabsTrigger value="updates">Updates</TabsTrigger>
          </TabsList>

          {/* Projects Tab */}
          <TabsContent value="projects">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="glass-strong hover-glow h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl mb-2">
                            {project.name}
                          </CardTitle>
                          <CardDescription>Due: {project.dueDate}</CardDescription>
                        </div>
                        <Badge
                          className={
                            project.status === "Live"
                              ? "bg-accent/20 text-accent border-accent/30"
                              : project.status === "Development"
                              ? "bg-primary/20 text-primary border-primary/30"
                              : "bg-muted/50 text-muted-foreground border-muted"
                          }
                        >
                          {project.status === "Live" && (
                            <CheckCircle2 className="w-3 h-3 mr-1" />
                          )}
                          {project.status === "Development" && (
                            <Rocket className="w-3 h-3 mr-1" />
                          )}
                          {project.status === "Discovery" && (
                            <Clock className="w-3 h-3 mr-1" />
                          )}
                          {project.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-semibold">{project.progress}%</span>
                        </div>
                        <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${project.progress}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-full bg-gradient-primary"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Proposals & Invoices Tab */}
          <TabsContent value="proposals">
            <div className="space-y-4">
              {proposals.map((proposal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="glass-strong hover-glow">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="font-display font-semibold text-lg mb-1">
                            {proposal.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {proposal.date}
                          </p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="text-2xl font-bold font-display">
                              {proposal.amount}
                            </p>
                            <Badge
                              variant="outline"
                              className={
                                proposal.status === "Accepted"
                                  ? "border-accent/30 text-accent"
                                  : "border-primary/30 text-primary"
                              }
                            >
                              {proposal.status}
                            </Badge>
                          </div>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Updates Tab */}
          <TabsContent value="updates">
            <Card className="glass-strong">
              <CardHeader>
                <CardTitle>Recent Updates</CardTitle>
                <CardDescription>
                  Stay up to date with your project progress
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {updates.map((update, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4 pb-6 border-b border-border last:border-0 last:pb-0"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-1">
                          <h4 className="font-semibold">{update.project}</h4>
                          <span className="text-xs text-muted-foreground">
                            {update.date}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {update.message}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
