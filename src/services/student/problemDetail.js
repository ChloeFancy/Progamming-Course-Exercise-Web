import request from '../../lib/request';

// 获取题目详情
export const getProblemDetail = async () => {
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

// 获取题目提交记录
export const getProblemLogs = async () => {
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
