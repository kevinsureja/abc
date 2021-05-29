import React from 'react';
const FamilyList = ({familyList,setCurrentFamily }) => {
    return (<table className="table table-bordered">
        <thead>
            <tr>
                <th>Id</th>
                <th>Family Name</th>
                <th>Total Member</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {familyList.length > 0 ? (
                familyList.map((family, index) => (
                    <tr key={index}>
                        <td>{family.id}</td>
                        <td>{family.familyName}</td>
                        <td>{family.totalMembers}</td>
                        <td>
                            <button onClick={() => setCurrentFamily(family)} className="btn btn-primary" data-toggle="modal" data-target="#deleteFamilyModal">Delete</button>
                        </td>
                    </tr>
                ))
            ) : (
                    <tr>
                        <td colSpan={4}>No any family exists </td>
                    </tr>
                )}
        </tbody>
    </table>)
}
export default FamilyList;