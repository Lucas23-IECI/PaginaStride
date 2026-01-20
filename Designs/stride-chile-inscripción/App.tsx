import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './views/Dashboard';
import { LevelSelection } from './views/LevelSelection';
import { Registration } from './views/Registration';
import { Success } from './views/Success';
import { Event, RunLevel, ViewState } from './types';

// Default mock event for context
const DEFAULT_EVENT: Event = {
  id: '0',
  title: 'Social Run 5K',
  date: 'OCT 24',
  day: 'Sábado',
  time: '08:00 AM',
  location: 'Parque Bicentenario',
  type: 'Social Run',
  monitors: []
};

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.DASHBOARD);
  const [selectedEvent, setSelectedEvent] = useState<Event>(DEFAULT_EVENT);
  const [selectedLevel, setSelectedLevel] = useState<RunLevel | null>(null);

  // Flow handlers
  const handleSelectEvent = (event: Event) => {
    setSelectedEvent(event);
    setCurrentView(ViewState.LEVEL_SELECTION);
    window.scrollTo(0,0);
  };

  const handleSelectLevel = (level: RunLevel) => {
    setSelectedLevel(level);
    setCurrentView(ViewState.REGISTRATION);
    window.scrollTo(0,0);
  };

  const handleRegistrationComplete = () => {
    setCurrentView(ViewState.SUCCESS);
    window.scrollTo(0,0);
  };

  const handleNavigate = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo(0,0);
  };

  return (
    <Layout currentView={currentView} onNavigate={handleNavigate}>
      {currentView === ViewState.DASHBOARD && (
        <Dashboard onSelectEvent={handleSelectEvent} />
      )}

      {currentView === ViewState.LEVEL_SELECTION && (
        <LevelSelection onSelectLevel={handleSelectLevel} />
      )}

      {currentView === ViewState.REGISTRATION && (
        <Registration 
          selectedLevel={selectedLevel} 
          onComplete={handleRegistrationComplete}
          onBack={() => setCurrentView(ViewState.LEVEL_SELECTION)}
        />
      )}

      {currentView === ViewState.SUCCESS && (
        <Success onBackHome={() => handleNavigate(ViewState.DASHBOARD)} selectedEvent={selectedEvent} />
      )}
    </Layout>
  );
};

export default App;