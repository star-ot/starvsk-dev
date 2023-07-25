import { useState, useEffect } from "react";
import { FaGlobe } from "react-icons/fa";
import {
	SiLua,
	SiTypescript,
	SiPython,
	SiGithub,
	SiRoblox,
} from "react-icons/si";
import Modal from "../modal/modal";
import Link from "next/link";
import axios from "axios";

type Project = {
	id: number;
	name: string;
	language: string;
	images?: string[];
	slug: string;
	gamelink?: string;
	gitlink?: string;
	weblink?: string;
    key_features?: string[];
    technologies?: string[];
    production_year?: number;
    producers?: string[];
	tags?: string[];
	short_desc?: string;
	description?: string;
	thumbnail?: string;
};

const projects: Project[] = [
	{
		id: 1,
		name: "Find the Candy",
		language: "Lua",
		slug: "find-the-candy",
		tags: ["Shipped", "Roblox", "Multiplayer", "Closed-Source"],
		images: [
			"/images/ftc1/1.png",
            "/images/ftc1/2.png",
            "/images/ftc1/3.png",
            "/images/ftc1/4.png",
            "/images/ftc1/5.jpg",
            "/images/ftc1/6.jpg",
            "/images/ftc1/7.jpg",
            "/images/ftc1/8.jpg",
            "/images/ftc1/9.jpg",
            "/images/ftc1/10.gif",
            "/images/ftc1/11.jpg",
            "/images/ftc1/12.gif",
            "/images/ftc1/13.jpg",
            "/images/ftc1/14.jpg",
            "/images/ftc1/15.gif",
            "/images/ftc1/16.jpg",
		],
        production_year: 2022,
        producers: ["StarVSK", "CloudStixx"],
		description:
			"Currently shipped title featuring over 600,000 unique plays. This game was developed in under 2 weeks, and was a collaboration between myself and CloudStixx. I was responsible for all of the programming and some game design. The game features an entirely custom UI and assets, unique gameplay and is monetized through in-game purchases.",
        key_features: [
            "Collectible Log",
            "Pet System",
            "Player Effects & Nameplates",
            "Shop with Game Passes and Developer Products",
            "Quest System w/ Dialogue Trees",
            "Modular Platformer Kit",
            "Custom UI",
        ],
        technologies: [
            "Roblox Studio",
            "DataStore2, Maid, Signal, PartCache, FastCast",
            "VSCode / Argon",
            "Photoshop",
            "Blender",
        ],
		short_desc:
			"Launched on Roblox in March of 2022. Developed in under 2 weeks.",
		gamelink: "https://www.roblox.com/games/9057892023/Find-the-Candy-110",
	},
	{
		id: 7,
		name: "Be a Robot!",
		language: "Lua",
		slug: "be-a-robot",
        production_year: 2021,
        producers: ["GOCUBBYS, CodedJimmy, StarVSK"],
		tags: ["Shipped", "Roblox", "Multiplayer", "Closed-Source"],
		short_desc: "Designed and programmed UI.",
        description: "Contractor work for GOCUBBYS Games, a 200,000 member Roblox group & studio. I was responsible for designing and programming some of the UI for the game, as well as laying it out in Roblox Studio. The game features unique simulator gameplay where you play as a Robot, and is monetized through in-game purchases.",
		gamelink: "https://www.roblox.com/games/7178432445/Be-a-Robot-LAVA-WORLD",
        technologies: [
            "Roblox Studio",
            "VSCode / Argon",
            "Photoshop",
        ],
        key_features: [
            "Animated Frames",
            "Custom UI",
        ],
        images: [
            "/images/bearobot/1.png",
            "/images/bearobot/2.jpg",
            "/images/bearobot/3.png",
            "/images/bearobot/4.png",
            "/images/bearobot/5.png",
            "/images/bearobot/6.png",
            "/images/bearobot/7.png",
        ],
	},
	{
		id: 5,
		name: "Find the Bottlecaps",
		language: "Lua",
		slug: "find-the-bottlecaps",
		tags: ["Shipped", "Roblox", "Multiplayer", "Closed-Source"],
        short_desc: "Launched on Roblox in May of 2022. Developed in under 2 weeks.",
		gamelink:
			"https://www.roblox.com/games/9414460417/Find-the-Bottlecaps-31-ALPHA",
        production_year: 2022,
        producers: ["StarVSK"],
        description: "Currently shipped title featuring over 10,000 unique plays. This game was developed in under 2 weeks. I was responsible for all of the programming, game design, and level design. The game features an entirely custom UI and assets, unique gameplay and is monetized through in-game purchases.",
        key_features: [
            "Modular Game Base",
            "External API Logging",
            "Optimized for all platforms",
            "Collectible Log",
            "Pet System",
            "Player Effects & Nameplates",
            "Shop with Game Passes and Developer Products",
            "Modular Platformer Kit",
            "Custom UI",
        ],
        technologies: [
            "Roblox Studio",
            "DataStore2, Maid, Signal, PartCache, FastCast",
            "Custom Logtail Wrapper w/ Discord Integration",
            "VSCode / Argon",
            "Photoshop",
            "Blender",
        ],
        images: [
            "/images/ftbc/1.gif",
            "/images/ftbc/2.gif",
            "/images/ftbc/3.jpg",
            "/images/ftbc/4.jpg",
            "/images/ftbc/5.jpg",
            "/images/ftbc/6.jpg",
            "/images/ftbc/7.jpg",
            "/images/ftbc/8.jpg",
            "/images/ftbc/9.jpg",
            "/images/ftbc/10.jpg",
            "/images/ftbc/11.jpg",
            "/images/ftbc/12.jpg",
            "/images/ftbc/13.jpg",
            "/images/ftbc/14.jpg",
            "/images/ftbc/15.jpg",
            "/images/ftbc/16.jpg",
            "/images/ftbc/17.jpg",
        ],
	},
	{
		id: 9,
		name: "blow people up with codes on their head at 3 am",
		language: "Lua",
		slug: "blow-people-up-with-codes-on-their-head-at-3-am",
		tags: ["Shipped", "Roblox", "Multiplayer", "Closed-Source"],
		gamelink:
			"https://www.roblox.com/games/11605321695/blow-people-up-with-codes-on-their-head-at-3-am",
        production_year: 2022,
        producers: ["StarVSK"],
        short_desc: "Launched on Roblox in July of 2022. Developed in 2 days to showcase R15 ragdolling features.",
        description: "Currently shipped title. This game was developed in under 2 days. I was responsible for all of the programming, game design. This game features fun gameplay showcasing a unique R15 ragdolling system with stunning, powerups, and more. This game is not monetized.",
        key_features: [
            "R15 Ragdolling",
            "Powerups",
            "Custom UI/Tools",
        ],
        technologies: [
            "Roblox Studio",
            "VSCode / Argon",
        ],
        images: [
            "/images/bpuwcoth/1.png",
            "/images/bpuwcoth/2.jpg",
            "/images/bpuwcoth/3.jpg",
            "/images/bpuwcoth/4.gif",
            "/images/bpuwcoth/5.gif",
        ],
        
	},
	{
		id: 8,
		name: "Snazzy Cafe v2",
		tags: ["Roblox", "Multiplayer", "Closed-Source"],
		language: "Lua",
		slug: "snazzy-cafe",
        short_desc: "An upcoming unique cafe experience on Roblox.",
        description: "Responsible for all programming as the Lead Programmer. Designed all UI and graphics. This game features a unique cafe and roleplaying experience with a custom UI, custom tools, and more. This game is monetized through in-game purchases.",
        key_features: [
            "Animated & Custom UI",
            "Shop with Game Passes and Developer Products",
            "Pets, Nameplates, Player Effects and more",
            "Custom tools",
            "Unique job system",
            "Unique recipe system",
        ],
        technologies: [
            "Roblox Studio",
            "VSCode / Argon",
            "Photoshop",
        ],
        images: [
            "/images/snazzyv2/1.gif",
            "/images/snazzyv2/2.jpg",
            "/images/snazzyv2/3.png",
            "/images/snazzyv2/4.png",
            "/images/snazzyv2/5.png",
            "/images/snazzyv2/6.png",
            "/images/snazzyv2/7.png",
            "/images/snazzyv2/8.gif",
            "/images/snazzyv2/9.gif",
            "/images/snazzyv2/10.gif",
            "/images/snazzyv2/11.gif",
            "/images/snazzyv2/12.gif",
            "/images/snazzyv2/13.gif",
            "/images/snazzyv2/14.gif",
            "/images/snazzyv2/15.gif",
            "/images/snazzyv2/16.gif",
            "/images/snazzyv2/17.gif",
            "/images/snazzyv2/18.gif",
            "/images/snazzyv2/19.gif",
        ],
	},
	{
		id: 10,
		name: "EpoxyWorx.co",
		tags: ["Shipped", "Website", "Closed-Source"],
		language: "TypeScript",
		slug: "epoxyworx-co",
		weblink: "https://epoxyworx.co",
        short_desc: "A custom WordPress powered website for a Boise, Idaho based epoxy flooring company.",
        description: "Responsible for all programming as the Lead Programmer. Also designed the logo. This website features custom WordPress elements, custom plugins, and more.",
        key_features: [
            "Responsive Design",
            "SEO Optimized",
            "Smooth scrolling animations",
            "Smooth page transitions",
            "Fast loading times",
            "Unique sidebar menu",
            "Custom WordPress Admin Panel",
            "Custom WordPress Plugins",
            "Custom WordPress Elementor Widgets",
        ],
        technologies: [
            "WordPress",
            "PHP",
            "JavaScript",
            "CSS",
            "HTML",
            "VSCode",
        ],
        images: [
            "/images/epoxyworx/1.png",
            "/images/epoxyworx/2.gif",
            "/images/epoxyworx/3.png",
            "/images/epoxyworx/4.png",
            "/images/epoxyworx/5.png",
            "/images/epoxyworx/6.png",
            "/images/epoxyworx/7.png",
        ],
	},
	{
		id: 4,
		name: "StarVSK.dev",
		tags: ["Shipped", "Website", "Open-Source"],
        short_desc: "The website you are viewing right now!",
        description: "A custom Next.js powered website for myself. This website features custom animations, custom components, and more.",
        technologies: [
            "Next.js / React",
            "TailwindCSS",
            "TypeScript",
            "Vercel",
            "Framer Motion",
        ],
        key_features: [
            "Responsive Design",
            "SEO Optimized",
            "Smooth scrolling animations",
            "Smooth page transitions",
            "Fast loading times",
            "Custom Components",
        ],
		language: "TypeScript",
		slug: "starvsk-dev",
		gitlink: "https://github.com/star-ot/starvsk-dev",
        images: [
            "/images/starvskdev/1.png",
        ]
	},
	{
		id: 6,
		name: "ITAD Odoo Modules",
		tags: ["Shipped", "Odoo", "Closed-Source"],
		language: "Python",
		slug: "itad-odoo-modules",
	},
	{
		id: 2,
		name: "MedusaJS Integrations",
		tags: ["Shipped", "Medusa.js", "Closed-Source"],
		language: "TypeScript",
		slug: "medusajs-integrations",
	},
	{
		id: 3,
		name: "OpenAI Support Bot",
		tags: ["Shipped", "Closed-Source", "MongoDB", "OpenAI"],
		language: "Python",
		images: [
			"https://cdn.discordapp.com/attachments/855185837925728296/1132035817859199026/opera_bO1Y3FtFeM.gif",
		],
		slug: "openai-support-bot",
	},
];

