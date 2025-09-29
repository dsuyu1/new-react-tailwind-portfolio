import { ArrowRight, Linkedin, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SOAR EDR Lab",
    description: "Used Tines (SOAR) and LimaCharlie (EDR) to automate security workflows. ",
    image: "/projects/SOAR-EDR-Storyboard.png",
    tags: ["LimeCharlie", "Tines", "Slack"],
  demoUrl: "https://lnkd.in/p/g7JMgrSw",
    githubUrl: "https://github.com/dsuyu1/SOAR-EDR-Project",
  },
  {
    id: 2,
    title: "30-Day SOC Challenge",
    description: "I follow Steven from MyDFIR and learn use ELK, Sysmon, osTicket, and Mythic C2 to simulate a Security Operations Center (SOC) environment.",
    image: "/projects/elastic.png",
    tags: ["Elastic", "Sysmon", "osTicket", "Mythic C2"],
    demoUrl: "https://lnkd.in/p/g8MbJUxC",
    githubUrl: "https://github.com/dsuyu1/30-Day-SOC-Analyst-Challenge",
  },
];


export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Highlights </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my most notable and relevant projects as they relate to cybersecurity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center items-center">
          {projects.map((project, key) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  style={{ height: 'auto', maxHeight: '220px', margin: '0 auto', display: 'block' }}
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2 card-hover shadow-xs transition-transform duration-300"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/dsuyu/"
          >
            Check My LinkedIn <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
