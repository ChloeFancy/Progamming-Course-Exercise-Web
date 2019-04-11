import request from '../lib/request';

export const fetchList = async () => {
  try {
    // TODO 删除mock数据
    const data = {
      role: 1,
      get_all: true,
      page_index: 1,
      page_num: 10,
    };
    const req = request.create('GetUsersReq', data);
    return request('/getUsers', req, 'GetUsersResp');
  } catch (ex) {
    throw ex;
  }
};

// todo 需要getUserById
export const getUserInfoByID = async () => {
  try {
    // TODO 删除mock数据
    const data = {
      role: 1,
      get_all: true,
      page_index: 1,
      page_num: 10,
    };
    const req = request.create('GetUsersReq', data);
    return request('/getUsers', req, 'GetUsersResp');
  } catch (ex) {
    throw ex;
  }
};

export const submitUserInfo = async () => {
  try {
    // TODO 删除mock数据
    const data = {
      role: 1,
      get_all: true,
      page_index: 1,
      page_num: 10,
    };
    const req = request.create('GetUsersReq', data);
    return request('/getUsers', req, 'GetUsersResp');
  } catch (ex) {
    throw ex;
  }
};

// todo 需要getUserInfoByKeyword
export const getUserInfoByKeyword = async () => {
  try {
    // TODO 删除mock数据
    const data = {
      role: 1,
      get_all: true,
      page_index: 1,
      page_num: 10,
    };
    const req = request.create('GetUsersReq', data);
    return request('/getUsers', req, 'GetUsersResp');
  } catch (ex) {
    throw ex;
  }
};


