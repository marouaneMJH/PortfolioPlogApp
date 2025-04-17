export interface ModalProps {
    onClose: () => void;
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

export interface SkillBarProps {
    name: string;
    percentage: number;
}

export interface SkillCircleProps {
    percentage: number;
}

export interface TimelineItemData {
    period: string;
    title: string;
    subtitle: string;
}

export interface ServiceItemData {
    icon: string;
    text: string;
}

export interface TabButtonProps {
    active: boolean;
}
