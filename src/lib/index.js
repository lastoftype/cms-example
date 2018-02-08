import _ from 'lodash';

export function filterKeys(targetObject, filterObject) {
    let result = _.assign({}, targetObject);

    for (let key in filterObject) {
        if (filterObject.hasOwnProperty(key)) {
            delete result[key];
        }
    }

    return result;
}
