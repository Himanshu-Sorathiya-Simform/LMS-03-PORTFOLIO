import AboutMe from './components/AboutMe.tsx';
import Contact from './components/Contact.tsx';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Projects from './components/Projects.tsx';
import TechnicalFramework from './components/TechnicalFramework.tsx';

function App() {
	return (
		<div className='flex flex-col min-h-screen bg-slate-950'>
			<Header />

			<Hero />

			<AboutMe />

			<TechnicalFramework />

			<Projects />

			<Contact />
		</div>
	);
}

export default App;
