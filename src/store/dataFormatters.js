export const clientFormater = (developerData) => ({
	fullName: developerData[0]?.text,
	email: developerData[1]?.email,
	businessCategory: developerData[2]?.text,
	techNeeded: developerData[3]?.text,
	techNeeded2: developerData[4]?.choice?.label,
	devsNeeded: developerData[5]?.number,
});

export const developerFormatter = (developerData) => ({
	fullName: developerData[0]?.text,
	email: developerData[1]?.email,
	linkedIn: developerData[2]?.url,
	cleanCodeAnswer: developerData[3]?.text,
	nodeSkillLevel: developerData[4]?.number,
	bestSkill: developerData[5]?.text,
});