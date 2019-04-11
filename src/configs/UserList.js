export default {
    ID: 'id',
    nickname: 'username',
    registerTime: 'create_time',
    name: 'real_name',
    email: 'email',
    type: 'admin_type',
    password: 'password',
};

export const userTypeOptions = [
    {
        key: '一般用户',
        value: 0,
    },
    {
        key: '管理员',
        value: 1,
    },
    {
        key: '超级管理员',
        value: 2,
    },
];
