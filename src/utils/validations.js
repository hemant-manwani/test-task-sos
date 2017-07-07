export const isValidDate = (date) => {
  if (Object.prototype.toString.call(date) === '[object Date]') {
    return !isNaN(date.getTime());
  }
  return false;
};

export const isValidEmail = email => (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email));

export const ageOfPerson = (dateOfBirth) => {
  const currentDate = new Date();
  const seconds = (currentDate.getTime() - dateOfBirth.getTime()) / 1000;
  return seconds / (60 * 60 * 24 * 365);
};

export const isValidAge = date => (ageOfPerson(date) > 18);
