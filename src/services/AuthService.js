import ClientService from "./ClientService";

class Auth {

    constructor() {
        this.state = "ANONYMOUS";
    }

    isAnonymous() {
        return this.state === 'ANONYMOUS';
    }

    isAdminAuthenticated() {
        return this.state === 'ADMIN_AUTHENTICATED';
    }

    isUserAuthenticated() {
        return this.state === 'USER_AUTHENTICATED';
    }

    ifAnonymous() {
        return this.ensureUpdated().then(r => r === 'ANONYMOUS');
    }

    ifAdminAuthenticated() {
        return this.ensureUpdated().then(r => r === 'ADMIN_AUTHENTICATED');
    }

    ifUserAuthenticated() {
        return this.ensureUpdated().then(r => r === 'USER_AUTHENTICATED');
    }

    ensureUpdated = async () => {
        let self = this;

        await ClientService.get('rest/session/state').then((response) => {
            return self._update(response.data);
        });
    };

    _update(info) {
        this.state = info || 'ANONYMOUS';
        return this.state;
    }
}

const instance = new Auth();

export default instance;
