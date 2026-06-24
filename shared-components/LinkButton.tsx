import Link from "next/link"
import { ComponentType } from "react"

type LinkButtonProps = {
    Icon: ComponentType<{className?: string, size?: number}>;
    iconClass?: string;
    title: string;
    showBadge?: boolean;
    badgeCount?: number;
    to: string;
    selected: boolean;
    setActiveTab: (title: string) => void;
};

const LinkButton = ({ Icon, iconClass, title, showBadge, badgeCount, to, selected, setActiveTab }: LinkButtonProps) => {
    return (
        <div onClick={() => setActiveTab(title)} className={`flex space-x-3 justify-between items-center mx-1 my-0.5 px-2 py-1 rounded-lg ${selected ? 'bg-accent-mid':'bg-none hover:bg-neutral-300'}`}>
            <Icon size={24} className={`${selected ? 'text-accent':'text-gray-400'} ${iconClass}`}/>
            <Link href={to} className={`text-[18px] tracking-wide flex-1 ${selected ? 'text-accent':'text-gray-600'}`}>{title}</Link>
            {showBadge && <span className="bg-accent-mid px-2 py-[2.8px] rounded-full text-accent font-semibold text-sm">{badgeCount}</span>}
        </div>
    )
}

export default LinkButton