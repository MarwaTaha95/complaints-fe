class RedirectService {
    static redirect = (redirect, defaultValue) => {
        if(redirect) {
            window.location.href = redirect;
        } else {
            window.location.href = defaultValue;
        }
    }
}

export default RedirectService;