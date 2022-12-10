import React from 'react';

/* returns checkboxes with labels and the checkbox state (whether they are checked or not) 
    checkboxItems (array of objects contains id, isChecked boolean, label)
    Also has a select all box which will select and deselect all checkboxes
*/

export function useCheckboxes(checkBoxItems = [], showSelectAll = false, className = "checkbox-group") {

    const [selectAll, setSelectAll] = React.useState(false);
    const [checkBoxState, setCheckboxState] = React.useState(checkBoxItems);
    const selectAllId = React.useId();

    React.useEffect(() => {
        setCheckboxState(c => c?.map(item => ({
            ...item,
            isChecked: selectAll,
        })));
    }, [selectAll]);

    const updateOption = (selectedLabel) => {
        let newState = checkBoxState.map(item => ({
            ...item,
            isChecked: item.label === selectedLabel ? !item.isChecked : item.isChecked,
        }));

        setCheckboxState(newState);

        if (showSelectAll) {
            const notChecked = newState.filter((item) => !item.isChecked);
            const checked = newState.filter((item) => item.isChecked);
            if (notChecked.length && checked.length) {
                document.getElementById(selectAllId).indeterminate = true;
            } else {
                document.getElementById(selectAllId).indeterminate = false;
                const allChecked =  checked?.length === checkBoxItems.length;
                setSelectAll(allChecked);
            }
        }
    }

    const checkBoxes = <>
        {showSelectAll && <input type="checkbox" id={selectAllId} checked={selectAll} onChange={() => setSelectAll(!selectAll)}/>}
        <div className={className}>
            {
                checkBoxState.map((item) => <div key={item.id || item.label}>
                    <label>{item.label}
                        <input type="checkbox" checked={item.isChecked || false} onChange={() => updateOption(item.label)} />
                    </label>
                </div>)
            }
        </div> 
    </>

    //checkboxState is returned so the calling component can use the checked boxes
    //checkBoxes is the jsx code returned
    //the select all checkbox contains an indeterminate state. To check whether select all is in
    //the tri-state, use document.getElementById(selectAllId).indeterminate (true if tri-state, false
    //if checked on or off)
    //to check whether it is checked, use document.getElementById(selectAllId).checked

    return {
        checkBoxes,
        checkBoxState,
        selectAllId
    };
}	