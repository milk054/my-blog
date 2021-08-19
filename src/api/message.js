import request from './request';

export async function getMessagesByPage(page = 1, limit = 10) {
    return await request.get('/api/message', {
        params: {
            page,
            limit
        }
    });
}

export async function postMessage(msgInfo) {
    return await request.post('/api/message', msgInfo)
}