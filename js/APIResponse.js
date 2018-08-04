/**
 * @file
 * Response from the API in an easy-to-use format
 */

export let APIResponse = function(json) {
    this.json = json;

    this.hasError = function()  {
       return (this.json.errors !== undefined && this.json.errors.length > 0);
    }

    /**
     * Get data by type
     * @param type Name of the type, like 'token'
     * @returns {null} Array of data or null if not found
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

        return null;
    }


    this.errorCode = function() {
        return this.json.errors[0].code;
    }

    this.errorTitle = function() {
        return this.json.errors[0].title;
    }

}

export default APIResponse;

