export type View = 'dashboard' | 'events' | 'achievements' | 'edit-profile' | 'manage-registrations';

export interface SidebarProps {
    currentView: View;
    onChangeView: (view: View) => void;
}
