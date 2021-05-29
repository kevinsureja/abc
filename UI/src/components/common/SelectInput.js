import React from 'react'
const SelectInput = ({ onChange, name, labelName, value, errors,options, defaultOption }) => {
    return (
        <div className="form-group">
            <label htmlFor={name} className="col-form-label" >{labelName}</label>
            <select className="form-control" onChange={onChange} name={name} value={value}>
    { defaultOption && <option key={'default' + name} value=''>{defaultOption }</option> }
                {options.map((op, index) => {
                    return (<option key={name +'_' + index} value={op.id}>{op.name}</option>)
                })}
            </select>
            {errors &&
                <small className="form-text text-muted">{errors}</small>
            }
        </div>)
}
export default SelectInput