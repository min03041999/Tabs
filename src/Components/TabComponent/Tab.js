import React, { useState } from "react";
import TabContent from "../TabContent ";
import TabNavItem from "../TabNavItem";
// import FirstTab from "../AllTabs/FirstTab";
// import SecondTab from "../AllTabs/SecondTab";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  // const handleTab1 = () => {
  //   setActiveTab("tab1");
  // };

  // const handleTab2 = () => {
  //   setActiveTab("tab2");
  // };

  return (
    // <div className="Tabs">
    //   <ul className="nav">
    //     <li
    //       className={activeTab === "tab1" ? "active" : ""}
    //       onClick={handleTab1}
    //     >
    //       Tab1
    //     </li>
    //     <li
    //       className={activeTab === "tab2" ? "active" : ""}
    //       onClick={handleTab2}
    //     >
    //       Tab2
    //     </li>
    //   </ul>
    //   <div className="outlet">
    //     {activeTab === "tab1" ? <FirstTab /> : <SecondTab />}
    //   </div>
    // </div>

    <div className="Tabs">
      <ul className="nav">
        <TabNavItem
          title="Tab 1"
          id="tab1"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Tab 2"
          id="tab2"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Tab 3"
          id="tab3"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ul>

      <div className="outlet">
        <TabContent id="tab1" activeTab={activeTab}>
          <p>Tab 1 work!</p>
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <p>Tab 2 work!</p>
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <p>Tab 3 work!</p>
        </TabContent>
      </div>
    </div>
  );
};

export default Tabs;
