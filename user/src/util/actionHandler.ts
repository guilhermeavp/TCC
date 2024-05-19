import { last, get, set, isArray, forEach } from 'lodash';
import { badRequest } from '@hapi/boom';

const pick = (object, paths) => {
    const item = {};

    paths.forEach((path) => set(
        item,
        last(path.split('.')),
        get(object, path)
    ));

    return item;
};

export const flatPick = (object, paths) => {
    if (isArray(object)) {
        forEach(object, (item, key) => {
            object[key] = pick(item, paths);
        });
    }
    else {
        object = pick(object, paths);
    }

    return object;
};

// Global validation fail function
export const failAction = ({ i18n }, h, err) => {
    const { output, details } = err;


    // Turn to i18n payload
    if (output?.payload) {
        output.payload.message =
            i18n.__(`validation.${output.payload.message}`);
    }

    if (details) {
        h.logger({ content: details });
        return badRequest('response validation');
    }

    return err;
};