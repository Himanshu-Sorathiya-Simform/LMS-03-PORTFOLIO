import AboutMe from './components/AboutMe.tsx';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';

function App() {
	return (
		<div className='flex flex-col min-h-screen h-screen'>
			<Header />

			<Hero />

			<AboutMe />
		</div>
	);
}

export default App;
