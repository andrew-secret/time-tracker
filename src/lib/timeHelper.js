
export const getSeconds = (time) => `0${time % 60}`.slice(-2);
export const getMinutes = (time) => `0${Math.floor(time / 60)}`.slice(-2);
export const getHours = (time) => `0${Math.floor(time / 600)}`;
