import { Database, Code2, BarChart3, Award } from "lucide-react";

const skills = [
  {
    icon: Database,
    category: "Data & Analytics",
    items: ["Python", "SQL", "Power BI", "Excel", "Tableau", "Data Cleaning", "Statistical Analysis", "ETL", "Data Modeling"],
    level: 85,
  },
  {
    icon: Code2,
    category: "Programming & Tools",
    items: ["Python", "Java", "SQL Server", "PostgreSQL", "Azure SQL", "Git", "VS Code", "Jupyter Notebook"],
    level: 80,
  },
  {
    icon: BarChart3,
    category: "Business Intelligence",
    items: ["Power BI Dashboarding", "DAX", "Power Query", "Interactive Reports", "Business Insights"],
    level: 75,
  },
];

const certifications = [
  {
    name: "Deloitte Data Analytics Job Simulation",
    link: "https://drive.google.com/file/d/1ZqA-XzAfy9AyH-lc3at56LIfBjInpSmO/view"
  },
  {
    name: "Design Power BI Reports — Microsoft",
    link: "https://drive.google.com/file/d/1_yzV7BMS1fszGmNHeQuK3RCga2zsO1G6/view"
  },
  {
    name: "Introduction to SQL — Simplilearn",
    link: "https://drive.google.com/file/d/1Yxm9QN0bLBsMl_MrNsCoE2ut7eKpfT5U/view"
  },
  {
    name: "Introduction to Excel — Simplilearn",
    link: "https://drive.google.com/file/d/1CO9lzOgexlbLfVb2PsWNytQbDA11RCzA/view"
  },
  {
    name: "Java Programming — Udemy",
    link: "https://drive.google.com/file/d/1qRPblsfNHCLOKBOuSjsPXqiwEoutKfta/view"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.category}
                className="group relative bg-gradient-card backdrop-blur-sm rounded-xl p-6 border border-border shadow-card hover:shadow-hover transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-primary rounded-xl opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{skill.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-muted/50 text-muted-foreground rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Proficiency</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.name}
              className="group relative bg-gradient-card backdrop-blur-sm rounded-xl p-6 border border-border shadow-card hover:shadow-hover transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-primary rounded-xl opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground break-all font-mono">
                      {cert.link}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
