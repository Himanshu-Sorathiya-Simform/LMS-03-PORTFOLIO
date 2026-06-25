export default function HeroCTA() {
	return (
		<div className='mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row'>
			<a
				href='#projects'
				className='inline-flex items-center justify-center gap-2 rounded-lg bg-teal-500 px-6 py-3 font-semibold text-black transition hover:bg-teal-600'>
				<span>View My Work</span>

				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='16'
					height='16'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					stroke-width='2.5'
					stroke-linecap='round'
					stroke-linejoin='round'>
					<line
						x1='7'
						y1='17'
						x2='17'
						y2='7'></line>

					<polyline points='7 7 17 7 17 17'></polyline>
				</svg>
			</a>

			<a
				href='#contact'
				className='inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-900 px-6 py-3 font-semibold text-slate-400 transition hover:bg-slate-800'>
				Get In Touch
			</a>
		</div>
	);
}
