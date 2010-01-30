function ScnSettingsAssistant(argFromPusher) {
}

ScnSettingsAssistant.prototype = {
	setup: function() {
		Ares.setupSceneAssistant(this);
		this.loadSettings();
		this.getServiceVersion();
	},

	saveSettings: function(event, inSender) {
		myCookie = new Mojo.Model.Cookie('settings');
		var myObject = {"clockrateFirst": this.modSettings.clockrateFirst,
										"clockrateFurther": this.modSettings.clockrateFurther,
			 							"freeMinutes": this.modSettings.freeMinutes,
										"freeSMS": this.modSettings.freeSMS,
										"payrollDay": this.modSettings.payrollDay,
										"countInAndOut": this.modSettings.countInAndOut
	};
		myCookie.put(myObject);
	},

	loadSettings: function(event, inSender) {
		myCookie = new Mojo.Model.Cookie('settings');
		var myObject = myCookie.get();
		if (myObject !== undefined) {
			this.modSettings.clockrateFirst = myObject.clockrateFirst;
			this.modSettings.clockrateFurther = myObject.clockrateFurther;
			this.modSettings.freeMinutes = myObject.freeMinutes;
			this.modSettings.freeSMS = myObject.freeSMS;
			this.modSettings.payrollDay = myObject.payrollDay;
			this.modSettings.countInAndOut = myObject.countInAndOut;
		} else {
			this.modSettings.clockrateFirst = 60;
			this.modSettings.clockrateFurther = 60;
			this.modSettings.freeMinutes = 100;
			this.modSettings.freeSMS = 100;
			this.modSettings.payrollDay = 1;
			this.modSettings.countInAndOut = false;
		}
			this.controller.modelChanged(this.modSettings,this);
			//this.controller.modelChanged(this.modInAndOut,this);
			//this.controller.get("lblStatus").update("vval"+this.modInAndOut.countInAndOut);

	},
	
	getServiceVersion: function(event, inSender) {

		this.controller.serviceRequest('palm://de.hlavka.minstatservice', {
        method: 'getVersion',
        parameters: {subscribe:false, "":""},
        onSuccess: function(response) {
					this.controller.get("lblVersion").update("MinStat V1.2.1 - Service V"+response.version.toString());
        }.bind(this), onFailure: function(response) {
							this.controller.get("lblStatus").update("Service error [not installed?]");
			}.bind(this)
    });
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

	intPickPayrollChange: function(event, inSender) {
		this.saveSettings();
		this.loadFromService();
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

	cleanup: function() {
		Ares.cleanupSceneAssistant(this);
	}
};