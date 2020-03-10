//converts military time to regular time
export const militaryToRegular = militaryTime => {
  const hr = Number(militaryTime.split(':')[0]);

  if (hr <= 12) {
    return militaryTime + 'AM';
  }

  const min = militaryTime.split(':')[1];
  return hr - 12 + ':' + min + ' PM';
};
