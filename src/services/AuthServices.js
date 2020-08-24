import CoreService from './CoreService';

export default class AuthService extends CoreService {

    login = user => {
        return this.makeRequest('user_login', {
            method: "post",
            body: JSON.stringify({
                email: user.email,
                password: user.password,
                device_type: user.device_type,
                device_token: user.device_token,
                action_time: user.action_time
            })
        });
    }

    signUp = user => {
        return this.makeRequest('user_signup', {
            method: 'post',
            body: JSON.stringify({
                email: user.email,
                password: user.password,
                fullname: user.name,
                phonenumber: user.phone,
                device_type: user.device_type,
                device_token: user.device_token,
                action_time: user.action_time
            })
        });
    }

    /* accountHomeScreen = userID => {
        return this.makeRequest('');
    } */
}