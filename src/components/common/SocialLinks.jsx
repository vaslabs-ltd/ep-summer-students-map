import { Github, Globe, Instagram, Linkedin } from "lucide-react";

const icons = {
  linkedin: <Linkedin size={16} />,
  instagram: <Instagram size={16} />,
  github: <Github size={16} />,
  website: <Globe size={16} />
};

export default function SocialLinks({ student }) {
  const links = [
    ["linkedin", student.linkedin],
    ["instagram", student.instagram],
    ["github", student.github],
    ["website", student.website]
  ].filter((item) => item[1]);

  if (links.length === 0) return null;

  return (
    <div className="mt-4 flex gap-2">
      {links.map(([type, href]) => (
        <a
          key={type}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="social-link"
          aria-label={type}
        >
          {icons[type]}
        </a>
      ))}
    </div>
  );
}
