import AboutMe from './components/AboutMe.tsx';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import TechnicalFramework from './components/TechnicalFramework.tsx';

function App() {
	return (
		<div className='flex flex-col min-h-screen bg-slate-950'>
			<Header />

			<Hero />

			<AboutMe />

			<TechnicalFramework />
		</div>
	);
}

export default App;
