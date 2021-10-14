export default (mainClass, restClass = '') => {
  if (!restClass) {
    return mainClass;
  }
  if (!Array.isArray(restClass)) {
    restClass = restClass.split(' ');
  }
  restClass = restClass.filter(className => className);

  return [mainClass, ...restClass].join(' ');
};
