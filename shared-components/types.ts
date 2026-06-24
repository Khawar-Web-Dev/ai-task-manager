import { ComponentType } from "react";

export type LinkDataProps = {
    title: string;
    icon: ComponentType<{ className?: string }>;
    showBadge: boolean;
    badgeCount: number;
    to: string;
}

export type ProjectDataProps = {
    title: string;
    to: string;
}