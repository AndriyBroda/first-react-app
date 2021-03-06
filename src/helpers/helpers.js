export const toMMSS = seconds => {
  return (
    String(Math.floor(seconds / 60)).padStart(2, '0') + ':' + String(Math.ceil(seconds % 60)).padStart(2, '0')
  );
};
