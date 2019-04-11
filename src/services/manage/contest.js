import request from '../../lib/request';

export const fetchList = async () => {
  try {
    // TODO 删除mock数据
    const data = {
      pageIndex: 1,
      pageNum: 10,
    };
    const req = request.create('GetMatchesReq', data);
    return request('/getMatches', req, 'GetMatchesResp');
  } catch (ex) {
    throw ex;
  }
};