// components/Modal.tsx
import React from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import { FaWindowClose, FaGlobe, FaDotCircle } from "react-icons/fa";
import { SiGithub, SiRoblox } from "react-icons/si";
import Link from "next/link";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	project: any; // Replace 'any' with the type for your project data
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, project }) => {
	if (!isOpen || !project) return null;

	const imageCarousel = (
		<Carousel showThumbs={true} showStatus={true} infiniteLoop autoPlay>
			{project.images &&
				project.images.length > 0 &&
				project.images.map((image: string, index: number) => (
					<div key={index}>
						<img src={image} alt={project.title} />
					</div>
				))}
		</Carousel>
	);

	return (
		<motion.div
			className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 z-50"
			onClick={onClose}
		>
			<motion.div
				className="bg-gray-800 rounded-lg p-6 w-full max-w-screen-2xl overflow-y-auto flex flex-col relative max-h-screen"
				onClick={(e) => e.stopPropagation()}
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				exit={{ scale: 0 }}
			>
				<button
					onClick={onClose}
					className="absolute top-2 right-2 text-gray-300 hover:text-gray-400"
				>
					<FaWindowClose className="w-6 h-6 fill-current" />{" "}
					{/* Use the CloseIcon */}
				</button>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="col-span-2 md:col-span-1">
						<div className="w-full">{imageCarousel}</div>
						<div className="w-full mt-8">
							<h2 className="text-2xl font-bold mb-4 text-white">
								{project.name}
							</h2>
							{project.tags && (
								<div className="flex flex-wrap mt-2">
									{project.tags.map((tag: string) => (
										<p
											key={tag}
											className="text-zinc-300 bg-gray-700 rounded px-2 text-xs py-1 mr-2 mb-2"
										>
											{tag}
										</p>
									))}
								</div>
							)}
							<p className="mt-4 text-white">{project.short_desc}</p>
						</div>
					</div>
					<div className="col-span-2 md:col-span-1">
						{project.production_year && (
							<p className="mt-4 text-white">
								<strong>Production Year:</strong> {project.production_year}
							</p>
						)}
						{project.producers && (
							<p className="mt-4 text-white">
								<strong>Producers:</strong>{" "}
								{project.producers
									.map((producer: string) => producer)
									.join(", ")}
							</p>
						)}
						<p className="mt-4 text-white">{project.description}</p>
						{project.technologies && (
							<div className="mt-4">
								<h3 className="text-xl font-bold mb-2 text-white">
									Technologies Used
								</h3>
								<ul className="list-disc list-inside text-white">
									{project.technologies.map((technology: string) => (
										<li key={technology}> {technology} </li>
									))}
								</ul>
							</div>
						)}
						{project.key_features && (
							<div className="mt-4">
								<h3 className="text-xl font-bold mb-2 text-white">
									Key Features & Contributions
								</h3>
								<ul className="list-disc list-inside text-white">
									{project.key_features.map((feature: string) => (
										<li key={feature}> {feature} </li>
									))}
								</ul>
							</div>
						)}

						<div className="flex justify-between mt-4">
							{project.gamelink && (
								<Link href={project.gamelink} target="_blank">
									<p className="text-xs md:text-sm text-zinc-100 bg-green-600 py-2 px-4 rounded-md cursor-pointer flex items-center">
										<SiRoblox className="inline-block mr-1 mb-1" /> Play
									</p>
								</Link>
							)}
							{project.weblink && (
								<Link href={project.weblink} target="_blank">
									<p className="text-xs md:text-sm text-zinc-100 bg-blue-600 py-2 px-4 rounded-md cursor-pointer flex items-center">
										<FaGlobe className="inline-block mr-1 mb-1" /> Website
									</p>
								</Link>
							)}
							{project.gitlink && (
								<Link href={project.gitlink} target="_blank">
									<p className="text-xs md:text-sm text-zinc-100 bg-black py-2 px-4 rounded-md cursor-pointer flex items-center">
										<SiGithub className="inline-block mr-1 mb-1" /> GitHub
									</p>
								</Link>
							)}
						</div>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default Modal;
