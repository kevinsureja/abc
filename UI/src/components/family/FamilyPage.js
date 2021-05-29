import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import * as memberActions from '../../actions/memberActions';
import DeletePopup from './DeletePopup';
import FamilyList from './FamilyList';

const FamilyPage = () => {
    const [currentFamily, setCurrentFamily] = useState({
        familyName: ''
    });
    const familyList = useSelector(state => state.family)
    const dispatch = useDispatch(dispatch => bindActionCreators(memberActions, dispatch))
    const onDelete = (family) => {
        dispatch(memberActions.deleteFamily(family)).then(res => {
            if (res && res.status === 200) {
                toast.success(res.message);
            }
        });
    }
    useEffect(() => {
        dispatch(memberActions.getFamilies()).then(res => {
        })
    }, []);
    return (
    <div className="table-responsive">
        <DeletePopup family={currentFamily} onDelete={onDelete} />
        <FamilyList familyList = {familyList} setCurrentFamily={setCurrentFamily} />
    </div>)
}
export default FamilyPage;
