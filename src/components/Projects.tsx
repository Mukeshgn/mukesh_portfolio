import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: "shopping-analysis",
    title: "Shopping Analysis of a Customer",
    description: "A complete end-to-end analytics workflow using Python, SQL, and Power BI that analyzes a retail shopping dataset to reveal customer preferences, spending patterns, and product performance. Includes segmentation, discount effectiveness, and shipping behavior analysis.",
    tech: "Python · PostgreSQL · Power BI · Excel",
    previewUrl: "https://drive.google.com/file/d/1heZQxfRLMbEW5OkJomOd1pWcWawt4EZ8/preview",
    fallbackUrl: "https://drive.google.com/file/d/1heZQxfRLMbEW5OkJomOd1pWcWawt4EZ8/view?usp=drive_link"
  },
  {
    id: "company-sales-analysis",
    title: "Company Sales Analysis",
    description: "An end-to-end sales analytics project that analyzes regional sales performance to identify revenue drivers, product trends, and profitability patterns. Combines Python EDA with an interactive Power BI dashboard and executive reports for business decision support.",
    tech: "Python · Pandas · Power BI · Excel",
    previewUrl: "https://drive.google.com/file/d/1944dQefKe_zh98ThxvoegobmZFT4eD-3/preview",
    fallbackUrl: "https://drive.google.com/file/d/1944dQefKe_zh98ThxvoegobmZFT4eD-3/view?usp=drive_link"
  },
  {
    id: "food-delivery-sql",
    title: "Food Delivery Data Analysis (SQL Project)",
    description: "A SQL-based analytics project examining customer behavior, restaurant performance, delivery trends, and operational KPIs using a PostgreSQL database. Includes ERD, SQL insights, business KPI analysis, and supporting reports.",
    tech: "PostgreSQL · SQL · Power BI · Excel",
    previewUrl: "https://drive.google.com/file/d/1bm9mYc3Xm5IcVsANrXyuU_pjg-Bmu3We/preview",
    fallbackUrl: "https://drive.google.com/file/d/1bm9mYc3Xm5IcVsANrXyuU_pjg-Bmu3We/view?usp=drive_link"
  },
  {
    id: "cricket-insights",
    title: "Cricket Performance Insights",
    description: "A complete cricket analytics project combining Python-based performance analysis with Power BI dashboards to evaluate batting, bowling, match trends, and identify a dynamic Best Playing XI.",
    tech: "Python · Pandas · Power BI · Excel",
    previewUrl: "https://drive.google.com/file/d/1OSqsXxjFyVKpJQWAlG8YARJrKiWu7NVw/preview",
    fallbackUrl: "https://drive.google.com/file/d/1OSqsXxjFyVKpJQWAlG8YARJrKiWu7NVw/view?usp=drive_link"
  }
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            My Data Work
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-gradient-card backdrop-blur-sm rounded-xl border border-border shadow-card hover:shadow-hover transition-all duration-500 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid md:grid-cols-2 gap-6 p-6">
                {/* Left: Text Content */}
                <div className="flex flex-col justify-center space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.split(' · ').map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div>
                    <Button
                      size="lg"
                      className="bg-gradient-primary hover:shadow-hover transition-all duration-300 transform hover:scale-105"
                      onClick={() => navigate(`/project/${project.id}`)}
                    >
                      ➡️ View Project (VIDEO / PPT / REPORT)
                    </Button>
                  </div>
                </div>

                {/* Right: Visual Preview */}
                <div className="relative aspect-video rounded-lg overflow-hidden bg-muted/20 border border-border">
                  <iframe
                    src={project.previewUrl}
                    className="w-full h-full"
                    loading="lazy"
                    title={`${project.title} preview`}
                    allow="autoplay"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;