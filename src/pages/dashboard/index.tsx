// import Decks from "@/components/dashboard_components/decks";
import Main from "@/components/dashboard_components/main";
import Navbar from "@/components/dashboard_components/navbar";
import Settings from "@/components/dashboard_components/settings";
import Sidebar from "@/components/dashboard_components/sidebar";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import React, { JSX, useState } from "react";
import MyDecks from "@/components/dashboard_components/myDecks";
import { useLayoutContext } from "@/context/LayoutContext";

export default function Dashboard() {
  type SectionKey = "myDashboard" | "myDecks" | "mySettings";

  const [activeSection, setActiveSection] = useState<SectionKey>("myDecks");

  const sections: Record<SectionKey, JSX.Element> = {
    myDashboard: <Main />,
    myDecks: <MyDecks />,
    mySettings: <Settings />,
  };

  const { isGridLayout } = useLayoutContext();
  return (
    <div className="flex">
      <PanelGroup
        autoSaveId="example"
        direction="horizontal"
        className="h-full"
      >
        {/* <Panel defaultSize={20} minSize={12} maxSize={25} className="w-[20%] bg-[rgba(249,249,249,1)] border-[3px] border-[rgba(244,244,244,1)]"> */}
        <Panel
          defaultSize={20}
          minSize={12}
          maxSize={25}
          className={`min-h-screen ${isGridLayout ? "w-[20%]" : "w-[20%]"} bg-[rgba(249,249,249,1)] border-r-[3px] border-[rgba(244,244,244,1)]`}
        >
          <Sidebar onChangeSection={setActiveSection} />
        </Panel>
        <PanelResizeHandle />
        <Panel defaultSize={80} className="w-[80%]">
          <Navbar />
          {sections[activeSection]}
        </Panel>
      </PanelGroup>
    </div>
  );
}
