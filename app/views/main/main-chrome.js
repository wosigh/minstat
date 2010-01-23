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
					label: "Minutes used",
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
					label: "SMS (parts) sent",
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
					name: "btnRefresh",
					ontap: "btnRefreshTap",
					label: "refresh",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 239
				},
				{
					name: "lblStatus",
					label: "",
					type: "Palm.Mojo.Label",
					l: 0,
					w: 304,
					t: 299,
					h: 48,
					hAlign: "center"
				},
				{
					name: "divider1",
					label: "Settings",
					type: "Palm.Mojo.Divider",
					l: 0,
					t: 299
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
							ontap: "integerPicker1Tap",
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
					name: "lblVersion",
					label: "MinStat 0 - MinstatService 0",
					type: "Palm.Mojo.Label",
					l: 0,
					t: 561,
					h: 24,
					hAlign: "center",
					vAlign: "center",
					styles: {
						textAlign: "center",
						fontSize: "14px"
					}
				},
				{
					name: "divider4",
					label: "Credits",
					type: "Palm.Mojo.Divider",
					l: 0,
					t: 562
				},
				{
					name: "html1",
					content: "<font size=\"2\">\n  If you enjoy this application and find it useful, please consider a small donation to the developer for his efforts - just think about how much money you save by having this app ;-)  \n</font><br><br>\n  <form action=\"https://www.paypal.com/cgi-bin/webscr\" method=\"post\"><input type=\"hidden\" name=\"cmd\" value=\"_s-xclick\">\n<input type=\"hidden\" name=\"hosted_button_id\" value=\"11298589\">\n<input type=\"image\" src=\"https://www.paypal.com/en_US/i/btn/btn_donate_SM.gif\" border=\"0\" name=\"submit\" alt=\"PayPal - The safer, easier way to pay online!\">\n<img alt=\"\" border=\"0\" src=\"https://www.paypal.com/de_DE/i/scr/pixel.gif\" width=\"1\" height=\"1\">\n</form>\n<hr>\n<font size=\"2\">\n&copy; 2010 by Tobias Hlavka<br>\n  \"Milky\"-Icons by <a href=\"http://min.frexy.com/article/milky_a_free_\n  vector_icon_set_part_1/\">MinTran</a><br>\n  Visit Precentral for further information.<br><br>\n  The above values are for information only and without responsibility - they can be really really wrong if you e.g. did fully erase your device less than one month ago.\n</font>",
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