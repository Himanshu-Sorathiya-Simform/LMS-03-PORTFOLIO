function Navbar() {
	return (
		<nav>
			<ul className='flex gap-4'>
				<li>
					<a
						href='#'
						className='text-white rounded-full  transition hover:bg-teal-500/20 hover:text-teal-500 px-3 py-1.5'>
						Home
					</a>
				</li>
				<li>
					<a
						href='#about'
						className='text-white rounded-full  transition hover:bg-teal-500/20 hover:text-teal-500 px-3 py-1.5'>
						About
					</a>
				</li>
				<li>
					<a
						href='#projects'
						className='text-white rounded-full  transition hover:bg-teal-500/20 hover:text-teal-500 px-3 py-1.5'>
						Projects
					</a>
				</li>
				<li>
					<a
						href='#contact'
						className='text-white rounded-full  transition hover:bg-teal-500/20 hover:text-teal-500 px-3 py-1.5'>
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
