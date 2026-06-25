function AboutMe() {
	return (
		<section
			id='about'
			className='bg-slate-950 px-6 py-20 text-slate-100 md:px-12'>
			<div className='mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:gap-16'>
				<div className='md:w-1/3'>
					<div className='sticky top-10'>
						<h2 className='text-3xl font-bold tracking-tight text-white md:text-4xl'>
							About Me
						</h2>

						<div className='mt-4 h-1 w-12 bg-teal-500'></div>
					</div>
				</div>

				<div className='flex flex-col gap-6 text-base leading-relaxed text-slate-400 md:w-2/3 md:text-lg'>
					<p>
						I am a Frontend Engineer currently completing a 5-month
						internship, where I focus on building responsive web systems
						with React, TypeScript, and Vite. My approach centers on
						clean architecture, scalable state management, and solid data
						validation using tools like Redux, React Router, React Hook
						Form, Zod, and Tailwind CSS.
					</p>

					<p>
						I prioritize writing predictable, highly maintainable code
						that bridges the gap between precise UI designs and
						performance-optimized browser execution.
					</p>
				</div>
			</div>
		</section>
	);
}

export default AboutMe;
