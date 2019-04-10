import request from '../lib/request';

export const fetchList = async () => {
  try {
    // TODO 删除mock数据
    const data = {
      tag: 1,
      get_all: true,
      page_index: 1,
      page_num: 10,
    };
    const req = request.create('GetProblemsReq', data);
    return request('/getProblems', req, 'GetProblemsResp');
  } catch (ex) {
    throw ex;
  }
};
