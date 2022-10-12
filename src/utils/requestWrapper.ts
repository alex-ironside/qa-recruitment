export const requestWrapper = (callback: any, retries: number) => {
  if (Math.floor(Math.random() * 10) % retries > 0) {
    callback();
  }
};
