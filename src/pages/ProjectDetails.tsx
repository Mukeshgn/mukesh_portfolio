import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, Play, FileText, Presentation, Download, ExternalLink } from "lucide-react";

const projectsData = {
  "shopping-analysis": {
    title: "Shopping Analysis of a Customer",
    about: "A complete end-to-end analytics workflow using Python, SQL, Excel, and Power BI. This project analyzes a retail shopping dataset to uncover insights related to customer behavior, revenue trends, discount impact, shipping preferences, and customer segmentation. Work included data cleaning and feature engineering in Python, analytical queries in PostgreSQL, and interactive dashboard storytelling in Power BI. Deliverables: dashboards, a written report, and a demo video.",
    github: "https://github.com/Mukeshgn/shopping-analysis/tree/main",
    technologies: ["Python", "PostgreSQL (SQL)", "Power BI", "Excel", "Pandas", "Data Visualization"],
    video: {
      embed: "https://www.youtube.com/embed/LymKShIJWho",
      fallback: "https://youtu.be/LymKShIJWho"
    },
    ppt: {
      embed: "https://docs.google.com/presentation/d/1RmdMpfw84WRFj7Ofo3Nq6k5g5_287RY3/embed?start=false&loop=false&delayms=3000",
      fallback: "https://docs.google.com/presentation/d/1RmdMpfw84WRFj7Ofo3Nq6k5g5_287RY3/view",
      download: "https://drive.google.com/uc?export=download&id=1RmdMpfw84WRFj7Ofo3Nq6k5g5_287RY3"
    },
    report: {
      embed: "https://drive.google.com/file/d/1ZnbGF4qmNsIkyeeE3AhGSp-Gctqc7zIe/preview",
      fallback: "https://drive.google.com/file/d/1ZnbGF4qmNsIkyeeE3AhGSp-Gctqc7zIe/view?usp=drive_link"
    }
  },
  "company-sales-analysis": {
    title: "Company Sales Analysis",
    about: "An end-to-end sales analytics project that analyzes regional sales performance to identify revenue drivers, product trends, and profitability patterns. Combines Python EDA with an interactive Power BI dashboard and executive reports for business decision support. Work included exploratory data analysis, data cleaning, and feature engineering in Python, along with comprehensive visualization and reporting in Power BI. This project demonstrates advanced business intelligence capabilities and strategic insight generation.",
    github: "https://github.com/Mukeshgn/company-sales-analysis",
    technologies: ["Python (Pandas, Matplotlib, Seaborn)", "Power BI", "Excel", "Git & GitHub"],
    video: {
      embed: "https://www.youtube.com/embed/sb-TKsbFpfk?rel=0&controls=1",
      fallback: "https://www.youtube.com/watch?v=sb-TKsbFpfk"
    },
    ppt: {
      embed: "https://docs.google.com/presentation/d/1yu85Borhe9Dtn-X0Z9gXX8lzULhxbDPa/embed?start=false&loop=false&delayms=3000",
      fallback: "https://docs.google.com/presentation/d/1yu85Borhe9Dtn-X0Z9gXX8lzULhxbDPa/view",
      download: "https://drive.google.com/uc?export=download&id=1yu85Borhe9Dtn-X0Z9gXX8lzULhxbDPa"
    },
    report: {
      embed: "https://drive.google.com/file/d/1Yl6G5EvhprGYcT1Xo83UlnnSLBeXmQom/preview",
      fallback: "https://drive.google.com/file/d/1Yl6G5EvhprGYcT1Xo83UlnnSLBeXmQom/view?usp=drive_link"
    }
  },
  "food-delivery-sql": {
    title: "Food Delivery Data Analysis (SQL Project)",
    about: "This project simulates a real-world food delivery business scenario and analyzes customer behavior, delivery performance, and restaurant insights using SQL. A full PostgreSQL database was created with tables for customers, restaurants, orders, deliveries, and riders. Analysis included performance KPIs, customer segmentation, revenue trends, and operational metrics. SQL queries were used to solve business problems such as peak order hours, top restaurants, delivery partner efficiency, and most-ordered items. Deliverables include a presentation, detailed report, ERD, and insights documentation.",
    github: "https://github.com/Mukeshgn/data-analysis-using-sql",
    technologies: ["PostgreSQL", "SQL", "Power BI", "Excel", "Data Modeling", "Data Visualization"],
    video: {
      embed: "https://www.youtube.com/embed/PgPFCZ1Iq0g",
      fallback: "https://youtu.be/PgPFCZ1Iq0g"
    },
    ppt: {
      embed: "https://docs.google.com/presentation/d/19Pfj9OR1MNZFx6slEwihUdcSepAn474N/embed?start=false&loop=false&delayms=3000",
      fallback: "https://docs.google.com/presentation/d/19Pfj9OR1MNZFx6slEwihUdcSepAn474N/view",
      download: "https://drive.google.com/uc?export=download&id=19Pfj9OR1MNZFx6slEwihUdcSepAn474N"
    },
    report: {
      embed: "https://drive.google.com/file/d/16NFpaKmuP0hcy9j6skp90aeYXvCC3lrp/preview",
      fallback: "https://drive.google.com/file/d/16NFpaKmuP0hcy9j6skp90aeYXvCC3lrp/view?usp=drive_link"
    }
  },
  "cricket-insights": {
    title: "Cricket Performance Insights",
    about: "A data-driven cricket analytics project that evaluates batting and bowling performance, match trends, and venue statistics using Python and Power BI. Player-level data was collected from ESPNcricinfo (JSON), cleaned with Pandas, and analyzed through descriptive metrics and visual plots. Power BI dashboards enabled interactive insights, including team comparisons and dynamic Best Playing XI selection. Deliverables include an in-depth report, presentation, dashboards, and a demo video.",
    github: "https://github.com/Mukeshgn/Cricket_Performance_Insights",
    technologies: ["Python", "Pandas", "Matplotlib", "Power BI", "Excel", "Jupyter Notebook", "Data Visualization"],
    video: {
      embed: "https://www.youtube.com/embed/NHdwkzuHpbs",
      fallback: "https://youtu.be/NHdwkzuHpbs"
    },
    ppt: {
      embed: "https://docs.google.com/presentation/d/1H0lDEZAFy9RRsvEPNUuWwQUzFA4CBBjn/embed?start=false&loop=false&delayms=3000",
      fallback: "https://docs.google.com/presentation/d/1H0lDEZAFy9RRsvEPNUuWwQUzFA4CBBjn/view",
      download: "https://drive.google.com/uc?export=download&id=1H0lDEZAFy9RRsvEPNUuWwQUzFA4CBBjn"
    },
    report: {
      embed: "https://drive.google.com/file/d/1yY8VpQxKwJzNJ5xzJxJxJxJxJxJxJxJ/preview",
      fallback: "https://drive.google.com/file/d/1yY8VpQxKwJzNJ5xzJxJxJxJxJxJxJxJ/view?usp=drive_link"
    }
  }
};

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = id ? projectsData[id as keyof typeof projectsData] : null;
  const [pptEmbedFailed, setPptEmbedFailed] = useState(false);
  const [reportEmbedFailed, setReportEmbedFailed] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Reset embed states when project changes
    setPptEmbedFailed(false);
    setReportEmbedFailed(false);
    
    // Auto-detect embed failures after 3 seconds
    const pptTimer = setTimeout(() => setPptEmbedFailed(true), 3000);
    const reportTimer = setTimeout(() => setReportEmbedFailed(true), 4000);
    
    return () => {
      clearTimeout(pptTimer);
      clearTimeout(reportTimer);
    };
  }, [id]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/")}>Back to Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="mb-8 hover:text-primary"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Portfolio
        </Button>

        {/* Project Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
          {project.title}
        </h1>

        {/* Top Video Section */}
        {project.video && (
          <div id="video" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-4">Project Demo Video</h2>
            <div className="aspect-video rounded-xl overflow-hidden bg-muted/20 border border-border shadow-card">
              <iframe
                src={project.video.embed}
                className="w-full h-full"
                title={`${project.title} demo video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}

        {/* Video Fallback for Company Sales */}
        {!project.video && id === "company-sales-analysis" && (
          <div id="video" className="mb-12 scroll-mt-20">
            <div className="bg-gradient-card backdrop-blur-sm rounded-xl p-8 border border-border shadow-card text-center">
              <p className="text-muted-foreground mb-4">Demo video not available</p>
              <Button
                variant="outline"
                className="border-primary/50 hover:bg-primary/10"
                onClick={() => window.open(project.github, '_blank', 'noopener,noreferrer')}
              >
                <Github className="w-4 h-4 mr-2" />
                Open Project Repository
              </Button>
            </div>
          </div>
        )}

        {/* Middle Section - About & Tech/Links */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* About This Project - 2 columns */}
          <div className="md:col-span-2">
            <div className="bg-gradient-card backdrop-blur-sm rounded-xl p-8 border border-border shadow-card">
              <h2 className="text-2xl font-bold text-foreground mb-4">About This Project</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.about}
              </p>
            </div>
          </div>

          {/* Tech & Links Panel - 1 column */}
          <div className="space-y-6">
            {/* Project Links */}
            <div className="bg-gradient-card backdrop-blur-sm rounded-xl p-6 border border-border shadow-card">
              <h3 className="text-xl font-bold text-foreground mb-4">Project Links</h3>
              <div className="space-y-3">
                <Button
                  className="w-full bg-gradient-primary hover:shadow-hover transition-all"
                  onClick={() => window.open(project.github, '_blank', 'noopener,noreferrer')}
                  aria-label={`Open ${project.title} project code on GitHub (opens in new tab)`}
                >
                  <Github className="w-4 h-4 mr-2" />
                  Project Code (GitHub)
                </Button>
                {project.video && (
                  <Button
                    variant="outline"
                    className="w-full border-primary/50 hover:bg-primary/10"
                    onClick={() => scrollToSection('video')}
                    aria-label="Scroll to project demo video on this page"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    View Video
                  </Button>
                )}
                <Button
                  variant="outline"
                  className="w-full border-primary/50 hover:bg-primary/10"
                  onClick={() => scrollToSection('ppt')}
                  aria-label="Scroll to presentation (slides) on this page"
                >
                  <Presentation className="w-4 h-4 mr-2" />
                  View PPT
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-primary/50 hover:bg-primary/10"
                  onClick={() => scrollToSection('report')}
                  aria-label="Scroll to full report on this page"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  View Report
                </Button>
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-gradient-card backdrop-blur-sm rounded-xl p-6 border border-border shadow-card">
              <h3 className="text-xl font-bold text-foreground mb-4">Technologies</h3>
              <ul className="space-y-2">
                {project.technologies.map((tech) => (
                  <li key={tech} className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-primary">▸</span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section - PPT & Report Previews */}
        <div className="space-y-12">
          {/* PPT Section */}
          <div id="ppt" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-4">Presentation (Slides)</h2>
            {pptEmbedFailed ? (
              <div className="bg-gradient-card backdrop-blur-sm rounded-xl p-8 border border-border shadow-card text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Presentation className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Presentation Preview Unavailable</h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Google Slides embedding is restricted. View or download the presentation using the buttons below.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Button
                    className="bg-gradient-primary hover:shadow-hover transition-all"
                    onClick={() => window.open(project.ppt.fallback, '_blank', 'noopener,noreferrer')}
                    aria-label="View presentation in Google Slides (new tab)"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Presentation
                  </Button>
                  {project.ppt.download && (
                    <Button
                      variant="outline"
                      className="border-primary/50 hover:bg-primary/10"
                      onClick={() => window.open(project.ppt.download, '_blank', 'noopener,noreferrer')}
                      aria-label="Download presentation file"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download PPT
                    </Button>
                  )}
                </div>
              </div>
            ) : (
              <>
                <div className="aspect-video rounded-xl overflow-hidden bg-muted/20 border border-border shadow-card">
                  <iframe
                    src={project.ppt.embed}
                    className="w-full h-full"
                    loading="lazy"
                    title={`${project.title} presentation`}
                    allow="autoplay"
                    onError={() => setPptEmbedFailed(true)}
                  />
                </div>
                <div className="mt-4 flex flex-wrap gap-3 justify-center">
                  <Button
                    variant="link"
                    className="text-primary"
                    onClick={() => setPptEmbedFailed(true)}
                  >
                    Embed not loading? Show alternatives
                  </Button>
                </div>
              </>
            )}
          </div>

          {/* Report Section */}
          <div id="report" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-4">Full Report (PDF)</h2>
            {reportEmbedFailed ? (
              <div className="bg-gradient-card backdrop-blur-sm rounded-xl p-8 border border-border shadow-card text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Report Preview Unavailable</h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  PDF embedding is restricted. Open the report in a new tab to view it.
                </p>
                <Button
                  className="bg-gradient-primary hover:shadow-hover transition-all"
                  onClick={() => window.open(project.report.fallback, '_blank', 'noopener,noreferrer')}
                  aria-label="View report in new tab"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Report
                </Button>
              </div>
            ) : (
              <>
                <div className="aspect-[8.5/11] rounded-xl overflow-hidden bg-muted/20 border border-border shadow-card">
                  <iframe
                    src={project.report.embed}
                    className="w-full h-full"
                    loading="lazy"
                    title={`${project.title} report`}
                    onError={() => setReportEmbedFailed(true)}
                  />
                </div>
                <div className="mt-4 flex justify-center">
                  <Button
                    variant="link"
                    className="text-primary"
                    onClick={() => setReportEmbedFailed(true)}
                  >
                    Embed not loading? Show alternatives
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;