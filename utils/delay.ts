export const delay = (timeInSeconds = 1) =>
  new Promise((resolve) => setTimeout(resolve, timeInSeconds * 1000));
