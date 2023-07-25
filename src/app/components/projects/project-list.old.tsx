import React from "react";

interface Project {
	title: string;
	description: string;
	images: string[];
}

interface ProjectListProps {
	projects: Project[];
	onOpenModal: (project: Project) => void;
}

const ProjectList: React.FC<ProjectListProps> = ({ projects, onOpenModal }) => {
	return (
		<div className="grid grid-cols-1 gap-4 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{projects.map((project, index) => (
				<div
					key={index}
					className="bg-white rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
					onClick={() => onOpenModal(project)}
				>
					{/* Replace this with your project card content */}
					<div className="p-4">
						<h3 className="text-xl font-semibold">{project.title}</h3>
						<p>{project.description}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default ProjectList;
