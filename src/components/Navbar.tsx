function Navbar() {
	return (
		<nav>
			<ul className='flex items-center gap-1 sm:gap-2'>
				<li>
					<a
						href='#'
						className='rounded-full px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:bg-teal-500/10 hover:text-teal-500 sm:text-sm'>
						Home
					</a>
				</li>

				<li>
					<a
						href='#about'
						className='rounded-full px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:bg-teal-500/10 hover:text-teal-500 sm:text-sm'>
						About
					</a>
				</li>

				<li>
					<a
						href='#projects'
						className='rounded-full px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:bg-teal-500/10 hover:text-teal-500 sm:text-sm'>
						Projects
					</a>
				</li>

				<li>
					<a
						href='#contact'
						className='rounded-full px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:bg-teal-500/10 hover:text-teal-500 sm:text-sm'>
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
