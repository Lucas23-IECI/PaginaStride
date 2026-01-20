// ============================================
// EXPERIENCE TYPES - De experiences
// ============================================

export enum ExperienceView {
    HUB = 'HUB',
    SOCIAL_GIRL = 'SOCIAL_GIRL',
    SOCIAL_RUN = 'SOCIAL_RUN',
    BRUNCH_YOGA = 'BRUNCH_YOGA',
    BENEFIT = 'BENEFIT'
}

export interface Experience {
    id: ExperienceView;
    title: string;
    description: string;
    image: string;
    color: string;
    icon: string;
}
