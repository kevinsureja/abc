import TreeLeaf from './TreeLeaf';
const TreePage = ({fData,setMemberData}) =>{
    var nodes = fData && fData.map(function(data, index) {
		return(
			<TreeLeaf
				key={index}
				leaf={data}
                children={data.children}
                setMemberData = {setMemberData}
			/>
	)
    });

    return <ul>{nodes}</ul>;
}
export default TreePage