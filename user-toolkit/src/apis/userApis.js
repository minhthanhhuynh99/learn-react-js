import axiosClient from "./axiosClient";

const usersApis = {
    getAll: async () => {
        try {
            const response = await axiosClient.get('/users');
            return response
        } catch (error) {
            console.log(error)
        }
    },

    add: async (user) => {
        try {
            const response = await axiosClient.post('/users', user);
            return response;
        } catch (error) {
            console.log(error)
        }
    }
}

export default usersApis;