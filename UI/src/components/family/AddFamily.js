import React, { useState } from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import validateInput from '../validation/memberValidation';
import { v4 } from 'uuid';

const AddFamily = ({ AddFamily }) => {
    const [family, setFamily] = useState({
        familyName: '',
        personName: '',
        gender: ''
    });
    const [errors, setErrors] = useState({});
    const onChange = (event) => {
        const { name, value } = event.target;
        setFamily({ ...family, [name]: value })

    }
    const onAddFamily = () => {
        if (isValid()) {
            AddFamily({ ...family, 'guid': v4() });
            resetData();
        }
    }
    const isValid = () => {
        const { errors, isValid } = validateInput(family, true);
        setErrors(errors)
        return isValid;
    }
    const resetData = () => {
        setFamily({
            familyName: '',
            personName: '',
            gender: ''
        });
    }

    return (
    <div>
        <div className="row">
            <div className="col-md-3">
                <TextInput
                    name="familyName"
                    onChange={onChange}
                    value={family.familyName}
                    labelName="Family Name"
                    errors={errors.familyName}
                />
            </div>
            <div className="col-md-3">
                <TextInput
                    name="personName"
                    onChange={onChange}
                    value={family.personName}
                    labelName="Family Persion"
                    errors={errors.personName}
                />
            </div>
            <div className="col-md-3">
                < SelectInput
                    defaultOption={'Select Gender'}
                    options={[{ id: '1', name: 'Male' }, { id: '2', name: 'Female' }]}
                    name="gender"
                    onChange={onChange}
                    value={family.gender}
                    labelName="Gender"
                    errors={errors.gender}
                />
            </div>
            <div className="col-md-3" style={{ 'paddingTop': '32px' }}>

                <button type="button" onClick={() => onAddFamily()} className="btn btn-primary">Add</button>

            </div>
        </div>
    </div>
    )
}
export default AddFamily;