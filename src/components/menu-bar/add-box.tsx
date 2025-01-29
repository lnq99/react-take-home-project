import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from 'react'

export function AddBox() {
  const [component, setComponent] = useState('')
  const [canvasComponents, setCanvasComponents] = useState<string[]>([])

  const handleAddComponent = () => {
    if (component) {
      setCanvasComponents([...canvasComponents, component])
      setComponent('')
    }
  }

  return (
    <div className="flex items-center gap-2" >
      {/* <label className="text-sm font-medium">Component:</label> */}
      <Input
        placeholder="e.g., Button, Label, Tag"
        value={component}
        onChange={(e) => setComponent(e.target.value)}
        className="w-60"
      />
      <Button onClick={handleAddComponent} disabled={!component}>
        Add
      </Button>
    </div>
  )
}
