import axios from "../axios";

const handleLoginApi = (userLogin, userPassword) => {
    return axios.post('/api/login', { taikhoan: userLogin, matkhau: userPassword });
}
// const getAllUsers = (inputId) => {
//     return axios.get(`/api/get-all-users?id=${inputId}`);
// }
// const createNewUserService = (data) => {
//     return axios.post('/api/create-new-user', data);
// }
// const deleteUserService = (userId) => {
//     // return axios.delete(`/api/delete-user`, {id: userId});
//     return axios.delete(`/api/delete-user`, { data: { id: userId } });
// }
// const editUserService = (inputData) => {
//     return axios.put('/api/edit-user', inputData);
// }

export {
    handleLoginApi,
    // getAllUsers,
    // createNewUserService,
    // deleteUserService,
    // editUserService,
   
}