const ProjectList: React.FC = () => {
	const [selectedProject, setSelectedProject] = useState<any | null>(null); // Replace 'any' with the type for your project data
	const [selectedTags, setSelectedTags] = useState<string[]>([]);

	const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
	const [projectVisits, setProjectVisits] = useState<{ [key: number]: number }>(
		{}
	);
	const handleTagFilter = (tag: string) => {
		setSelectedTags((prevTags) =>
			prevTags.includes(tag)
				? prevTags.filter((t) => t !== tag)
				: [...prevTags, tag]
		);
	};

	const filteredProjects = projects.filter((project) => {
		if (selectedLanguage && project.language !== selectedLanguage) {
			return false;
		}
		if (selectedTags.length > 0 && project.tags) {
			return project.tags.some((tag) => selectedTags.includes(tag));
		}
		return true;
	});

	const openProjectModal = (project: any) => {
		setSelectedProject(project);
	};

	const closeProjectModal = () => {
		setSelectedProject(null);
	};

	useEffect(() => {
		const fetchProjectVisits = async () => {
			try {
				const responses = await Promise.all([
					axios.get(
						"https://games.roproxy.com/v2/groups/14289060/games?accessFilter=1&limit=10&sortOrder=Asc"
					),
					axios.get(
						"https://games.roproxy.com/v2/groups/11984651/games?accessFilter=1&limit=25&sortOrder=Asc"
					),
					axios.get(
						"https://games.roproxy.com/v2/groups/8828133/games?accessFilter=1&limit=25&sortOrder=Asc"
					),
					axios.get(
						"https://games.roproxy.com/v2/groups/16334608/games?accessFilter=1&limit=25&sortOrder=Asc"
					),
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

						const project = projects.find(
							(project) => project.name === projectName
						);

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
		setSelectedLanguage((prevLanguage) =>
			prevLanguage === language ? null : language
		);
	};

	return (
		<div className="w-11/12 px-12 flex-grow overflow-y-auto">
			<div className="flex justify-center space-x-4 my-4 pb-6">
				<SiLua
					className={`hover:animate-pulse sm:text-sm md:text-2xl lg:text-3xl cursor-pointer ${
						selectedLanguage === "Lua" ? "text-blue-500" : "text-zinc-500"
					}`}
					onClick={() => handleLanguageFilter("Lua")}
				/>
				<SiTypescript
					className={`hover:animate-pulse sm:text-sm md:text-2xl lg:text-3xl cursor-pointer ${
						selectedLanguage === "TypeScript"
							? "text-blue-500"
							: "text-zinc-500"
					}`}
					onClick={() => handleLanguageFilter("TypeScript")}
				/>
				<SiPython
					className={`hover:animate-pulse sm:text-sm md:text-2xl lg:text-3xl cursor-pointer ${
						selectedLanguage === "Python" ? "text-yellow-500" : "text-zinc-500"
					}`}
					onClick={() => handleLanguageFilter("Python")}
				/>
			</div>
			<div className="flex flex-wrap justify-center gap-4 pb-6">
				{/* Language Filter */}
				{/* ... (existing code) */}

				{/* Tag Filters */}
				{[
					"Shipped",
					"Roblox",
                    "Website",
					"Multiplayer",
					"Closed-Source",
					"Open-Source",
					"Odoo",
					"Medusa.js",
					"MongoDB",
					"OpenAI",
				].map((tag) => (
					<div
						key={tag}
						onClick={() => handleTagFilter(tag)}
						className={`hover:animate-pulse sm:text-sm md:text-2xl lg:text-3xl cursor-pointer ${
							selectedTags.includes(tag) ? "text-green-500" : "text-zinc-500"
						}`}
					>
						{tag}
					</div>
				))}
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-12">
				{filteredProjects.map((project) => (
					<div
						key={project.id}
						className="bg-gray-800 text-zinc-100 p-4 rounded-md shadow-md"
						onClick={() => openProjectModal(project)}
					>
						<Link key={project.id} href={`#`}>
							<h3 className="text-lg font-bold">{project.name}</h3>
						</Link>
						<p className="text-sm text-zinc-300">{project.language}</p>
						{project.short_desc && (
							<p className="text-zinc-300 mt-2">{project.short_desc}</p>
						)}
						{project.tags && (
							<div className="flex flex-wrap mt-2">
								{project.tags.map((tag) => (
									<p
										key={tag}
										className="text-zinc-300 bg-gray-700 rounded px-2 text-xs py-1 mr-2 mb-2"
									>
										{tag}
									</p>
								))}
							</div>
						)}
						{projectVisits[project.id] && (
							<p className="text-zinc-100 mt-2">
								Total Plays: {projectVisits[project.id]}
							</p>
						)}
						{project.gamelink && (
							<div className="flex justify-end mt-2">
								<Link href={project.gamelink} target="_blank">
									<p className="text-xs md:text-sm text-zinc-100 bg-green-600 py-2 px-4 rounded-md cursor-pointer">
										<SiRoblox className="inline-block mr-1 mb-1" /> Play
									</p>
								</Link>
							</div>
						)}
						{project.weblink && (
							<div className="flex justify-end mt-2">
								<Link href={project.weblink} target="_blank">
									<p className="text-xs md:text-sm text-zinc-100 bg-blue-600 py-2 px-4 rounded-md cursor-pointer">
										<FaGlobe className="inline-block mr-1 mb-1" /> Website
									</p>
								</Link>
							</div>
						)}
						{project.gitlink && (
							<div className="flex justify-end mt-2">
								<Link href={project.gitlink} target="_blank">
									<p className="text-xs md:text-sm text-zinc-100 bg-black py-2 px-4 rounded-md cursor-pointer">
										<SiGithub className="inline-block mr-1 mb-1" /> GitHub
									</p>
								</Link>
							</div>
						)}
					</div>
				))}
			</div>
			<Modal
				isOpen={!!selectedProject}
				onClose={closeProjectModal}
				project={selectedProject}
			/>
		</div>
	);
};

export default ProjectList;
