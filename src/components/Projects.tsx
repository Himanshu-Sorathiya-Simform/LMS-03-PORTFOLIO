function Projects() {
	const projects = [
		{
			title: 'react-kit',
			description:
				'An opinionated npm package delivering robust custom hooks and utility components for sorting, pagination, debouncing, and throttling. Features a centralized modal state manager built with React Context.',
			tags: ['React', 'TypeScript', 'NPM Package', 'State Management'],
		},
		{
			title: 'React Router Clone',
			description:
				'A lightweight implementation of client-side routing supporting layout routes, nested route structures, programmatic navigation via hooks, and declarative routing components like Link and Navigate.',
			tags: ['React', 'TypeScript', 'NPM Package', 'Routing'],
		},
		{
			title: 'OmniVal',
			description:
				'A functional runtime schema validation library mimicking Zod. Supports composable, chaining APIs for structural type validation and strict static type inference.',
			tags: ['TypeScript', 'NPM Package', 'Validation'],
		},
		{
			title: 'E-Commerce Frontend',
			description:
				'A responsive storefront integrated with Axios for data fetching. Built with React Hook Form and Zod for absolute form safety, protected dashboard routing, and synchronized URL search filters.',
			tags: ['React', 'TypeScript', 'Axios', 'React Hook Form', 'Zod'],
		},
		{
			title: 'Memory Card Game',
			description:
				'An interactive browser game built to master programmatic state resets, matching pair algorithms, and fluid layout animations utilizing strict type definitions.',
			tags: ['React', 'TypeScript', 'Tailwind CSS'],
		},
	];

	return (
		<section
			id='projects'
			className='bg-slate-950 px-6 py-20 text-slate-100 md:px-12'>
			<div className='mx-auto max-w-6xl'>
				<div className='mb-12'>
					<h2 className='text-3xl font-bold tracking-tight text-white md:text-4xl'>
						Projects
					</h2>

					<div className='mt-4 h-1 w-12 bg-teal-500'></div>
				</div>

				<div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
					{projects.map((project, index) => (
						<div
							key={index}
							className='flex flex-col justify-between rounded-xl border border-slate-900 bg-[#0c1329] p-6 transition-all duration-200 hover:border-teal-500/30'>
							<div>
								<h3 className='text-xl font-bold text-slate-100'>
									{project.title}
								</h3>

								<p className='mt-3 text-sm leading-relaxed text-slate-400'>
									{project.description}
								</p>

								<div className='mt-6 flex flex-wrap gap-2'>
									{project.tags.map((tag, tIndex) => (
										<span
											key={tIndex}
											className='rounded bg-slate-900 px-2 py-1 text-xs font-medium text-slate-400 border border-slate-800'>
											{tag}
										</span>
									))}
								</div>
							</div>

							<div className='mt-8 flex gap-4 text-sm font-semibold'>
								<a
									href='#'
									className='text-teal-500 hover:text-teal-400 transition-colors'>
									Live Production
								</a>

								<a
									href='#'
									className='text-slate-400 hover:text-slate-200 transition-colors'>
									Source Code
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Projects;
