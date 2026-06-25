import ContactForm from './ContactForm.tsx';
import ContactInfo from './ContactInfor.tsx';

function Contact() {
	return (
		<section
			id='contact'
			className='bg-slate-950 px-6 py-20 text-slate-100 md:px-12'>
			<div className='mx-auto max-w-6xl'>
				<div className='mb-12 text-center'>
					<h2 className='text-3xl font-bold tracking-tight text-white md:text-4xl'>
						Get In Touch
					</h2>

					<p className='mt-2 text-sm text-slate-400'>
						Have a question or want to work together? Drop a message
						below.
					</p>
				</div>

				<div className='flex flex-col gap-12 md:flex-row md:items-start'>
					<ContactInfo />

					<ContactForm />
				</div>
			</div>
		</section>
	);
}

export default Contact;
