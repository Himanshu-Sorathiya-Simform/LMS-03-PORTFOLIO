import Navbar from './Navbar.tsx';

function Header() {
	return (
		<header className='flex justify-between items-center px-4 py-2 gap-2 bg-slate-950'>
			<h1 className='text-2xl font-bold uppercase text-emerald-600'>
				Himanshu Sorathiya
			</h1>

			<Navbar />
		</header>
	);
}

export default Header;
