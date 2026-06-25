import type { NavItem } from "../types/types.ts";
import Navbar from "./Navbar.tsx";

function Header({ name, navItems }: { name: string; navItems: NavItem[] }) {
	return (
		<header className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-900 bg-slate-950/80 px-6 py-4 backdrop-blur-sm">
			<h1 className="text-xl font-bold uppercase tracking-wider text-teal-500 sm:text-2xl">
				{name}
			</h1>

			<Navbar navItems={navItems} />
		</header>
	);
}

export default Header;
