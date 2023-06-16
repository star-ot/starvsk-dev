export default function BackToTop() {
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="fixed bottom-0 right-0">
            <button
                className="flex items-center justify-center w-12 h-12 text-white rounded-tl-lg bg-zinc-500/50 hover:bg-zinc-300 hover:animate-pulse"
                onClick={scrollTop}
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                </svg>
            </button>
        </div>
    );
};