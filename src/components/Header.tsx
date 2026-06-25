import Navbar from './Navbar.tsx';

function Header() {
	return (
		<header className='sticky top-0 z-50 flex items-center justify-between border-b border-slate-900 bg-slate-950/80 px-6 py-4 backdrop-blur-sm'>
			<h1 className='text-xl font-bold uppercase tracking-wider text-teal-500 sm:text-2xl'>
				Himanshu Sorathiya
			</h1>

			<Navbar />
		</header>
	);
}

export default Header;
