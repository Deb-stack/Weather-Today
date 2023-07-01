export function getCurrentPosition() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude });
        },
        (error) => {
          const errorMessage = getErrorMessage(error);
          reject(errorMessage);
        }
      );
    } else {
      reject(new Error("Geolocation is not available"));
    }
  });
}

export function getErrorMessage(error) {
  let errorMessage;
  switch (error.code) {
    case error.PERMISSION_DENIED:
    case error.TIMEOUT:
      errorMessage = `Location Access Denied.\nPlease Enter a City Name in the Search`;
      break;
    case error.POSITION_UNAVAILABLE:
      errorMessage = `Location information is unavailable.\nPlease Enter a City Name in the Search`;
      break;
    default:
      errorMessage = `An unknown error occurred.\nPlease Contact the Adminstrator`;
      break;
  }
  console.error(errorMessage);
  return errorMessage;
}
