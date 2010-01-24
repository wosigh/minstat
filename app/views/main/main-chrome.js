opus.Gizmo({
	name: "main",
	dropTarget: true,
	type: "Palm.Mojo.Panel",
	h: "100%",
	styles: {
		zIndex: 2,
		clip: true
	},
	chrome: [
		{
			name: "scroller1",
			ontap: "",
			type: "Palm.Mojo.Scroller",
			l: 0,
			t: "50",
			h: "100%",
			styles: {
				cursor: "move",
				overflow: "hidden"
			},
			controls: [
				{
					name: "header1",
					label: "MinStat - Minutes & SMS Counter",
					type: "Palm.Mojo.Header",
					l: 0,
					t: "0"
				},
				{
					name: "group1",
					dropTarget: true,
					label: "Minutes",
					type: "Palm.Mojo.Group",
					l: 0,
					t: "55",
					h: 100,
					controls: [
						{
							name: "panel1",
							layoutKind: "hbox",
							dropTarget: true,
							type: "Palm.Mojo.Panel",
							l: 0,
							t: 0,
							h: 60,
							controls: [
								{
									name: "picture1",
									src: "icon_call.png",
									autoSize: false,
									type: "Palm.Picture",
									l: 69,
									w: "70",
									t: 0,
									h: 51
								},
								{
									name: "lblMinutes",
									ontap: "",
									modelName: "modStatus",
									label: "0/0",
									labelPropertyName: "lblSMS",
									type: "Palm.Mojo.Label",
									l: 114,
									r: 135,
									w: "80%",
									t: "0",
									b: 16,
									h: 29,
									vAlign: "center",
									styles: {
										textAlign: "center",
										oneLine: true
									}
								},
								{
									name: "progrMinutes",
									modelName: "modProgrMins",
									progress: "0.1",
									progressPropertyName: "progrMinutes",
									type: "Palm.Mojo.ProgressBar",
									l: 259,
									t: 0,
									b: 26,
									hAlign: "center",
									vAlign: "center"
								},
								{
									name: "modMinSmiley",
									modelName: "modMinSmiley",
									label: "",
									type: "Palm.Mojo.Label",
									l: 270,
									w: "25%",
									t: 0,
									h: 29,
									hAlign: "center",
									vAlign: "center"
								},
								{
									name: "statusMinutes",
									showing: false,
									type: "Palm.Mojo.StatusIndicator",
									l: 266,
									w: "30%",
									t: 0,
									vAlign: "center"
								}
							]
						},
						{
							name: "row1",
							dropTarget: true,
							rowType: "last",
							type: "Palm.Mojo.Row",
							l: 0,
							t: 60,
							h: "auto"
						}
					]
				},
				{
					name: "group2",
					dropTarget: true,
					label: "SMS",
					type: "Palm.Mojo.Group",
					l: 0,
					t: 94,
					controls: [
						{
							name: "panel2",
							layoutKind: "hbox",
							dropTarget: true,
							type: "Palm.Mojo.Panel",
							l: 0,
							t: 0,
							h: 60,
							controls: [
								{
									name: "picture3",
									src: "icon_sms.png",
									autoSize: false,
									type: "Palm.Picture",
									l: -1,
									w: 70,
									t: 0,
									h: 57
								},
								{
									name: "lblSMS",
									modelName: "modStatus",
									label: "0/0",
									labelPropertyName: "lblMinutes",
									type: "Palm.Mojo.Label",
									l: 60,
									w: "80%",
									t: 0,
									h: "60",
									styles: {
										textAlign: "center",
										oneLine: true
									}
								},
								{
									name: "progrSMS",
									ontap: "progressBar2Tap",
									modelName: "modProgrSMS",
									progress: "0.1",
									progressPropertyName: "progrSMS",
									type: "Palm.Mojo.ProgressBar",
									l: 167,
									t: 0,
									vAlign: "center",
									styles: {
										textColor: "",
										bgColor: "",
										borderColor: "",
										bgImage: ""
									}
								},
								{
									name: "lblSMSSmile",
									modelName: "modSMSSmiley",
									label: "",
									type: "Palm.Mojo.Label",
									l: 301,
									w: "25%",
									t: 0,
									h: 29,
									hAlign: "center",
									vAlign: "center"
								},
								{
									name: "statusSMS",
									showing: false,
									type: "Palm.Mojo.StatusIndicator",
									l: 302,
									w: "30%",
									t: 0,
									vAlign: "center",
									styles: {
										bgColor: "",
										textColor: ""
									}
								}
							]
						}
					]
				},
				{
					name: "panel3",
					layoutKind: "hbox",
					dropTarget: true,
					type: "Palm.Mojo.Panel",
					l: 0,
					t: 244,
					h: 60,
					controls: [
						{
							name: "btnSettings",
							ontap: "btnSettingsTap",
							label: "settings",
							type: "Palm.Mojo.Button",
							l: -1,
							w: "50%",
							t: 0
						},
						{
							name: "btnRefresh",
							ontap: "btnRefreshTap",
							label: "refresh",
							type: "Palm.Mojo.Button",
							l: 0,
							w: "50%",
							t: 0
						}
					]
				},
				{
					name: "lblStatus",
					label: "",
					type: "Palm.Mojo.Label",
					l: 0,
					w: 304,
					t: 299,
					h: 21,
					hAlign: "center",
					styles: {
						fontSize: "12px"
					}
				},
				{
					name: "divider4",
					label: "Credits",
					type: "Palm.Mojo.Divider",
					l: 0,
					t: 412
				},
				{
					name: "htmlCredits",
					content: "<table><tr><td><font size=\"2\">&copy; 2010 by Tobias Hlavka&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font></td><td><form action=\"https://www.paypal.com/cgi-bin/webscr\" method=\"post\"><input type=\"hidden\"name=\"cmd\" value=\"_s-xclick\">\n<input type=\"hidden\" name=\"hosted_button_id\"value=\"11298589\">\n<input type=\"image\"src=\"https://www.paypal.com/en_US/i/btn/btn_donate_SM.gif\"border=\"0\" name=\"submit\" alt=\"PayPal - The safer, easier way to pay online!\">\n<img alt=\"\" border=\"0\"src=\"https://www.paypal.com/de_DE/i/scr/pixel.gif\"width=\"1\" height=\"1\">\n</form></td></tr></table><font size=\"2\">If you enjoy this application and find it useful, please consider a small donation to the developer for his efforts - just think about how much money you save by having this app ;-)  \n</font>\n<hr>\n<font size=\"2\">\n  \"Milky\"-Icons by <a href=\"http://min.frexy.com/article/milky_a_free_\n  vector_icon_set_part_1/\">MinTran</a><br>\n  Visit <a href=\"http://forums.precentral.net/homebrew-apps/226237-minstat.html\">this Precentral-Thread</a> for further information.<br><br>\n  The above values are for information only and without responsibility - they can be really really wrong if you e.g. did fully erase your device less than one month ago.\n</font>\n",
					type: "Palm.Mojo.Html",
					l: 0,
					w: "95%",
					t: 419,
					b: "",
					h: 235,
					hAlign: "center"
				}
			]
		}
	]
});