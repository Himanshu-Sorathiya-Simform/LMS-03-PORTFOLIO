function ContactInfo() {
	return (
		<div className='flex flex-col gap-6 md:w-1/3'>
			<div className='rounded-xl flex flex-col gap-1 border border-slate-900 bg-[#0c1329] p-6'>
				<span className='text-[10px] font-bold tracking-widest text-teal-500 uppercase'>
					Direct Email
				</span>

				<p className=' font-semibold text-slate-200'>
					himanshu.sorathiya@simformsolutions.com
				</p>
			</div>

			<div className='rounded-xl flex flex-col gap-1 border border-slate-900 bg-[#0c1329] p-6'>
				<span className='text-[10px] font-bold tracking-widest text-slate-500 uppercase'>
					Location
				</span>

				<p className=' font-semibold text-slate-200'>
					Surat, Gujarat, India
				</p>
			</div>

			<div className='rounded-xl flex flex-col gap-2 border border-slate-900 bg-[#0c1329] p-6'>
				<span className='text-[10px] font-bold tracking-widest text-slate-500 uppercase'>
					Profiles
				</span>

				<div className='flex gap-4 text-sm font-semibold'>
					<a
						href='#'
						className='text-slate-400 hover:text-teal-500 transition-colors'>
						GitHub
					</a>

					<a
						href='#'
						className='text-slate-400 hover:text-teal-500 transition-colors'>
						LinkedIn
					</a>
				</div>
			</div>
		</div>
	);
}

export default ContactInfo;
