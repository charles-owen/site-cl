/**
 * @file
 * Response from the API in an easy-to-use format
 */

let APIResponse = function(json) {
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

    // getAllData(type: string): any {
    //     const result = [];
    //     if (this.json.data !== undefined) {
    //         for (const item of this.json.data) {
    //             if (item.type === type) {
    //                 result.push(item);
    //             }
    //         }
    //     }
    //
    //     return result;
    // }

    this.errorCode = function() {
        return this.json.errors[0].code;
    }

    this.errorTitle = function() {
        return this.json.errors[0].title;
    }

}

export default APIResponse;

