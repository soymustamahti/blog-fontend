const dev = process.env.NODE_ENV !== 'production';

export const server = dev
    ? 'http://localhost:3001'
    : 'https://blog-musta.herokuapp.com';

export const routes = dev ? 'http://localhost:3000'
    : 'https://blog-musta-frontend.herokuapp.com';