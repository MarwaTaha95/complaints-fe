class ResponseUtils {
    static isValid = response =>  {
        return response && (response.valid || !response.errors || !response.data);
    }
}

export default ResponseUtils;