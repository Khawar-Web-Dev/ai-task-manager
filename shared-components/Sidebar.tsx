import { IconCommand, IconLayoutKanban, IconSearch } from "@tabler/icons-react"

const Sidebar = () => {
    return (
        <nav className="w-80 border-r border-r-border-light/10">
            <div className="flex items-center px-5 py-6 space-x-3">
                <div className="bg-accent rounded-sm p-[0.4rem] text-white">
                    <IconLayoutKanban size={22} />
                </div>
                <h1 className="font-medium text-xl">TaskFlow</h1>
            </div>

            <div className="bg-gray-200 border border-gray-400 h-10 mx-8 rounded-md flex justify-between items-center px-2">
                <IconSearch color="#99a1af" />
                <input type="text" placeholder="Search Tasks..." className="px-1 font-medium w-40" />
                <div className="flex">
                    <IconCommand />
                    <span>K</span>
                </div>

            </div>
        </nav>
    )
}

export default Sidebar
