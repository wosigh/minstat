opus.depends({
	paths: {
		Ares: "/Ares",
		opus: opus.args.apache ? "$Ares/foss/opus/opus" : "/opus/opus",
		Palm: opus.args.apache ? "$Ares/ide" : "/ide",
		mojo: "/usr/palm/frameworks/mojo/",
		MojoLib: "$Palm/library/Mojo/"
	},
	nobuild: [
		"$mojo/mojo.js"
	],
	build: [
		"$opus/opus",
		"$MojoLib/Palm-Mojo"
	]
});