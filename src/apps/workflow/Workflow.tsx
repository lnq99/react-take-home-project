import { Flow } from "@/components/flow/v1/flow"
import { RootState } from "@/store/store"
import { useSelector } from "react-redux"

export default function Page() {
  const currentApp = useSelector((state: RootState) => state.config.currentApp)
  if (!currentApp) return <div>Loading...</div>

  return (
    <Flow />
  )
}
