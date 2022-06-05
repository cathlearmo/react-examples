import React from 'react';

/* returns checkboxes with labels and the checkbox state (whether they are checked or not) 
    checkboxItems (array of objects contains id, isChecked boolean, label)
*/

export function useCheckboxes(checkBoxItems = [], showSelectAll = false, className = "checkbox-group") {

    const [checkBoxState, setCheckboxState] = React.useState({});
    const [selectAll, setSelectAll] = React.useState(false);

    React.useEffect(() => {
        let newState = {};
        checkBoxItems.forEach((item) => {
            newState[item.label] = item.isChecked;
        });
        setCheckboxState(newState);
    }, []);

    React.useEffect(() => {
        if (Object.keys(checkBoxState).length) {
            let newState = Object.assign({}, checkBoxState);
            Object.keys(newState).forEach((key) => {
                newState[key] = selectAll;
            });
            setCheckboxState(newState);
        }
    }, [selectAll]);

    const updateOption = (key) => {
        let newState = Object.assign({}, checkBoxState);
        newState[key] = !newState[key];
        setCheckboxState(newState);
        if (showSelectAll) {
            const notChecked = Object.keys(newState).filter((key) => newState[key] === false);
            const checked = Object.keys(newState).filter((key) => newState[key] === true);
            if (notChecked.length > 0 && checked.length > 0) {
                document.getElementById("select-all").indeterminate = true;
            } else {
                document.getElementById("select-all").indeterminate = false;
                if (notChecked.length) {
                    setSelectAll(false);
                } else {
                    setSelectAll(true);
                }
            }
        }
    }

    const checkBoxes = <>
        {showSelectAll && <input type="checkbox" id="select-all" checked={selectAll} onChange={() => setSelectAll(!selectAll)}/>}
        <div className={className}>
            {
                Object.keys(checkBoxState).map((key) => <div key={key}>
                    <label>{key}
                        <input type="checkbox" checked={checkBoxState[key] || false} onChange={() => updateOption(key)} />
                    </label>
                </div>)
            }
        </div> 
    </>

    //checkboxState is returned so the calling component can use the checked boxes
    //boxes is the jsx code returned

    return {
        checkBoxes,
        checkBoxState
    };
}	