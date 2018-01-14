// Port which server listen to
export const PORT = 3000;
// Message that show in console after server successfully run
export const SERVER_RUNNING_MESSAGE = `\nServer is running on port ${PORT}\n`;
// Current build type
export const IS_PRODUCTION = process.env.NODE_ENV === 'production';
