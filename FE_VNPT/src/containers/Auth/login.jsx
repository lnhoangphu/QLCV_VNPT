import React, { Component } from "react";
import { connect } from "react-redux";
import { processLogin } from "../../store/actions/AdminAction";
import './login.scss';
import { useNavigate } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            errMessage: '',
            isShowPassword: false,
        }
    }
    handleLogin = async () => {
        this.setState({ errMessage: "" });
        try {
            const success = await this.props.processLogin(this.state.login, this.state.password);
            if (success) {
                this.props.navigate('/home');
            } else {
                this.setState({ errMessage: "Đăng nhập thất bại!" });
            }
        } catch {
            this.setState({ errMessage: "Đăng nhập thất bại!" });
        }
    };
    handleShowHidePassword = () => {
        this.setState({ isShowPassword: !this.state.isShowPassword });
    };
    handleKeyDown = (event) => {
        if (event.key === "Enter") {
            this.handleLogin();
        }
    }
    handleOnChangeLogin = (event) => {
        this.setState({ login: event.target.value });
    }
    handleOnChangePassword = (event) => {
        this.setState({ password: event.target.value });
    }
    render() {
        return (
            <div className="login-backgroud">
                <div className="login-container">
                    <div className="login-title">Đăng nhập hệ thống</div>
                    <div className="form-group">
                        <label>Tên đăng nhập hoặc Email</label>
                        <div className="input-with-icon">
                            <i className="fas fa-user input-icon"></i>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nhập tên đăng nhập hoặc email"
                                value={this.state.login}
                                onChange={this.handleOnChangeLogin}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Mật khẩu</label>
                        <div className="input-with-icon custom-input-password">
                            <i className="fas fa-lock input-icon"></i>
                            <input
                                type={this.state.isShowPassword ? "text" : "password"}
                                className="form-control"
                                placeholder="Nhập mật khẩu"
                                value={this.state.password}
                                onChange={this.handleOnChangePassword}
                                onKeyDown={this.handleKeyDown}
                            />
                            <span onClick={this.handleShowHidePassword}>
                                <i className={this.state.isShowPassword ? "far fa-eye" : "far fa-eye-slash"}></i>
                            </span>
                        </div>
                    </div>
                    <div className="col-12" style={{ color: "red" }}>
                        {this.state.errMessage}
                    </div>
                    <button className="btn-login" onClick={this.handleLogin}>
                        Đăng nhập
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.user?.isLoggedIn,
    userInfo: state.user?.userInfo,
});

const mapDispatchToProps = (dispatch) => ({
    processLogin: (userLogin, userPassword) => dispatch(processLogin(userLogin, userPassword)),
});

const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login);

export default function LoginWithNavigate(props) {
    const navigate = useNavigate();
    return <ConnectedLogin {...props} navigate={navigate} />;
}
