"use client";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface Company {
    name: string;
    description: string[];
    positions: string[];
    duration: string;
    ticker?: string; // Add ticker property
}

const companies: Company[] = [
    {
        name: "OceanAI / OceanTech",
        description: ["Developing and managing OceanAI's AI-powered tools, including the OceanAI website, OceanAI's internal tools, and OceanAI's AI-powered chatbot.", "Closed over $3M in IT Hardware sales, including servers, workstations, and networking equipment.", "Managed and participated in the development of OceanTech's ERP system, including the development of the ERP's frontend, backend, and database. Decision maker in hiring, training, and managing OceanTech's development team.",
            "Managed our enterprise facility's general operations, from sales to shipping and receiving, and everything in between. Also served as the primary point of contact for our enterprise customers."],
        positions: ["Software Engineer", "Sales Executive", "Product Manager, ERP", "General Manager & Sales Executive"],
        duration: "May 2020 - Present",
    },
    {
        name: "Sezzle",
        description: ["Handled customer support for Sezzle's merchant and consumer base. Contributed to revamping the customer support team's internal tools and processes."],
        positions: ["Customer Success Associate"],
        duration: "Feb 2020 - May 2020",
        ticker: "SEZNL", // Add ticker for Sezzle
    },
    {
        name: "ASAP",
        description: ["Coordinated and managed mergers and acqusitions, as well as technology integrations for ASAP's mid-sized markets.", "Coordinated and managed the development of internal tools, evaluations, process improvement, and product applications for ASAP's customer support teams.", "Managed ASAP's internationally distributed customer support teams."],
        positions: ["Project Coordinator, Operational Excellence", "Project Manager, Customer Support", "Customer Support Manager"],
        duration: "May 2018 - Feb 2020",
        ticker: "WTRH", // Add ticker for ASAP
    },
    {
        name: "Target Corp",
        description: ["Managed daily operations of the A&A department, including inventory management, merchandising, and sales. Managed small teams of 2-3 people for special projects at our Downtown Minneapolis Corporate location."],
        positions: ["A&A Sales Team Member & Special Projects Team Member"],
        duration: "Apr 2016 - May 2018",
    }
    // Add more companies here
];

export default function ExperienceTabs() {
    const [activeTab, setActiveTab] = useState(0);
    const [stockPrices, setStockPrices] = useState<{ [ticker: string]: number }>({});
    const controls = useAnimation();

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    useEffect(() => {
        controls.start({ opacity: 1, scale: 1 });
    }, [activeTab, controls]);

    useEffect(() => {
        const fetchStockPrices = async () => {
            const tickers = companies
                .filter((company) => company.ticker)
                .map((company) => company.ticker!);
            const apiKey = process.env.ALPHA_VANTAGE_API_KEY; // Replace with your Alpha Vantage API key

            try {
                const prices: { [ticker: string]: number } = {};

                for (const ticker of tickers) {
                    const apiUrl = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${apiKey}`;
                    const response = await fetch(apiUrl);
                    const data = await response.json();
                    console.log(data);

                    const price = parseFloat(data["Global Quote"]["05. price"]);
                    const change = parseFloat(data["Global Quote"]["09. change"]);
                    prices[ticker] = price;

                    // Optional: You can store the change value as well
                    // prices[`${ticker}_change`] = change;
                }

                setStockPrices(prices);
            } catch (error) {
                console.error("Error fetching stock prices:", error);
            }
        };

        fetchStockPrices();
    }, []);

    const handleInView = (inView: boolean) => {
        if (!inView) {
            controls.start({ opacity: 0, scale: 0.9 });
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-full h-full pb-16">
            <div className="flex flex-col pt-8">
                <span className="text-4xl text-white">Professional Experience</span>
                <br />
                <br />
                <div className="flex items-center space-x-1 md:space-x-4 flex-wrap justify-center">
                    {companies.map((company, index) => (
                        <motion.button
                            key={index}
                            className={`text-xs md:text-lg font-medium py-2 px-2 rounded-tl-lg rounded-tr-lg transition-colors duration-300 focus:outline-none ${index === activeTab
                                ? "bg-gray-700 text-indigo-500"
                                : "bg-gray-900 text-gray-100"
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleTabClick(index)}
                        >
                            {company.name}
                        </motion.button>
                    ))}
                </div>
                <motion.div
                    className="flex flex-col items-start p-8 bg-gray-700 rounded-md shadow-lg text-left"
                    style={{ minWidth: "50vw", maxWidth: "800px" }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={controls}
                    transition={{ duration: 0.3 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    key={activeTab}
                    variants={{
                        hidden: { opacity: 0, scale: 0.9 },
                        visible: { opacity: 1, scale: 1 }
                    }}
                >
                    <div className="mb-4">
                        <p className="text-gray-100 italic">
                            {companies[activeTab].duration}
                        </p>
                        {companies[activeTab].positions.map((position, index) => (
                            <div key={index}>
                                <h2 className="text-2xl font-semibold mb-2 text-indigo-500">
                                    {position}
                                </h2>
                                <motion.p
                                    className="text-gray-100 mb-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    key={companies[activeTab].description[index]}
                                >
                                    {companies[activeTab].description[index]}
                                </motion.p>
                            </div>
                        ))}
                    </div>
                    {companies[activeTab].ticker && (
                        <div className="flex items-center text-gray-100 italic">
                            <p className="mr-2">
                                Ticker: {companies[activeTab].ticker}
                            </p>
                            <p className="mr-2">
                                Price: ${stockPrices[companies[activeTab].ticker] || "Loading..."}
                            </p>
                            {/* Optional: Display change value as well */}
                            {/* <p>
                                Change: {stockPrices[`${companies[activeTab].ticker}_change`] || "Loading..."}
                            </p> */}
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}    