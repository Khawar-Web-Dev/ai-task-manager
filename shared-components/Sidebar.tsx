"use client"

import { IconChartBar, IconCommand, IconFolder, IconHome, IconLayoutKanban, IconRobot, IconSearch } from "@tabler/icons-react"
import LinkButton from "./LinkButton"
import { useState } from "react"
import { LinkDataProps, ProjectDataProps } from "./types"
import DotIcon from "@/public/icons/DotIcon"

const linksData: LinkDataProps[] = [
    {
        title: "Dashboard",
        icon: IconHome,
        showBadge: false,
        badgeCount: 0,
        to: '#'
    },
    {
        title: "Projects",
        icon: IconFolder,
        showBadge: false,
        badgeCount: 0,
        to: '#'
    },
    {
        title: "Board",
        icon: IconLayoutKanban,
        showBadge: false,
        badgeCount: 0,
        to: '#'
    },
    {
        title: "AI Assistant",
        icon: IconRobot,
        showBadge: false,
        badgeCount: 0,
        to: '#'
    },
    {
        title: "Analytics",
        icon: IconChartBar,
        showBadge: true,
        badgeCount: 2,
        to: '#'
    }
];

const projectsData: ProjectDataProps[] = [
    {
        title: "Brand Refresh",
        to: '#'
    },
    {
        title: "API v3 Launch",
        to: '#'
    },
    {
        title: "Mobile App",
        to: '#'
    }
];

const Sidebar = () => {

    const [activeTab, setActiveTab] = useState<string>('');
    const [activeProject, setActiveProject] = useState<string>('')

    return (
        <nav className="w-80 border-r border-r-border-light/10">
            <div className="flex items-center px-5 py-6 space-x-3">
                <div className="bg-accent rounded-sm p-[0.4rem] text-white">
                    <IconLayoutKanban size={22} />
                </div>
                <h1 className="font-medium text-xl">TaskFlow</h1>
            </div>

            <div className="bg-[#e2e6ee] border border-gray-400 h-10 mx-8 rounded-md flex justify-between items-center px-2">
                <IconSearch color="#99a1af" />
                <input type="text" placeholder="Search Tasks..." className="px-1 font-medium w-40 outline-0 bg-neutral-200" />
                <div className="flex bg-neutral-200 border border-gray-400 px-1 py-0.5 rounded-sm">
                    <IconCommand className="text-gray-400" />
                    <span className="text-gray-400">K</span>
                </div>
            </div>

            <div className="mx-5">
                <h3 className="uppercase mt-4 mb-2 text-gray-400 text-lg">Workspace</h3>
                <div className="flex flex-col">
                    {linksData.map((link, key) => (
                        <LinkButton key={key} to={link.to} Icon={link.icon} title={link.title} showBadge={link.showBadge} badgeCount={link.badgeCount} selected={link.title === activeTab} setActiveTab={setActiveTab} />
                    ))}
                </div>

                <h3 className="uppercase mt-4 mb-2 text-gray-400 text-lg">Projects</h3>
                <div className="flex flex-col">
                    {projectsData.map((project, key) => (
                        <LinkButton key={key} to={project.to} title={project.title} Icon={DotIcon} iconClass={"fill-blue"} selected={activeProject === project.title} setActiveTab={setActiveProject}/>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Sidebar
