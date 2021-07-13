import ClientService from './ClientService';

class DashboardService {
    static save = async body => {
        try {
            const response = await ClientService.post('/rest/complaints/create', body);
            return response;
        } catch (error) {
            console.log('Error ', error);
        }
    };

    static getForUser = async () => {
        try {
            const response = await ClientService.get('/rest/complaints/get');
            return response;
        } catch (error) {
            console.log('Error ', error);
        }
    };

    static update = async body => {
        try {
            const response = await ClientService.post('/rest/complaints/update', {'id': body.id, 'status': body.status});
            return response;
        } catch (error) {
            console.log('Error ', error);
        }
    };

    static getAll = async () => {
        try {
            const response = await ClientService.get('/rest/complaints/getAll');
            return response;
        } catch (error) {
            console.log('Error ', error);
        }
    };
}

export default DashboardService;