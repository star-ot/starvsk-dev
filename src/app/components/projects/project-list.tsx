import { useState, useEffect } from "react";
import { SiLua, SiTypescript, SiPython } from "react-icons/si";
import Link from "next/link";
import axios from "axios";

type Project = {
    id: number;
    name: string;
    language: string;
    slug: string;
    gamelink?: string;
    tags?: string[];
    description?: string;
    thumbnail?: string;
};

const projects: Project[] = [
    {
        id: 1,
        name: "Find the Candy",
        language: "Lua",
        slug: "find-the-candy",
        tags: ["Roblox", "Multiplayer", "Closed-Source"],
        description: "Launched on Roblox in March of 2022. Developed in under 2 weeks.",
        gamelink: "https://www.roblox.com/games/9057892023/Find-the-Candy-110",
    },
    {
        id: 7,
        name: "Be a Robot!",
        language: "Lua",
        slug: "be-a-robot",
        tags: ["Roblox", "Multiplayer", "Closed-Source"],
        description: "Designed and programmed UI.",
        gamelink: "https://www.roblox.com/games/7178432445/Be-a-Robot-LAVA-WORLD",
    },
    {
        id: 5,
        name: "Find the Bottlecaps",
        language: "Lua",
        slug: "find-the-bottlecaps",
        tags: ["Roblox", "Multiplayer", "Closed-Source"],
        gamelink: "https://www.roblox.com/games/9414460417/Find-the-Bottlecaps-31-ALPHA",
    },
    {
        id: 9,
        name: "blow people up with codes on their head at 3 am",
        language: "Lua",
        slug: "blow-people-up-with-codes-on-their-head-at-3-am",
        tags: ["Roblox", "Multiplayer", "Closed-Source"],
        gamelink: "https://www.roblox.com/games/11605321695/blow-people-up-with-codes-on-their-head-at-3-am",
    },
    {
        id: 8, name: "Snazzy Cafe v2",
        tags: ["Roblox", "Multiplayer", "Closed-Source"],
        language: "Lua", slug: "snazzy-cafe"
    },
    { id: 4, name: "Starvsk.dev", 
    tags: ["Website", "Open-Source"],
    language: "TypeScript", slug: "starvsk-dev" },
    { id: 6, name: "ITAD Odoo Modules", 
    tags: ["Odoo", "Closed-Source"],
    language: "Python", slug: "itad-odoo-modules" },
    { id: 2, name: "MedusaJS Integrations", 
    tags: ["Medusa.js", "Closed-Source"],
    language: "TypeScript", slug: "medusajs-integrations" },
    { id: 3, name: "OpenAI Support Bot", 
    tags: ["Closed-Source"],
    language: "Python", slug: "openai-support-bot" },
];

const ProjectList = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
    const [projectVisits, setProjectVisits] = useState<{ [key: number]: number }>({});

    useEffect(() => {
        const fetchProjectVisits = async () => {
            try {
                const responses = await Promise.all([
                    axios.get("https://games.roproxy.com/v2/groups/14289060/games?accessFilter=1&limit=10&sortOrder=Asc"),
                    axios.get("https://games.roproxy.com/v2/groups/11984651/games?accessFilter=1&limit=25&sortOrder=Asc"),
                    axios.get("https://games.roproxy.com/v2/groups/8828133/games?accessFilter=1&limit=25&sortOrder=Asc"),
                    axios.get("https://games.roproxy.com/v2/groups/16334608/games?accessFilter=1&limit=25&sortOrder=Asc"),
                ]);

                const visitData = responses.map((response) => response.data.data);

                const visits: { [key: number]: number } = {};

                visitData.forEach((data) => {
                    data.forEach((item: any) => {
                        let projectName = item.name;

                        if (projectName === "Find the Candy [110] ") {
                            projectName = "Find the Candy";
                        } else if (projectName === "Find the Bottlecaps [31][ALPHA]") {
                            projectName = "Find the Bottlecaps";
                        } else if (item.id === 2787697433) {
                            projectName = "Be a Robot!";
                        }

                        const project = projects.find((project) => project.name === projectName);

                        if (project) {
                            let placeVisits = item.placeVisits;
                            placeVisits = placeVisits.toLocaleString();

                            visits[project.id] = placeVisits;
                        }
                    });
                });

                setProjectVisits(visits);
            } catch (error) {
                console.error("Error fetching project visits:", error);
            }
        };

        fetchProjectVisits();
    }, []);

    const handleLanguageFilter = (language: string) => {
        setSelectedLanguage((prevLanguage) => (prevLanguage === language ? null : language));
    };

    const filteredProjects = selectedLanguage
        ? projects.filter((project) => project.language === selectedLanguage)
        : projects;

    return (
        <div className="w-11/12 px-12 flex-grow overflow-y-auto">
            <div className="flex justify-center space-x-4 my-4 pb-6">
                <SiLua
                    className={`hover:animate-pulse sm:text-sm md:text-2xl lg:text-3xl cursor-pointer ${selectedLanguage === "Lua"
                        ? "text-blue-500"
                        : "text-zinc-500"
                        }`}
                    onClick={() => handleLanguageFilter("Lua")}
                />
                <SiTypescript
                    className={`hover:animate-pulse sm:text-sm md:text-2xl lg:text-3xl cursor-pointer ${selectedLanguage === "TypeScript"
                        ? "text-blue-500"
                        : "text-zinc-500"
                        }`}
                    onClick={() => handleLanguageFilter("TypeScript")}
                />
                <SiPython
                    className={`hover:animate-pulse sm:text-sm md:text-2xl lg:text-3xl cursor-pointer ${selectedLanguage === "Python"
                        ? "text-yellow-500"
                        : "text-zinc-500"
                        }`}
                    onClick={() => handleLanguageFilter("Python")}
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-12">
                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        data-tooltip-id={`tooltip-${project.id}`}
                        data-tooltip-content={project.description || ""}
                        data-tooltip-place="top"
                        className="cursor-pointer hover:bg-gray-500 bg-gray-700 p-4 rounded-md shadow-md"
                    >
                        <Link key={project.id} href={`/projects/${project.slug}`}>
                            <h3 className="text-lg text-zinc-100 font-bold">{project.name}</h3>
                            <p className="text-zinc-300">{project.language}</p>
                        </Link>
                        {["Find the Candy", "Find the Bottlecaps", "Be a Robot!", "blow people up with codes on their head at 3 am"].includes(
                            project.name
                        ) && <p className="text-zinc-100">Total Plays: {projectVisits[project.id]}</p>}
                        {project.gamelink && (
                            <Link href={project.gamelink} target="_blank">
                                <div className="w-1/5 md:w-1/4 mt-2">
                                    <p className="text-xs md:text-sm text-zinc-100 bg-green-600 py-2 pl-2 md:pl-8 rounded-md">
                                        Play
                                    </p>
                                </div>
                            </Link>
                        )}
                        {/* New Features */}
                        <div className="flex justify-between mt-2">
                            {/* 3. Project Tags */}
                            {project.tags && (
                                <div className="flex space-x-2">
                                    {project.tags.map((tag) => (
                                        <p key={tag} className="text-zinc-300 bg-gray-800 rounded px-2 text-xs py-1">
                                            {tag}
                                        </p>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectList;
