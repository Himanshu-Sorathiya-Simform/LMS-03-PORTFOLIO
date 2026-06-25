import { useEffect, useState } from "react";
import AboutMe from "./components/AboutMe.tsx";
import Contact from "./components/Contact.tsx";
import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import Projects from "./components/Projects.tsx";
import TechnicalFramework from "./components/TechnicalFramework.tsx";
import type { PortfolioSchema } from "./types/types.ts";

function App() {
	const [portfolioData, setPortfolioData] = useState<PortfolioSchema | null>(null);

	useEffect(() => {
		async function fetchProfile() {
			try {
				const response = await fetch("/profile.json");

				const data = await response.json();

				setPortfolioData(data);
			} catch (error) {
				console.error("Error loading portfolio data:", error);
			}
		}

		fetchProfile();
	}, []);

	if (!portfolioData) {
		return (
			<div className="flex min-h-screen items-center justify-center bg-slate-950 text-teal-500">
				Loading Portfolio...
			</div>
		);
	}

	return (
		<div className="flex min-h-screen flex-col bg-slate-950">
			<Header
				name={portfolioData.profile.name}
				navItems={portfolioData.navigation}
			/>

			<Hero profile={portfolioData.profile} />

			<AboutMe paragraphs={portfolioData.profile.aboutParagraphs} />

			<TechnicalFramework skills={portfolioData.skills} />

			<Projects projects={portfolioData.projects} />

			<Contact
				contactInfo={portfolioData.contactInfo}
				socialLinks={portfolioData.socialLinks}
			/>
		</div>
	);
}

export default App;
