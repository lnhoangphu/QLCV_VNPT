import actionTypes from "./actionTypes";
import { handleLoginApi } from "../../service/userService";
import { toast } from "react-toastify";

//đăng nhập
export const processLogin = (userLogin, userPassword) => {
    return async (dispatch) => {
        try {
            let res = await handleLoginApi(userLogin, userPassword);
            if (res && res.errCode === 0) {
                dispatch(loginSuccess(res.user));
                toast.success(res.errMessage);
                return true; // <-- thành công
            } else {
                dispatch(loginFail());
                toast.error(res.errMessage);
                return false; // <-- thất bại
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: actionTypes.USER_LOGIN_FAIL,
                message: error.message,
            });
            toast.error("Đăng nhập thất bại!");
            return false; // <-- thất bại
        }
    }
}
export const loginSuccess = (user) => ({
    type: actionTypes.USER_LOGIN_SUCCESS,
    user: user
});
export const loginFail = () => ({
    type: actionTypes.USER_LOGIN_FAIL
});
