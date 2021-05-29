const TreeLeaf = ({ leaf, children ,setMemberData}) => {
    let childNodes = null;
    if (children && children.length) {
        childNodes = children.map(function (childnode, index) {
            return (
                <TreeLeaf
                    key={index}
                    leaf={childnode}
                    children={childnode.children}
                    setMemberData = {setMemberData}

                />
            );
        });
    }

    return (
        <li>
            <a href="javascript:void(0)" onClick={()=>setMemberData(leaf)}>{leaf.personName}</a>
            {childNodes ? <ul>{childNodes}</ul> : null}

        </li>)
}
export default TreeLeaf