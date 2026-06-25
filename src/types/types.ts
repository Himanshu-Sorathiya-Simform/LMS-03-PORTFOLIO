interface NavItem {
	label: string;
	href: string;
}

interface SkillItem {
	name: string;
	category: string;
}

interface ProjectItem {
	title: string;
	description: string;
	tags: string[];
	liveUrl: string;
	sourceUrl: string;
}

interface ContactInfoItem {
	label: string;
	content: string;
	isPrimary: boolean;
}

interface SocialLinkItem {
	label: string;
	href: string;
}

interface ProfileData {
	name: string;
	role: string;
	title: string;
	heroTagline: string;
	aboutParagraphs: string[];
}

interface PortfolioSchema {
	profile: ProfileData;
	navigation: NavItem[];
	skills: SkillItem[];
	projects: ProjectItem[];
	contactInfo: ContactInfoItem[];
	socialLinks: SocialLinkItem[];
}

export type {
	ContactInfoItem,
	NavItem,
	PortfolioSchema,
	ProfileData,
	ProjectItem,
	SkillItem,
	SocialLinkItem,
};
