import { toast } from 'react-toastify';
export function setToTree(arr, parent){
    var out = []
    for (var i in arr) {
        if (arr[i].parentId == parent) {
            var children = setToTree(arr, arr[i].id)
            if (children.length) {
                arr[i].children = children
            }
            out.push(arr[i])
        }
    }
    return out;
}
export function showErrorMessages(errors) {
    if (errors && Array.isArray(errors) && errors.length) {
        _.forEach(errors, function (err) {
            if (err.error) {
                toast.error(err.error);
            } else {
                toast.error(err.message ? err.message : err.msg);
            }
        });
    }else{
        toast.error(errors);
    }
}