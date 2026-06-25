function ContactInfo() {
	const infoCards = [
		{
			label: 'Direct Email',
			content: 'himanshu.sorathiya@simformsolutions.com',
			isPrimary: true,
		},
		{
			label: 'Location',
			content: 'Surat, Gujarat, India',
		},
	];

	const socialLinks = [
		{ label: 'GitHub', href: '#' },
		{ label: 'LinkedIn', href: '#' },
	];

	return (
		<div className='flex flex-col gap-6 md:w-1/3'>
			{infoCards.map((card, index) => (
				<div
					key={index}
					className='rounded-xl flex flex-col gap-1 border border-slate-900 bg-[#0c1329] p-6'>
					<span
						className={`text-[10px] font-bold tracking-widest uppercase ${card.isPrimary ? 'text-teal-500' : 'text-slate-500'}`}>
						{card.label}
					</span>
					<p className='font-semibold text-slate-200'>{card.content}</p>
				</div>
			))}

			<div className='rounded-xl flex flex-col gap-2 border border-slate-900 bg-[#0c1329] p-6'>
				<span className='text-[10px] font-bold tracking-widest text-slate-500 uppercase'>
					Profiles
				</span>
				<div className='flex gap-4 text-sm font-semibold'>
					{socialLinks.map((link, index) => (
						<a
							key={index}
							href={link.href}
							className='text-slate-400 hover:text-teal-500 transition-colors'>
							{link.label}
						</a>
					))}
				</div>
			</div>
		</div>
	);
}

export default ContactInfo;
