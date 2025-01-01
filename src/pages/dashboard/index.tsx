import Main from "@/components/dashboard_components/Main";
import Navbar from "@/components/dashboard_components/Navbar";
import Settings from "@/components/dashboard_components/Settings";
import Sidebar from "@/components/dashboard_components/Sidebar";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import React, { JSX, useState, useEffect } from "react";
import MyDecks from "@/components/dashboard_components/MyDecks";
import { useLayoutContext } from "@/context/LayoutContext";

export default function Dashboard() {
  type SectionKey = "myDashboard" | "myDecks" | "mySettings";

  const [activeSection, setActiveSection] = useState<SectionKey>("myDecks");
  const [isLoaded, setIsLoaded] = useState(false); // State for transition

  const sections: Record<SectionKey, JSX.Element> = {
    myDashboard: <Main />,
    myDecks: <MyDecks />,
    mySettings: <Settings />,
  };

  const { isGridLayout } = useLayoutContext();

  // Trigger the transition when the component mounts
  useEffect(() => {
    const timeout = setTimeout(() => setIsLoaded(true), 50); // Delay for smoother effect
    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, []);

  return (
    <div
      className={`flex transition-opacity duration-500 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <PanelGroup
        autoSaveId="example"
        direction="horizontal"
        className="h-full"
      >
        <Panel
          defaultSize={20}
          minSize={12}
          maxSize={25}
          className={`min-h-screen ${isGridLayout ? "w-[20%]" : "w-[20%]"} bg-[#fcfcfc] border-r-[3px] border-[rgba(244,244,244,1)]`}
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
