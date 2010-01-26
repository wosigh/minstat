opus.depends({
	paths: {
		"Ares": "/Ares",
		"mojo": "/usr/palm/frameworks/mojo/",
		"dojo": "/dojo/dojo",
		"opus": "$Ares/foss/opus/opus",
		"Palm": "$Ares/ide",
		"MojoLib": "$Palm/library/Mojo/",
		"Palm-Mojo": "$MojoLib/",
		"opus-core": "$opus/",
		"opus-controls": "$opus/library/controls/"
	},
	nobuild: [
		"$mojo/mojo.js",
		"app-build.js"
	]
});