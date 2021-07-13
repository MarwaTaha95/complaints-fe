import ClientService from './ClientService';

class LoginService {
    static login = async body => {
        try {
            const response = await ClientService.post('/rest/login', body);
            return response;
        } catch (error) {
            console.log('Error ', error);
        }
    };

    static register = async body => {
        try {
            const response = await ClientService.post('/rest/register/submit', body);
            return response;
        } catch (error) {
            console.log('Error ', error);
        }
    };

    static verifyCode = async body => {
        try {
            const response = await ClientService.post('/rest/verify', body);
            return response;
        } catch (error) {
            console.log('Error ', error);
        }
    };

    static logout = async () => {
        try {
            const response = await ClientService.get('rest/session/logout');
            return response;
        } catch (error) {
            console.log('Error ', error);
        }
    }
}

export default LoginService;