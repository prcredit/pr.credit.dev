export default (mainClass, modifier = '') => {
    if (!modifier) {
        return mainClass;
    }
    let result = mainClass;
    if (!Array.isArray(modifier)) {
        return result += ` ${mainClass}--${modifier}`;
    }
    modifier.forEach(modifier => {
        if (modifier) {
            result += ` ${mainClass}--${modifier}`;
        }
    });
    return result;
};
