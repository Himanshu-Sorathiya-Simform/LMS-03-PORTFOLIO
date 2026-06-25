import type { NavItem } from "../types/types.ts";

function Navbar({ navItems }: { navItems: NavItem[] }) {
	return (
		<nav>
			<ul className="flex items-center gap-1 sm:gap-2">
				{navItems.map((item, index) => (
					<li key={index}>
						<a
							href={item.href}
							className="rounded-full px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:bg-teal-500/10 hover:text-teal-500 sm:text-sm"
						>
							{item.label}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default Navbar;
