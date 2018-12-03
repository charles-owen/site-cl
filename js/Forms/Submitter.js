
export const Submitter = function(element) {
	console.log('installing');
	console.log(element);

	element.addEventListener("submit", (event) => {
		event.preventDefault();

		// Disable the submit buttons
		const buttons = element.querySelectorAll('input[type="submit"]');
		for(const button of buttons) {
			button.disabled = true;
		}

		// Get the form data
		const formData = new FormData(element);
		const action = element.action;
		const redirect = element.dataset.redirect;

		console.log(action);
		console.log(redirect);

		Site.api.post(action, formData)
			.then((response) => {
				if (!response.hasError()) {
					window.location = redirect;
				} else {
					Site.toast(this, response);

					const buttons = element.querySelectorAll('input[type="submit"]');
					for(const button of buttons) {
						button.disabled = false;
					}
				}
			})
			.catch((error) => {
				Site.toast(this, error);
			});
	});

}

