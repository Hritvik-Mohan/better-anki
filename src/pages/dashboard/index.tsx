import Main from "@/components/dashboard_components/Main";
import Navbar from "@/components/dashboard_components/Navbar";
import Settings from "@/components/dashboard_components/Settings";
import Sidebar from "@/components/dashboard_components/Sidebar";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import React, { JSX, useState, useEffect } from "react";
import MyDecks from "@/components/dashboard_components/MyDecks";
import { useLayoutContext } from "@/context/LayoutContext";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { CgMenuGridO } from "react-icons/cg";
import { Card } from "@/components/ui/card";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  // const [open, setOpen] = React.useState(false);

  useEffect(() => {
    // Check if window exists
    const mediaQuery = window.matchMedia("(max-width: 965px)");
    setIsMobile(mediaQuery.matches);

    const handleChange = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => window.removeEventListener("resize", handleChange);
  }, []);

  return isMobile;
};

export default function Dashboard() {
  type SectionKey = "myDashboard" | "myDecks" | "mySettings";

  const [activeSection, setActiveSection] = useState<SectionKey>("myDecks");
  const [isLoaded, setIsLoaded] = useState(false);

  const isMobile = useIsMobile();

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

  // if (isDesktop) {
  //   return (
  //     <Dialog open={open} onOpenChange={setOpen}>
  //       <DialogTrigger asChild>
  //         <Button variant="outline">Edit Profile</Button>
  //       </DialogTrigger>
  //       <DialogContent className="sm:max-w-[425px]">
  //         asd
  //       </DialogContent>
  //     </Dialog>
  //   )
  // }


  return (
    <>
      {isMobile ? (
        <div className="relative">
          <Navbar />
          <Drawer>
            <DrawerTrigger asChild className="">
              <Card className="fixed bottom-4 right-8 bottom-8 p-4 bg-[rgba(218,224,248,1)] hover:bg-[rgb(201,211,252)] text-[rgba(77,110,213,1)] rounded-full"><CgMenuGridO size={28}/></Card>
            </DrawerTrigger>
            <DrawerContent>
            <Sidebar onChangeSection={setActiveSection} />
            </DrawerContent>
          </Drawer>
          {sections[activeSection]}
        </div>
      ) : (
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
              className={`min-h-screen ${
                isGridLayout ? "w-[20%]" : "w-[20%]"
              } bg-[#fcfcfc] border-r-[3px] border-[rgba(244,244,244,1)]`}
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
      )}
    </>
  );
}
