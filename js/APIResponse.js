/**
 * Response from the API in an easy-to-use format
 * @constructor
 */
export const APIResponse = function(json) {
    this.json = json;


    /**
     * Get data by type
     * @param type Name of the type, like 'token'
     * @returns {object} Object of data or null if not found
     */
    this.getData = function(type) {
        if (this.json.data !== undefined) {
            for (const item of this.json.data) {
                if (item.type === type) {
                    return item;
                }
            }
        }

        return null;
    }

	/**
	 * Get all instances of data by tye
	 * @param type Name of the type, like 'token'
	 * @returns {Array} Array of objects representing the data elements.
	 */
	this.getDataAll = function(type) {
        if (this.json.data !== undefined) {
            let ret = [];
            for (const item of this.json.data) {
                if (item.type === type) {
                    ret.push(item);
                }
            }

            return ret;
        }

        return [];
    }


	/**
	 * Does this response have an error?
	 * @returns {boolean} True if there is an error
	 */
	this.hasError = function()  {
		return (this.json.errors !== undefined && this.json.errors.length > 0);
	}

	/**
	 * Return the error code if there is an error
	 * @return {int} Error code
	 */
    this.errorCode = function() {
        return this.json.errors[0].code;
    }

	/**
	 * Return the error title if there is an error
	 * @return {string} Error title
	 */
	this.errorTitle = function() {
        return this.json.errors[0].title;
    }

}

//export default APIResponse;
