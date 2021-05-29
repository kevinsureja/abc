import React from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import AddMember from './AddMember';
import AddFamily from '../family/AddFamily';
import TreePage from './TreePage';
import _ from 'lodash';
import { toast } from 'react-toastify';
import * as memberActions from '../../actions/memberActions';
import {setToTree} from '../common/commonfunction';
const $ = window.$;
class ManageTreePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            currentMember: {
                personName: '',
                gender: ''
            },
            rootFamily: [],
            convertedRootFamily : []
        }
    }
    addFamilyData = (id, familyName, personName, gender, parentId, children)=>{
        this.setState({rootFamily : [...this.state.rootFamily, {id : id, familyName : familyName ,personName : personName, gender : gender, parentId : parentId, children : children}]},res=>{
            this.converToTree(_.cloneDeep(this.state.rootFamily));
        });
    }
    addMemberData = (id, personName, gender, parentId, children)=>{
        this.setState({rootFamily : [...this.state.rootFamily, {id : id, personName : personName ,gender : gender, parentId : parentId, children : children}]},res=>{
            this.converToTree(_.cloneDeep(this.state.rootFamily));
        });
    }
    AddFamily = (data) => {
        this.addFamilyData(data.guid, data.familyName, data.personName,data.gender, '0', null);
    }
    converToTree = (data)=>{
        this.setState({convertedRootFamily : setToTree(data,'0')});
    }
    AddMember = (data) => {
        this.addMemberData(data.id, data.personName,data.gender, this.state.currentMember.id, null);
        $('#memberAddModal').modal('hide');
    }
    setMemberData = (data) => {
        this.setState({ currentMember: data });
        $('#memberAddModal').modal('show');
    }
    onSaveFamily = () => {
        this.props.actions.saveFamily(this.state.rootFamily).then(res=>{
            if(res.status === 200){
                toast.success(res.message);
                this.props.history.push('/family');
            }
        })
    }
    render() {

        return (<>
            <div className="row">
                <div className="col-md-10">
                    { this.state.rootFamily.length === 0 && <AddFamily AddFamily={this.AddFamily} />
                    }
                    
                </div>
                { this.state.rootFamily.length !== 0 &&
                <div className="col-md-2 p-t-30">
                    <button type="button" onClick={() => this.onSaveFamily()} className="btn btn-primary">Save Family</button>
                </div>
                }
            </div>
            <div className="row">
                <div className="tree">
                    <TreePage fData={this.state.convertedRootFamily} setMemberData={this.setMemberData} />
                </div>
            </div>
            <AddMember dMember={this.state.currentMember} AddMember={this.AddMember} />
            </>)
    }
}

function mapStateToProps(state, ownProps) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(memberActions, dispatch),
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ManageTreePage));
