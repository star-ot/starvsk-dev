import { useState } from "react";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiLua, SiTypescript } from "react-icons/si";
import Link from "next/link";

type Project = {
    id: number;
    name: string;
    language: string;
    slug: string;
};

const projects: Project[] = [
    { id: 1, name: "Find the Candy", language: "Lua", slug: "find-the-candy" },
    { id: 4, name: "Starvsk.dev", language: "TypeScript", slug: "starvsk-dev"},
    { id: 5, name: "Find the Bottlecaps", language: "Lua", slug: "find-the-bottlecaps"},
    { id: 6, name: "ITAD Odoo Modules", language: "Python", slug: "itad-odoo-modules"},
    { id: 2, name: "MedusaJS Integrations", language: "TypeScript", slug: "medusajs-integrations"},
    { id: 3, name: "OpenAI Support Bot", language: "Python", slug: "openai-support-bot" },
];

const ProjectList = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

    const handleLanguageFilter = (language: string) => {
        setSelectedLanguage(language === selectedLanguage ? null : language);
    };

    const filteredProjects = selectedLanguage
        ? projects.filter((project) => project.language === selectedLanguage)
        : projects;

    return (
        <div className="w-11/12 px-12 flex-grow overflow-y-auto">
            <div className="flex justify-center space-x-4 my-4 pb-6">
                <SiLua
                    className={`hover:animate-pulse sm:text-sm md:text-2xl lg:text-3xl cursor-pointer ${selectedLanguage === "Lua" ? "text-blue-500" : "text-zinc-500"
                        }`}
                    onClick={() => handleLanguageFilter("Lua")}
                />
                <SiTypescript
                    className={`hover:animate-pulse sm:text-sm md:text-2xl lg:text-3xl cursor-pointer ${selectedLanguage === "TypeScript" ? "text-blue-500" : "text-zinc-500"
                        }`}
                    onClick={() => handleLanguageFilter("TypeScript")}
                />
                <FaPython
                    className={`hover:animate-pulse sm:text-sm md:text-2xl lg:text-3xl cursor-pointer ${selectedLanguage === "Python" ? "text-yellow-500" : "text-zinc-500"
                        }`}
                    onClick={() => handleLanguageFilter("Python")}
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProjects.map((project) => (
                    <Link key={project.id} href={`/projects/${project.slug}`}>
                        <div
                            key={project.id}
                            className="cursor-pointer hover:bg-gray-500 bg-gray-700 p-4 rounded-md shadow-md"
                        >
                            <h3 className="text-lg text-zinc-100 font-bold">{project.name}</h3>
                            <p className="text-zinc-300">{project.language}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ProjectList;
