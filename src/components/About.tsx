const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-card/30 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main About Content - 2 columns */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-gradient-card backdrop-blur-sm rounded-xl p-8 border border-border shadow-card">
              <p className="text-foreground/90 leading-relaxed text-lg mb-4">
                I'm an enthusiastic Data Analyst and SQL Developer with a strong passion for transforming raw data into meaningful insights. My journey began with hands-on projects involving Python, SQL, Excel, and Power BI, where I discovered how data can drive smarter decisions and solve real business problems.
              </p>
              <p className="text-foreground/90 leading-relaxed text-lg mb-4">
                I bring curiosity, persistence, and a quick-learning mindset to every project. I enjoy working with datasets, cleaning and analyzing data, building dashboards, and presenting insights in a clear and visually appealing way.
              </p>
              <p className="text-foreground/90 leading-relaxed text-lg">
                My goal is to create data-driven solutions that help businesses understand trends, improve performance, and make informed decisions.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="bg-gradient-card backdrop-blur-sm rounded-xl p-8 border border-border shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="text-primary">⚡</span>
                Quick Facts
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <span className="text-foreground/90">SQL Developer & Data Analytics Enthusiast</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <span className="text-foreground/90">Skilled in Python, SQL, Excel, and Power BI</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <span className="text-foreground/90">Dashboard building & data visualization experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <span className="text-foreground/90">Continuous learner with strong analytical thinking</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Education Section - 1 column */}
          <div className="space-y-6">
            <div className="bg-gradient-card backdrop-blur-sm rounded-xl p-6 border border-border shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="text-primary">🎓</span>
                Education
              </h3>
              
              <div className="space-y-6">
                {/* B.Tech */}
                <div className="border-l-2 border-primary/50 pl-4">
                  <h4 className="font-bold text-foreground text-lg">B.Tech (Information Technology)</h4>
                  <p className="text-muted-foreground text-sm mb-1">2020 – 2024</p>
                  <p className="text-primary font-semibold">CGPA: 8.75</p>
                </div>

                {/* Intermediate */}
                <div className="border-l-2 border-primary/50 pl-4">
                  <h4 className="font-bold text-foreground text-lg">Intermediate (MPC)</h4>
                  <p className="text-muted-foreground text-sm mb-1">2018 – 2020</p>
                  <p className="text-primary font-semibold">975 Marks</p>
                </div>

                {/* High School */}
                <div className="border-l-2 border-primary/50 pl-4">
                  <h4 className="font-bold text-foreground text-lg">High School (SSC)</h4>
                  <p className="text-muted-foreground text-sm mb-1">2017 – 2018</p>
                  <p className="text-primary font-semibold">GPA: 9.8</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;