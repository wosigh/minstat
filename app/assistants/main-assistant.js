function MainAssistant(argFromPusher) {
// TODO
// browser-like refresh button
// refresh on active
}
var clockrateFirst;
var clockrateFurther;
var freeMinutes; 
var freeSMS;
var payrollDay;
var countInAndOut;

MainAssistant.prototype = {
	setup: function() {
		Ares.setupSceneAssistant(this);
		this.btnRefreshTap();
	},

	cleanup: function() {
		Ares.cleanupSceneAssistant(this);
	},

	saveSettings: function(event, inSender) {
		myCookie = new Mojo.Model.Cookie('settings');
		var myObject = {"clockrateFirst": this.clockrateFirst,
										"clockrateFurther": this.clockrateFurther,
			 							"freeMinutes": this.freeMinutes,
										"freeSMS": this.freeSMS,
										"payrollDay": this.payrollDay,
										"countInAndOut": this.countInAndOut
};
		myCookie.put(myObject);
	},

	loadSettings: function(event, inSender) {
		myCookie = new Mojo.Model.Cookie('settings');
		var myObject = myCookie.get();
		if (myObject !== undefined) {
			this.clockrateFirst = myObject.clockrateFirst;
			this.clockrateFurther = myObject.clockrateFurther;
			this.freeMinutes = myObject.freeMinutes;
			this.freeSMS = myObject.freeSMS;
			this.payrollDay = myObject.payrollDay;
			this.countInAndOut = myObject.countInAndOut;
		} else {
			this.clockrateFirst = 60;
			this.clockrateFurther = 60;
			this.freeMinutes = 100;
			this.freeSMS = 100;
			this.payrollDay = 1;
			this.countInAndOut = false;
		}
	},

	btnRefreshTap: function(event, inSender) {

//TODO: read from service and from appinfo.json
		this.getServiceVersion();
		this.loadSettings();
		this.loadFromService();
	},
	intPickSMSChange: function(event, inSender) {
		this.saveSettings();
		this.loadFromService();
	},
	intPickMinChange: function(event, inSender) {
		this.saveSettings();
		this.loadFromService();
	},
	datePickChange: function(event, inSender) {
		this.saveSettings();
		this.loadFromService();
	},
	intPickClockrateFirstChange: function(event, inSender) {
		this.saveSettings();
		this.loadFromService();
	},
	intPickClockrateFurtherChange: function(event, inSender) {
		this.saveSettings();
		this.loadFromService();
	},

	loadFromService: function(event, inSender) {
		this.controller.serviceRequest('palm://de.hlavka.minstatservice', {
        method: 'getSQLData',
        parameters: {subscribe:false, "cashday":this.payrollDay,"clockrateFirst":this.clockrateFirst,"clockrateFurther":this.clockrateFurther},
        onSuccess: function(response) {
							var cntSMS;
							if (this.countInAndOut === true) {
								cntSMS = response.SMS+response.incomingSMS;
							} else {
								cntSMS = response.SMS;
							}

							var cntMins = response.minutes;

							cntMins=this.roundNumber(cntMins,2);

							this.modProgrMins.progrMinutes = (cntMins/this.freeMinutes);
							this.modProgrSMS.progrSMS = (cntSMS/this.freeSMS);
							this.controller.modelChanged(this.modProgrSMS,this);
							this.controller.modelChanged(this.modProgrMins,this);

							if (this.freeMinutes === 0) {
								this.controller.get("lblMinutes").update(cntMins);
							} else {
								this.controller.get("lblMinutes").update(cntMins+"/"+this.freeMinutes);


								if (this.modProgrMins.progrMinutes > 1) {
									this.controller.get("modMinSmiley").update(":-(");
								} else if (this.modProgrMins.progrMinutes <= this.getDaysSinceLastPayroll()/this.days_between(this.getDateOfLastPayroll(),this.getDateOfNextPayroll())) {
									this.controller.get("modMinSmiley").update(":-)");
								} else if (this.modProgrMins.progrMinutes > this.getDaysSinceLastPayroll()/this.days_between(this.getDateOfLastPayroll(),this.getDateOfNextPayroll())) {
									this.controller.get("modMinSmiley").update(":-|");
								}

							}
							
							if (this.freeSMS === 0) {
								this.controller.get("lblSMS").update(cntSMS);
							} else {
								this.controller.get("lblSMS").update(cntSMS+"/"+this.freeSMS);

								if (this.modProgrSMS.progrSMS > 1) {
									this.controller.get("lblSMSSmile").update(":-(");
								} else if (this.modProgrSMS.progrSMS <= this.getDaysSinceLastPayroll()/this.days_between(this.getDateOfLastPayroll(),this.getDateOfNextPayroll())) {
									this.controller.get("lblSMSSmile").update(":-)");
								} else if (this.modProgrSMS.progrSMS > this.getDaysSinceLastPayroll()/this.days_between(this.getDateOfLastPayroll(),this.getDateOfNextPayroll())) {
									this.controller.get("lblSMSSmile").update(":-|");
								}

							}
							this.controller.get("lblStatus").update("");

			}.bind(this), onFailure: function(response) {
							this.controller.get("lblStatus").update("Service error! [not installed?]");
			}.bind(this)
    });
	},

	intPickPayrollChange: function(event, inSender) {
		this.saveSettings();
		this.loadFromService();
	},

	days_between: function(date1, date2) {

    // The number of milliseconds in one day
    var ONE_DAY = 1000 * 60 * 60 * 24;

    // Convert both dates to milliseconds
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();

    // Calculate the difference in milliseconds
    var difference_ms = Math.abs(date1_ms - date2_ms);
    
    // Convert back to days and return
    return Math.round(difference_ms/ONE_DAY);

	},

	getDaysSinceLastPayroll: function() {

		var now = new Date(); // today

		var month = now.getMonth();
		var year = now.getFullYear();

  	if (now.getDate() < this.payrollDay) {
			month = month-1;
			
			if (month === 0) {
				month = 12;
				year = year-1;
			}
		}
		var lastPayroll = new Date(year, month, this.payrollDay);
		return this.days_between(now,lastPayroll);
	},

	getDateOfLastPayroll: function() {

		var now = new Date(); // today

		var month = now.getMonth();
		var year = now.getFullYear();

  	if (now.getDate() < this.payrollDay) {
			month = month-1;
			
			if (month === 0) {
				month = 12;
				year = year-1;
			}
		}
		var lastPayroll = new Date(year, month, this.payrollDay);
		return lastPayroll;
	},

	getDateOfNextPayroll: function() {

		var now2 = new Date(); // today

		var month = now2.getMonth();
		var year = now2.getFullYear();

  	if (now2.getDate() >= this.payrollDay) {
			month = month+1;
			if (month == 13) {
				month = 1;
				year = year+1;
			}
		}
		var nextPayroll = new Date(year, month, this.payrollDay);
		return nextPayroll;
	},

	roundNumber: function(num, dec) {
		var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
		return result;
	},

	integerPicker1Change: function(event, inSender) {
		this.saveSettings();
		this.loadFromService();
	},
	integerPicker2Change: function(event, inSender) {
		this.saveSettings();
		this.loadFromService();
	},
	toggleInAndOutChange: function(event, inSender) {
		this.saveSettings();
		this.loadFromService();
	},
	btnSettingsTap: function(event, inSender) {
				this.controller.stageController.pushScene('scnSettings', this);
	},
 activate: function() {
 		this.loadSettings();
		this.loadFromService();
	}

};