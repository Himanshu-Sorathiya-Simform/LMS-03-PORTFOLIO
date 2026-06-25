import HeroCTA from './HeroCTA.tsx';
import IntroHeader from './IntroHeader.tsx';

function Hero() {
	return (
		<section className='flex min-h-screen flex-col items-center justify-center bg-slate-900 gap-4 px-4 py-20 text-center font-sans'>
			<IntroHeader />

			<HeroCTA />
		</section>
	);
}

export default Hero;
