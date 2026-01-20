import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ProfileDashboard } from './components/ProfileDashboard';
import { MyEvents } from './components/MyEvents';
import { Achievements } from './components/Achievements';
import { EditProfile } from './components/EditProfile';
import { ManageRegistrations } from './components/ManageRegistrations';
import { View } from './types';

function App() {
  const [currentView, setCurrentView] = useState<View>('dashboard');

  // Logic to determine layout based on view
  if (currentView === 'edit-profile') {
    return <EditProfile onChangeView={setCurrentView} />;
  }

  if (currentView === 'manage-registrations') {
    return <ManageRegistrations onChangeView={setCurrentView} />;
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-background-dark font-display text-white">
      <Sidebar currentView={currentView} onChangeView={setCurrentView} />
      <main className="flex-1 h-screen overflow-hidden">
        {currentView === 'dashboard' && <ProfileDashboard onChangeView={setCurrentView} />}
        {currentView === 'events' && <MyEvents onChangeView={setCurrentView} />}
        {currentView === 'achievements' && <Achievements />}
      </main>
    </div>
  );
}

export default App;