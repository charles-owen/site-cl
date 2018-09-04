/**
 * The automatic site polling system
 * @constructor
 */
export const Polling = function(site) {
	this.interval = 5;     /// Polling interval in seconds

	let clients = {};

	let poll = () => {
		setTimeout(() => {
			//console.log('poll');
			let params = {}
			for(let client in clients) {
				if(clients.hasOwnProperty(client)) {
					clients[client].pre(params);
				}
			}

			site.api.post('/api/poll', params)
			    .then((response) => {
			        if (!response.hasError()) {
		//	console.log(response);

				        for(let client in clients) {
					        if(clients.hasOwnProperty(client)) {
						        clients[client].post(response);
					        }
				        }
			        } else {
			            //Site.toast(this, response);
			        }

				    poll();

			    })
			    .catch((error) => {
				    poll();
			    });


		}, this.interval * 1000)
	}

	this.start = function() {
		poll();
	}

	/**
	 * Add a polling client
	 * @param {string} name The name of the client
	 * @param {function} pre Function to run prior to polling
	 * @param {function} post Function to run with results from polling
	 *
	 * @example
	 * site.polling.addClient('interact',
	 *    (params) => {
	 *        params['interact'] = {after: 12345};
	 *    },
	 *    (response) => {
	 *        let data = resonse.getData('interact-result');
	 *    }
	 */
	this.addClient = function(name, pre, post) {
		clients[name] = {pre: pre, post: post};
	}

	/**
	 * Remove a polling client
	 * @param {string} name The name of the client
	 */
	this.removeClient = function(name) {
		delete clients[name];
	}

}
