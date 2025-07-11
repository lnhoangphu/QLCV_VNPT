import actionTypes from "./actionTypes";
import { push } from 'connected-react-router';

export const addUserSuccess = () => ({
  type: actionTypes.ADD_USER_SUCCESS,
});

export const userLoginSuccess = (userInfo) => ({
  type: actionTypes.USER_LOGIN_SUCCESS,
  userInfo: userInfo
});
// Thêm một console.log để kiểm tra
export const processLogin = (userInfo) => {
  return (dispatch) => {
    console.log("Dispatching login action with:", userInfo);
    dispatch(userLoginSuccess(userInfo));
  };
};
export const userLoginFail = () => ({
  type: actionTypes.USER_LOGIN_FAIL,
});
export const processLogout = () => {
  return (dispatch) => {
    // Xóa dữ liệu từ localStorage (nếu cần)
    localStorage.removeItem('persist:user');

    // Dispatch action để cập nhật Redux store
    dispatch({
      type: actionTypes.PROCESS_LOGOUT
    });

    // Thêm dòng này: Chuyển hướng đến trang login
    dispatch(push('/login'));
  };
};