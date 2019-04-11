import request from '../../lib/request';

export const fetchList = async () => {
  try {
    // TODO 删除mock数据
    const data = {
      pageIndex: 1,
      pageNum: 10,
    };
    const req = request.create('AnnouncementsReq', data);
    return request('/getAnnouncements', req, 'AnnouncementsResp');
  } catch (ex) {
    throw ex;
  }
};

export const editAnnounceSubmit = async (data) => {
  try {
    const req = request.create('EditAnnouncementReq', data);
    return request('/editAnnouncement', req, 'EditAnnouncementResp');
  } catch (ex) {
    throw ex;
  }
};

export const getAnnouncementDetail = async (data) => {
  try {
    const req = request.create('AnnouncementDetailReq', data);
    return request('/announcementDetail', req, 'AnnouncementDetailResp');
  } catch (ex) {
    throw ex;
  }
};

export const AddAnnounceSubmit = async (data) => {
  try {
    const req = request.create('AddAnnouncementReq', data);
    return request('/addAnnouncement', req, 'AddAnnouncementResp');
  } catch (ex) {
    throw ex;
  }
};

export const deleteAnnounce = async (data) => {
  try {
    const req = request.create('DelAnnouncementReq', data);
    return request('/delAnnouncement', req, 'DelAnnouncementResp');
  } catch (ex) {
    throw ex;
  }
};
