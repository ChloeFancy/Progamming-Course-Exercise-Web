import request from '../../lib/request';

export const login = ({ account, password }) => {
    const req = request.create('LoginReq', { account, password });
    return request('/login', req, 'LoginResp');
}
