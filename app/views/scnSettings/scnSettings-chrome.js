opus.Gizmo({
	name: "scnSettings",
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
			t: 452,
			h: "100%",
			styles: {
				cursor: "move",
				overflow: "hidden"
			},
			controls: [
				{
					name: "header1",
					label: "MinStat - Settings",
					type: "Palm.Mojo.Header",
					l: 0,
					t: -1
				},
				{
					name: "intPickPayroll",
					ontap: "intPickPayrollTap",
					modelName: "modSettings",
					value: 9,
					valuePropertyName: "payrollDay",
					label: "Billing day",
					min: "1",
					max: "31",
					onchange: "intPickPayrollChange",
					type: "Palm.Mojo.IntegerPicker",
					l: 0,
					t: 381,
					styles: {
						textAlign: "right"
					}
				},
				{
					name: "intPickSMS",
					ontap: "",
					modelName: "modSettings",
					value: 100,
					valuePropertyName: "freeSMS",
					label: "Monthly included SMS",
					max: "1000",
					onchange: "intPickSMSChange",
					type: "Palm.Mojo.IntegerPicker",
					l: 0,
					t: 441,
					styles: {
						textAlign: "right"
					}
				},
				{
					name: "intPickMin",
					ontap: "",
					modelName: "modSettings",
					value: 100,
					valuePropertyName: "freeMinutes",
					label: "Monthly included Mins",
					max: "1000",
					onchange: "intPickMinChange",
					type: "Palm.Mojo.IntegerPicker",
					l: 0,
					t: 501,
					styles: {
						textAlign: "right"
					}
				},
				{
					name: "panel3",
					layoutKind: "hbox",
					dropTarget: true,
					type: "Palm.Mojo.Panel",
					l: 0,
					t: 566,
					h: 60,
					controls: [
						{
							name: "integerPicker1",
							ontap: "",
							modelName: "modSettings",
							value: 60,
							valuePropertyName: "clockrateFirst",
							label: "Clockrate",
							min: "1",
							max: "60",
							onchange: "integerPicker1Change",
							type: "Palm.Mojo.IntegerPicker",
							l: 0,
							t: 0,
							styles: {
								textAlign: "right"
							}
						},
						{
							name: "integerPicker2",
							modelName: "modSettings",
							value: 60,
							valuePropertyName: "clockrateFurther",
							label: "/",
							min: "1",
							max: "60",
							onchange: "integerPicker2Change",
							type: "Palm.Mojo.IntegerPicker",
							l: 220,
							w: 100,
							t: 0,
							styles: {
								textAlign: "right"
							}
						}
					]
				},
				{
					name: "panel4",
					layoutKind: "hbox",
					dropTarget: true,
					type: "Palm.Mojo.Panel",
					l: "12",
					w: "308",
					t: 626,
					h: 60,
					styles: {
						textAlign: ""
					},
					controls: [
						{
							name: "label1",
							label: "INCLUDE INCOMING SMS",
							type: "Palm.Mojo.Label",
							l: 6,
							w: 216,
							t: 0,
							b: "",
							h: 24,
							hAlign: "right",
							vAlign: "center",
							styles: {
								textAlign: "left",
								fontSize: "14px",
								bgColor: "",
								textColor: "#1E73BC"
							}
						},
						{
							name: "toggleInAndOut",
							ontap: "toggleInAndOutTap",
							modelName: "modSettings",
							value: true,
							valuePropertyName: "countInAndOut",
							trueValue: true,
							falseValue: false,
							trueLabel: "Yes",
							falseLabel: "No",
							onchange: "toggleInAndOutChange",
							type: "Palm.Mojo.ToggleButton",
							l: 0,
							t: 0,
							styles: {
								textAlign: "left"
							}
						}
					]
				},
				{
					name: "lblVersion",
					label: "",
					type: "Palm.Mojo.Label",
					l: 0,
					w: 296,
					t: 398,
					h: 19,
					hAlign: "center",
					vAlign: "center",
					styles: {
						fontSize: "12px",
						textAlign: "center"
					}
				},
				{
					name: "button1",
					ontap: "button1Tap",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 369
				},
				{
					name: "divider4",
					showing: false,
					label: "Credits",
					type: "Palm.Mojo.Divider",
					l: 0,
					t: 562
				},
				{
					name: "html1",
					showing: false,
					content: "<font size=\"2\">\n  If you enjoy this application and find it useful, please consider a small donation to the developer for his efforts - just think about how much money you save by having this app ;-)  \n</font><br><br>\n  <form action=\"https://www.paypal.com/cgi-bin/webscr\" method=\"post\"><input type=\"hidden\" name=\"cmd\" value=\"_s-xclick\">\n<input type=\"hidden\" name=\"hosted_button_id\" value=\"11298589\">\n<input type=\"image\" src=\"https://www.paypal.com/en_US/i/btn/btn_donate_SM.gif\" border=\"0\" name=\"submit\" alt=\"PayPal - The safer, easier way to pay online!\">\n<img alt=\"\" border=\"0\" src=\"https://www.paypal.com/de_DE/i/scr/pixel.gif\" width=\"1\" height=\"1\">\n</form>\n<hr>\n<font size=\"2\">\n&copy; 2010 by Tobias Hlavka<br>\n  \"Milky\"-Icons by <a href=\"http://min.frexy.com/article/milky_a_free_\n  vector_icon_set_part_1/\">MinTran</a><br>\n  Visit <a href=\"http://forums.precentral.net/homebrew-apps/226237-minstat.html\">this Precentral-Thread</a> for further information.<br><br>\n  The above values are for information only and without responsibility - they can be really really wrong if you e.g. did fully erase your device less than one month ago.\n</font>",
					type: "Palm.Mojo.Html",
					l: 9,
					w: 305,
					t: 595,
					h: 275
				}
			]
		}
	]
});