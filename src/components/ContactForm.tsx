function ContactForm() {
	return (
		<div className='rounded-xl border border-slate-900 bg-[#0c1329] p-8 md:w-2/3'>
			<form
				className='flex flex-col gap-6'
				onSubmit={(e) => e.preventDefault()}>
				<div className='flex flex-col gap-2'>
					<label className='block text-xs font-bold tracking-widest text-slate-400 uppercase'>
						Name
					</label>

					<input
						type='text'
						placeholder='Krish Patel'
						className=' w-full rounded-lg border border-slate-900 bg-slate-950 p-3 text-sm text-slate-200 placeholder-slate-600 outline-none transition-colors focus:border-teal-500/50'
					/>
				</div>

				<div className='flex flex-col gap-2'>
					<label className='block text-xs font-bold tracking-widest text-slate-400 uppercase'>
						Email
					</label>

					<input
						type='email'
						placeholder='krish@example.com'
						className=' w-full rounded-lg border border-slate-900 bg-slate-950 p-3 text-sm text-slate-200 placeholder-slate-600 outline-none transition-colors focus:border-teal-500/50'
					/>
				</div>

				<div className='flex flex-col gap-2'>
					<label className='block text-xs font-bold tracking-widest text-slate-400 uppercase'>
						Message
					</label>

					<textarea
						rows={5}
						placeholder='Write your message here...'
						className='w-full resize-none rounded-lg border border-slate-900 bg-slate-950 p-3 text-sm text-slate-200 placeholder-slate-600 outline-none transition-colors focus:border-teal-500/50'></textarea>
				</div>

				<button
					type='submit'
					className='inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-teal-500 py-3 font-semibold text-slate-950 transition-colors hover:bg-teal-400'>
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
							x1='22'
							y1='2'
							x2='11'
							y2='13'></line>

						<polygon points='22 2 15 22 11 13 2 9 22 2'></polygon>
					</svg>

					<span>Send</span>
				</button>
			</form>
		</div>
	);
}

export default ContactForm;
