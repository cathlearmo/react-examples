import React from 'react';

/* returns checkboxes with labels and the checkbox state (whether they are checked or not) 
    checkboxItems (array of objects contains id, isChecked boolean, label)
*/

export function useCheckboxes(checkBoxItems = [], className = "checkbox-group") {

    const [checkBoxState, setCheckboxes] = React.useState(checkBoxItems);

    const updateOption = (option) => {
        checkBoxState.forEach((item) => {
            const value = item.id || item.label;
            if (value === option.id || value === option.label) {
                item.isChecked = !option.isChecked;
            }
        });
        setCheckboxes(checkBoxState);
    }

    const boxes = <div className={className}>
        {
            checkBoxState.map((option) => <div key={option.id || option.label} onClick={() => updateOption(option)}>
                <label>{option.label}
                    <input type="checkbox" defaultChecked={option.isChecked} onChange={() => updateOption(option)}/>
                </label>
            </div>)
        }
    </div> 

    //checkboxState is returned so the calling component can use the checked boxes
    //boxes is the jsx code returned

    return {
        boxes,
        checkBoxState
    };
}	