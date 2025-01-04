const API_BASE_URL = process.env.PUBLIC_API_BASE_URL || 'http://localhost:4000';

const http = async (url: string, options: RequestInit = {}) => {
    const defaultHeaders = {
        'Content-Type': 'application/json',
    };

    const config = {
        ...options,
        headers: {
            ...defaultHeaders,
            ...options.headers,
        }
    }

    try {
        const response = await fetch(`${API_BASE_URL}`, config);

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Something went wrong');
        }
        return await response.json();
    } catch (error) {
        console.error('API Error: ', error);
        throw error;
    }
};

export default http;