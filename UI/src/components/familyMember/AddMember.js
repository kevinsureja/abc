import React, {useState} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import validateInput from '../validation/memberValidation';
import { v4 } from 'uuid';
const AddMember = ({ AddMember }) => {
    const [member, setMember] = useState({});
    const [errors, setErrors] = useState({});
    const onChange = (event) => {
        const { name, value } = event.target;
        setMember({ ...member, [name]: value })
    }
    const onAddMember = () => {
        if (isValid()) {
            AddMember({ ...member, 'id': v4() });
            resetData();
        }
    }
    const isValid = () => {
        const { errors, isValid } = validateInput(member);
        setErrors(errors)
        return isValid;
    }
    const resetData = () =>{
        setMember({
            personName: '',
            gender: ''
        });
    }
    return (
        <div className="modal fade" id="memberAddModal" tabIndex="-1" role="dialog" aria-labelledby="memberAddModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="memberAddModalLabel">Add New Member</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" tabIndex="-1">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {/* <form> */}
                            <TextInput
                                name="personName"
                                onChange={onChange}
                                value={member.personName}
                                labelName="Name of Person"
                                errors={errors.personName}
                                autoFocus = {true}
                            />
                            <SelectInput
                                defaultOption={'Select Gender'}
                                options={[{ id: '1', name: 'Male' }, { id: '2', name: 'Female' }]}
                                name="gender"
                                onChange={onChange}
                                value={member.gender}
                                labelName="Gender"
                                errors={errors.gender}
                            />
                        {/* </form> */}
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={()=>resetData()} className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" onClick={() => onAddMember()} className="btn btn-primary">Add</button>
                    </div>
                </div>
            </div>
        </div>)
}
export default AddMember;