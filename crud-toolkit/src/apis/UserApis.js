import axiosClient from "./axiosClient";



const userApis = {
    add: async (user) => {
        try {
            const res = await axiosClient.post("/users", user)
            return res
        } catch (error) {
            console.log(error)
        }
    },
    getAll: async () => {
        try {
          const res = await axiosClient.get('/users');
          return res;
        } catch (error) {
          console.log(error);
        }
      },
}

export default userApis;