import http from './http';

export const create = async (data: unknown) => {
    return await http('/auth/register/', {
        method: 'POST',
        body: JSON.stringify(data),
    });
};

export const login = async (data: unknown) => {
    return await http('/auth/login/', {
        method: 'POST',
        body: JSON.stringify(data),
    });
};

export const profile = async (data: unknown) => {
    return await http('/user/profile/', {
        method: 'GET',
        body: JSON.stringify(data),
    })
}