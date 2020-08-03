'use strict';

const { ZwaveDevice } = require('homey-meshdriver');

class ZwaveME_05468 extends ZwaveDevice {

	async onNodeInit() {

		//this.log('ZME_05468 has been inited');

		// enable debugging
		this.enableDebug();
		// print the node's info to the console
		this.printNode();

		this.registerCapability('onoff', 'SWITCH_MULTILEVEL');
		this.registerCapability('dim', 'SWITCH_MULTILEVEL');
	}

}

module.exports = ZwaveME_05468;
