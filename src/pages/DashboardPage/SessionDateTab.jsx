import React from 'react';
import { TabButton90 } from '../../components';

const SessionDateTab = ({ tab, activeTab, setActiveTab, date }) => {
  return (
    <TabButton90
      key={tab}
      active={activeTab === tab}
      onClick={() => setActiveTab(tab)}
    >
      {tab}회 ({date})
    </TabButton90>
  );
};

export default SessionDateTab;
