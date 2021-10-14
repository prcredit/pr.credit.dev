export default (mainClass: string, restClass: string | Array<string | boolean> = '') => {
  if (!restClass) {
    return mainClass;
  }
  if (!Array.isArray(restClass)) {
    restClass = restClass.split(' ');
  }
  restClass = restClass.filter(className => className);

  return [mainClass, ...restClass].join(' ');
};