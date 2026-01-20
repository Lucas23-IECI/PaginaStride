export enum ViewState {
    HUB = 'HUB',
    SOCIAL_GIRL = 'SOCIAL_GIRL',
    SOCIAL_RUN = 'SOCIAL_RUN',
    BRUNCH_YOGA = 'BRUNCH_YOGA',
    BENEFIT = 'BENEFIT'
}

export interface Experience {
    id: ViewState;
    title: string;
    description: string;
    image: string;
    color: string;
    icon: string;
}

export interface NavProps {
    currentView: ViewState;
    onNavigate: (view: ViewState) => void;
}