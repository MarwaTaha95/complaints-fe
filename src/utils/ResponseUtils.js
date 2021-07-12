class ResponseUtils {
    static isValid = response =>  {
        return response && (response.valid || !response.errors);
    }
}

export default ResponseUtils;