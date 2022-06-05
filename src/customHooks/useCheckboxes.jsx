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

    const updateOption = (e, key) => {
        let newState = Object.assign({}, checkBoxState);
        newState[key] = !newState[key];
        setCheckboxState(newState);
    }

    const checkBoxes = <>
        {showSelectAll && <input type="checkbox" checked={selectAll} onChange={() => setSelectAll(!selectAll)}/>}
        <div className={className}>
            {
                Object.keys(checkBoxState).map((key) => <div key={key}>
                    <label>{key}
                        <input type="checkbox" checked={checkBoxState[key] || false} onChange={(e) => updateOption(e, key)} />
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