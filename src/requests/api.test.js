import * as api from './api';
jest.mock('axios', () => {
    const response = { status: 200, data: {} };
    return {
        post: jest.fn().mockImplementation((path, data) => new Promise((resolve) => {
            resolve({ ...response, data, path });
        }))
    };
});

describe('test api', () => {
    it('requestAnInvite success', async () => {
        const data = {
            name: 'wyj',
            email: '872629271@qq.com'
        };
        api.requestAnInvite(data).then((data) => {
            expect(data).toBeUndefined();
        }).catch(() => { });
    });

    it('requestAnInvite error', async () => {
        const data = {
            name: 'wyj',
            email: 'usedemail@airwallex.com'
        };
        api.requestAnInvite(data).then(() => { }).catch((e) => {
            expect(e).toBeUndefined();
        });
    });
});
