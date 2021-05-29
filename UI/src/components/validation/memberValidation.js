import _ from 'lodash';

export default function validateInput(data, isFamily) {
    let errors = {};

    if (isFamily && _.isEmpty(_.trim(data.personName))) {
        errors.familyName = 'Enter family name';
    }

    if (_.isEmpty(_.trim(data.personName))) {
        errors.personName = 'Enter person name';
    }

    if (_.isEmpty(_.trim(data.gender))) {
        errors.gender = 'Select gender';
    }
    return {
        errors,
        isValid: _.isEmpty(errors)
    };
}
