import React from 'react';
import './tabs.scss';

export const useTabs = (tabArray = [], className = "tab-list") => {
    const firstTab = tabArray.length ? tabArray[0] : null;
    const [currentTab, setCurrentTab] = React.useState(firstTab);

    const tabs = <div className={className}>
        {tabArray.map((tab) => <div key={tab} className={tab === currentTab ? 'current' : null} onClick={() => setCurrentTab(tab)}>{tab}</div>)}
    </div>

    return {
        tabs,
        currentTab
    };
};