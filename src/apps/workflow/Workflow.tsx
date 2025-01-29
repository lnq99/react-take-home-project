import { RootState } from "@/store/store"
import { useSelector } from "react-redux"

export default function Page() {
    const currentApp = useSelector((state: RootState) => state.config.currentApp)
    if (!currentApp) return <div>Loading...</div>

    return (
        <div className="flex flex-col items-center justify-center p-6 md:p-10">
            Workflow
        </div>
    )
}
