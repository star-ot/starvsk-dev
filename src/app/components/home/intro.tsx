import { useState } from "react";

export default function Intro() {
    const [showFullText, setShowFullText] = useState(false);

    const handleReadMoreClick = () => {
        setShowFullText(true);
    };

    const handleShowLessClick = () => {
        setShowFullText(false);
    };

    return (
        <div className="flex items-center justify-center w-full h-full mt-0 mb-8">
            <p className="text-md font-light text-center text-white md:text-lg w-3/5">
                <span className="text-4xl mb-12">👨🏻‍💻 About Me</span>
                <br />
                <br />
                {showFullText ? (
                    <>
                        <span className="text-red-400 hover:animate-pulse">Passionate</span>{" "}
                        &amp; forward-thinking software engineer and operations leader with a
                        strong technical foundation, complemented by{" "}
                        <span className="text-red-400 hover:animate-pulse">3+ years</span>{" "}
                        of experience in{" "}
                        <span className="text-yellow-400 hover:animate-pulse">
                            product management
                        </span>
                        , and{" "}
                        <span className="text-pink-400 hover:animate-pulse">
                            solutions architecture
                        </span>
                        . I'm deeply immersed in the development and management of{" "}
                        <span className="text-red-400 hover:animate-pulse">
                            AI-powered tools
                        </span>
                        , utilizing my proficiency in{" "}
                        <span className="text-white hover:animate-pulse">Next.js</span>,{" "}
                        <span className="text-green-400 hover:animate-pulse">Express.js</span>
                        ,{" "}
                        <span className="text-blue-400 hover:animate-pulse">React</span>,
                        and other relevant technologies. With my recent pivot back into
                        software engineering, I bring a unique mix of hands-on development
                        experience, big-picture strategic thinking, and a strong foundation
                        in{" "}
                        <span className="text-yellow-400 hover:animate-pulse">
                            product management
                        </span>
                        ,{" "}
                        <span className="text-pink-400 hover:animate-pulse">
                            solutions architecting
                        </span>
                        ,{" "}
                        <span className="text-red-400 hover:animate-pulse">
                            software development lifecycle
                        </span>
                        , and{" "}
                        <span className="text-indigo-400 hover:animate-pulse">
                            agile methodologies
                        </span>
                        .{" "}
                        <button
                            className="text-blue-500 font-medium underline hover:text-blue-600"
                            onClick={handleShowLessClick}
                        >
                            Show less
                        </button>
                    </>
                ) : (
                    <>
                        <span className="text-red-400 hover:animate-pulse">Passionate</span>{" "}
                        &amp; forward-thinking software engineer and operations leader with a
                        strong technical foundation, complemented by{" "}
                        <span className="text-red-400 hover:animate-pulse">3+ years</span>{" "}
                        of experience in{" "}
                        <span className="text-yellow-400 hover:animate-pulse">
                            product management
                        </span>
                        , and{" "}
                        <span className="text-pink-400 hover:animate-pulse">
                            solutions architecture. 
                        </span>
                        <br/>
                        <button
                            className="text-blue-500 font-medium underline hover:text-blue-600"
                            onClick={handleReadMoreClick}
                        >
                            Read more
                        </button>
                    </>
                )}
            </p>
        </div>
    );
}
