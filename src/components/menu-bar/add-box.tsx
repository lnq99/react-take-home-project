import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from 'react'

export function AddBox({ ...props }: React.ComponentProps<"form">) {
  // const [version, setVersion] = useState('1.0');
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
      {/* Canvas preview */}
      {/* <div className="mt-4 p-4 border rounded-lg bg-gray-50">
        <h3 className="text-sm font-medium mb-2">Canvas:</h3>
        {canvasComponents.length === 0 ? (
          <p className="text-gray-500">No components added yet.</p>
        ) : (
          <ul className="list-disc pl-5">
            {canvasComponents.map((comp, index) => (
              <li key={index} className="text-sm text-gray-700">
                {comp}
              </li>
            ))}
          </ul>
        )}
      </div> */}
    </div>
  )
}
