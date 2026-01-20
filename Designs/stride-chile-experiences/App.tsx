import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Hub } from './components/Hub';
import { SocialGirl } from './components/SocialGirl';
import { SocialRun } from './components/SocialRun';
import { BrunchYoga } from './components/BrunchYoga';
import { Benefit } from './components/Benefit';
import { ViewState } from './types';

const App: React.FC = () => {
    const [currentView, setCurrentView] = useState<ViewState>(ViewState.HUB);

    const handleNavigate = (view: ViewState) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setCurrentView(view);
    };

    const renderView = () => {
        switch (currentView) {
            case ViewState.HUB:
                return <Hub onNavigate={handleNavigate} />;
            case ViewState.SOCIAL_GIRL:
                return <SocialGirl onBack={() => handleNavigate(ViewState.HUB)} />;
            case ViewState.SOCIAL_RUN:
                return <SocialRun onBack={() => handleNavigate(ViewState.HUB)} />;
            case ViewState.BRUNCH_YOGA:
                return <BrunchYoga onBack={() => handleNavigate(ViewState.HUB)} />;
            case ViewState.BENEFIT:
                return <Benefit onBack={() => handleNavigate(ViewState.HUB)} />;
            default:
                return <Hub onNavigate={handleNavigate} />;
        }
    };

    return (
        <Layout currentView={currentView} onNavigate={handleNavigate}>
            {renderView()}
        </Layout>
    );
};

export default App;
