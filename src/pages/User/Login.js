
import React, { Component } from 'react';
import { connect } from 'dva';
import LoginForm from '../../components/Login/LoginForm';
import { login } from '../../services/common/user';

@connect(({ problem }) => ({
  ...problem,
}))
export default class LoginPage extends Component {
    submitLoginInfo = async(values) => {
        login(values).then((res) => {
            const { token } = res;
            document.cookie = `token=${token}`;
        }).catch((e) => {
            throw e;
        });
    };

    render() {
        return (
            <LoginForm
                onSubmit={this.submitLoginInfo}
            />
        );
    }
}
