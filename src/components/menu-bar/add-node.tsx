import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { addNode } from '@/store/slices/workflowSlice'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

export function AddNode() {
  const [component, setComponent] = useState('')

  const dispatch = useDispatch()

  const handleAddComponent = () => {
    if (component) {
      console.log(component)
      dispatch(addNode(component))
      setComponent('')
    }
  }

  return (
    <div className="flex items-center gap-2">
      <Input
        placeholder="add a node..."
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
