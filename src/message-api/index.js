const waitTwoSecondsAndSend = (message, resolve) =>
  setTimeout(
    () =>
      resolve({
        message
      }),
    2000
  );

export const send = message =>
  new Promise(resolve => waitTwoSecondsAndSend(message, resolve));
