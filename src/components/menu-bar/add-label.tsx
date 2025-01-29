import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

export function AddLabel({ ...props }: React.ComponentProps<'form'>) {
  const [component, setComponent] = useState('')
  const [canvasComponents, setCanvasComponents] = useState<string[]>([])

  const handleAddComponent = () => {
    if (component) {
      setCanvasComponents([...canvasComponents, component])
      setComponent('')
    }
  }

  return (
    <div className="flex items-center gap-2">
      <Input
        placeholder="enter a label..."
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
