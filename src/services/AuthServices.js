import CoreService from './CoreService';
import config from '../config/server';
import axios from 'axios'

export default class AuthService extends CoreService {

    async login(user, callback) {
        var user_login = config.urlUser + 'user_login';
        axios.post(user_login, user)
            .then(res => {
                const data = res.data;
                if (data) {
                    callback({ isSuccess: true, response: data, message: '' });
                } else {
                    callback({ isSuccess: false, response: data, message: 'Failed to authentication' });
                }
            }).catch(error => {
                callback({ isSuccess: false, response: error, message: 'Failed to get response' });
            });
    }

    async signUp(user, callback) {
        var user_signup = config.urlUser + 'user_signup';
        axios.post(user_signup, user)
            .then(res => {
                const data = res.data;
                if (data) {
                    callback({ isSuccess: true, response: data, message: '' });
                } else {
                    callback({ isSuccess: false, response: data, message: 'Failed to authentication' });
                }
            }).catch(error => {
                callback({ isSuccess: false, response: error, message: 'Failed to get response' });
            });
    }

    async update(update, callback) {
        var update_profile = config.urlUser + 'user_update_profile';
        axios.post(update_profile, update)
            .then(res => {
                const data = res.data;
                if (data) {
                    callback({ isSuccess: true, response: data, message: '' });
                } else {
                    callback({ isSuccess: false, response: data, message: 'Failed to authentication' });
                }
            }).catch(error => {
                callback({ isSuccess: false, response: error, message: 'Failed to get response' });
            });
    }

    async getUserDetails(userID, callback) {
        var user_details = config.urlUser + 'user_detail';
        axios.post(user_details, userID)
            .then(res => {
                const data = res.data;
                if (data) {
                    callback({ isSuccess: true, response: data, message: '' });
                } else {
                    callback({ isSuccess: false, response: data, message: 'Failed to authentication' });
                }
            }).catch(error => {
                callback({ isSuccess: false, response: error, message: 'Failed to get response' });
            });
    }
    async becomeVendor(restaurantData, callback) {
        var become_vendor = config.urlUser + 'user_become_vendor';
        axios.post(become_vendor, restaurantData)
            .then(res => {
                const data = res.data;
                if (data) {
                    callback({ isSuccess: true, response: data, message: '' });
                } else {
                    callback({ isSuccess: false, response: data, message: 'Failed to authentication' });
                }
            }).catch(error => {
                callback({ isSuccess: false, response: error, message: 'Failed to get response' });
            });
    }
    async becomeVendor(driverData, callback) {
        var become_driver = config.urlUser + 'user_become_vendor';
        axios.post(become_driver, driverData)
            .then(res => {
                const data = res.data;
                if (data) {
                    callback({ isSuccess: true, response: data, message: '' });
                } else {
                    callback({ isSuccess: false, response: data, message: 'Failed to authentication' });
                }
            }).catch(error => {
                callback({ isSuccess: false, response: error, message: 'Failed to get response' });
            });
    }

    async updateVendor(vendorData, callback) {
        var update_vendor = config.urlUser + 'vendor_update_profile';
        axios.post(update_vendor, vendorData)
            .then(res => {
                const data = res.data;
                if (data) {
                    callback({ isSuccess: true, response: data, message: '' });
                } else {
                    callback({ isSuccess: false, response: data, message: 'Failed to authentication' });
                }
            }).catch(error => {
                callback({ isSuccess: false, response: error, message: 'Failed to get response' });
            });
    }

    async getVendorDetails(vendor_user_data, callback) {
        var vendor_details = config.urlUser + 'vendor_detail';
        axios.post(vendor_details, vendor_user_data)
            .then(res => {
                const data = res.data;
                if (data) {
                    callback({ isSuccess: true, response: data, message: '' });
                } else {
                    callback({ isSuccess: false, response: data, message: 'Failed to authentication' });
                }
            }).catch(error => {
                callback({ isSuccess: false, response: error, message: 'Failed to get response' });
            });
    }
}