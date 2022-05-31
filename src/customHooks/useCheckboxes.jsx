/* returns checkboxes with labels and also handles their state 
    checkboxItems (array of objects contains id, isChecked boolean, label), 
    className (class for the section that shows the checkboxes)
*/

export function useCheckboxes(checkBoxItems = []) {

    const boxes = <div className={'checkbox-group'}>
        {
            checkBoxItems.map((option) => <div key={option.id || option.label} onClick={() => !option.isChecked}>
                <label>{option.label}
                    <input type="checkbox" defaultChecked={option.isChecked} onChange={() => !option.isChecked}/>
                </label>
            </div>)
        }
    </div> 

    return {
        boxes
    };
}	