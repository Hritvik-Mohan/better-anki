import Decks from '@/components/dashboard_components/Decks';
import Main from '@/components/dashboard_components/main'
import Navbar from '@/components/dashboard_components/navbar'
import Settings from '@/components/dashboard_components/settings';
import Sidebar from '@/components/dashboard_components/sidebar'
import React, { JSX, useState } from 'react'

export default function Dashboard() {
    type SectionKey = 'myDashboard' | 'myDecks' | 'mySettings';
    
    const [activeSection, setActiveSection] = useState<SectionKey>('myDecks');
    
    const sections: Record<SectionKey, JSX.Element> = {
        myDashboard: <Main/>,
        myDecks: <Decks/>,
        mySettings: <Settings/>
    }
  return (
    <div className='flex'>
        <div className='w-[28%] h-screen bg-[rgba(249,249,249,1)] border-r border-[rgba(244,244,244,1)]'>
            <Sidebar onChangeSection={setActiveSection}/>
        </div>
        <div className='w-screen'>
            <Navbar/>
            {sections[activeSection]}
        </div>
    </div>
  )
}
