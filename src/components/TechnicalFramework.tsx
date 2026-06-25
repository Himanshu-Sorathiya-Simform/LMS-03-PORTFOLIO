import type { SkillItem } from "../types/types.ts";

function TechnicalFramework({ skills }: { skills: SkillItem[] }) {
	return (
		<section className="bg-slate-950 px-6 py-20 text-slate-100 md:px-12">
			<div className="mx-auto max-w-6xl">
				<h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
					Technical Framework
				</h2>

				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{skills.map((skill, index) => (
						<div
							key={index}
							className="group rounded-xl border border-slate-900 bg-[#0c1329] p-5 transition-all duration-200 hover:border-teal-500/30 hover:bg-[#111a36]"
						>
							<span className="text-[10px] font-bold tracking-widest text-slate-500 group-hover:text-teal-500">
								{skill.category}
							</span>

							<h3 className="mt-1 text-lg font-semibold text-slate-200 group-hover:text-white">
								{skill.name}
							</h3>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default TechnicalFramework;
