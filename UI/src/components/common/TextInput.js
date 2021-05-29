import React from 'react'
const TextInput = ({ onChange, name, labelName, value, errors}) => {
    return (
        <div className="form-group">
            <label htmlFor={name} className="col-form-label" >{labelName}</label>
            <input
                type="text"
                className="form-control"
                value={value || ''}
                onChange={onChange}
                name={name}
            />
            {errors &&
                <small className="form-text text-muted">{errors}</small>
            }
        </div>)
}
export default TextInput