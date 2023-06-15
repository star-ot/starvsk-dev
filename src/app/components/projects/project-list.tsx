import { useState, useEffect } from "react";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiLua, SiTypescript } from "react-icons/si";
import Link from "next/link";
import axios from "axios";

type Project = {
    id: number;
    name: string;
    language: string;
    slug: string;
    gamelink?: string;
};

const projects: Project[] = [
    { id: 1, name: "Find the Candy", language: "Lua", slug: "find-the-candy", gamelink: "https://www.roblox.com/games/9057892023/Find-the-Candy-110" },
    { id: 7, name: "Be a Robot!", language: "Lua", slug: "be-a-robot", gamelink: "https://www.roblox.com/games/7178432445/Be-a-Robot-LAVA-WORLD"},
    { id: 5, name: "Find the Bottlecaps", language: "Lua", slug: "find-the-bottlecaps", gamelink: "https://www.roblox.com/games/9414460417/Find-the-Bottlecaps-31-ALPHA"},
    { id: 9, name: "blow people up with codes on their head at 3 am", language: "Lua", slug: "blow-people-up-with-codes-on-their-head-at-3-am", gamelink: "https://www.roblox.com/games/11605321695/blow-people-up-with-codes-on-their-head-at-3-am"},
    { id: 8, name: "Snazzy Cafe v2", language: "Lua", slug: "snazzy-cafe" },
    { id: 4, name: "Starvsk.dev", language: "TypeScript", slug: "starvsk-dev" },
    { id: 6, name: "ITAD Odoo Modules", language: "Python", slug: "itad-odoo-modules" },
    { id: 2, name: "MedusaJS Integrations", language: "TypeScript", slug: "medusajs-integrations" },
    { id: 3, name: "OpenAI Support Bot", language: "Python", slug: "openai-support-bot" },
];

const ProjectList = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
    const [projectVisits, setProjectVisits] = useState<{ [key: number]: number }>({});

    useEffect(() => {
        const fetchProjectVisits = async () => {
            try {
                const response = await axios.get(
                    "https://games.roproxy.com/v2/groups/14289060/games?accessFilter=1&limit=10&sortOrder=Asc"
                );
                const data = response.data.data;
                console.log(data);
                const visits: { [key: number]: number } = {};

                data.forEach((item: any) => {
                    let projectName = item.name;
                    // add an if statement here to check if the projectName is equal to 'Find the Candy [110]' then assign the projectName to 'Find the Candy'
                    if (projectName === "Find the Candy [110] ") {
                        projectName = "Find the Candy";
                    }
                    const project = projects.find((project) => project.name === projectName);
                    if (project) {
                        let placeVisits = item.placeVisits;
                        // add commas to the placeVisits
                        placeVisits = placeVisits.toLocaleString();

                        visits[project.id] = placeVisits;
                    }
                });
//https://www.roblox.com/groups/11984651/North-Star-Game-Studios#!/about
                const response2 = await axios.get(
                    "https://games.roproxy.com/v2/groups/11984651/games?accessFilter=1&limit=25&sortOrder=Asc"
                );
                const data2 = response2.data.data;
                console.log(data2);
                const visits2: { [key: number]: number } = {};

                data2.forEach((item: any) => {
                    let projectName = item.name;
                    // add an if statement here to check if the projectName is equal to 'Find the Bottlecaps [31]' then assign the projectName to 'Find the Candy'
                    if (projectName === "Find the Bottlecaps [31][ALPHA]") {
                        projectName = "Find the Bottlecaps";
                    }
                    const project = projects.find((project) => project.name === projectName);
                    if (project) {
                        let placeVisits = item.placeVisits;
                        // add commas to the placeVisits
                        placeVisits = placeVisits.toLocaleString();

                        visits[project.id] = placeVisits;
                    }
                });

                // https://www.roblox.com/groups/8828133/GOCUBBYS-GAMES#!/about
                const response3 = await axios.get(
                    "https://games.roproxy.com/v2/groups/8828133/games?accessFilter=1&limit=25&sortOrder=Asc"
                );
                const data3 = response3.data.data;
                console.log(data3);
                const visits3: { [key: number]: number } = {};

                data3.forEach((item: any) => {
                    let itemId = item.id
                    let projectName = item.name;
                    // add an if statement here to check if the projectName is equal to '🤖 Be a Robot! 🤖 LAVA WORLD!' then assign the projectName to 'Be a Robot!'
                    if (itemId === 2787697433) {
                        console.log(item.placeVisits)
                        projectName = "Be a Robot!";
                    }
                    const project = projects.find((project) => project.name === projectName);
                    if (project) {
                        let placeVisits = item.placeVisits;
                        // add commas to the placeVisits
                        placeVisits = placeVisits.toLocaleString();

                        visits[project.id] = placeVisits;
                    }
                });
                //https://www.roblox.com/groups/16334608/MEME-TEAM-DREAM-TEME#!/about
                const response4 = await axios.get(
                    "https://games.roproxy.com/v2/groups/16334608/games?accessFilter=1&limit=25&sortOrder=Asc"
                );
                const data4 = response4.data.data;
                console.log(data4);
                const visits4: { [key: number]: number } = {};

                data4.forEach((item: any) => {
                    let itemId = item.id
                    let projectName = item.name;
                    // add an if statement here to check if the projectName is equal to 'blow people up with codes on their head at 3 am' then assign the projectName to 'blow people up with codes on their head at 3 am'
                    if (projectName === "blow people up with codes on their head at 3 am") {
                        console.log(item.placeVisits)
                        projectName = "blow people up with codes on their head at 3 am";
                    }
                    const project = projects.find((project) => project.name === projectName);
                    if (project) {
                        let placeVisits = item.placeVisits;
                        // add commas to the placeVisits
                        placeVisits = placeVisits.toLocaleString();

                        visits[project.id] = placeVisits;
                    }
                });


                setProjectVisits(visits);
            } catch (error) {
                console.error("Error fetching project visits:", error);
            }
        };

        fetchProjectVisits();
    }, []);

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-8">
                {filteredProjects.map((project) => (
                
                    <div
                        key={project.id}
                        className="cursor-pointer hover:bg-gray-500 bg-gray-700 p-4 rounded-md shadow-md"
                    >
                        <Link key={project.id} href={`/projects/${project.slug}`}>
                            <h3 className="text-lg text-zinc-100 font-bold">{project.name}</h3>
                            <p className="text-zinc-300">{project.language}</p>
                        </Link>
                        {project.name === "Find the Candy" && (
                            <p className="text-zinc-100">Total Plays: {projectVisits[project.id]}</p>
                        )}
                        {project.name === "Find the Bottlecaps" && (
                            <p className="text-zinc-100">Total Plays: {projectVisits[project.id]}</p>
                        )}
                        {project.name === "Be a Robot!" && (
                            <p className="text-zinc-100">Total Plays: {projectVisits[project.id]}</p>
                        )}
                        {project.name === "blow people up with codes on their head at 3 am" && (
                            <p className="text-zinc-100">Total Plays: {projectVisits[project.id]}</p>
                        )}
                        {project.gamelink  && (
                            <Link href={project.gamelink} target="_blank">
                                <p className="content-center self-center justify-center text-zinc-100 rounded bg-green-600 w-1/4 pl-2 py-2 mt-2">Play</p>
                            </Link>
                        )}
                    </div>
                
                ))}
            </div>
        </div>
    );
};

export default ProjectList;
