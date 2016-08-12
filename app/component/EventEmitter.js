import {EventEmitter as eventEmiter} from 'events';

let instance = null;

class EventEmitter {
	constructor() {
		if (!instance) {
			instance = new eventEmiter();
		}
		return instance;
	}
}

export default new EventEmitter;