/**
 * The automatic site polling system
 * @constructor
 */
export const Polling = function(site) {
	this.interval = 5;     /// Polling interval in seconds

	let poll = () => {
		setTimeout(() => {
			//console.log('poll');
			let params = {

			}
			site.api.get('/api/poll', params)
			    .then((response) => {
			        if (!response.hasError()) {
			//console.log(response);
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
}
