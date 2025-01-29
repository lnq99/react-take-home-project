import '@xyflow/react/dist/style.css'

import {
  Background,
  Controls,
  ReactFlow,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from '@xyflow/react'
import { updateEdges, updateNodes } from '@/store/slices/workflowSlice'
import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/store/store'

const initialNodes = [
  {
    id: '1',
    data: { label: 'Hello' },
    position: { x: 0, y: 0 },
    type: 'input',
  },
  {
    id: '2',
    data: { label: 'World' },
    position: { x: 100, y: 100 },
  },
]

const initialEdges = [
  { id: '1-2', source: '1', target: '2', label: 'to the', type: 'step' },
]

export function Flow() {
  const dispatch = useDispatch()
  const nodes = useSelector((state: RootState) => state.workflow.nodes)
  const edges = useSelector((state: RootState) => state.workflow.edges)

  const onNodesChange = useCallback(
    (changes) => dispatch(updateNodes(applyNodeChanges(changes, nodes))),
    [nodes, dispatch]
  )

  const onEdgesChange = useCallback(
    (changes) => dispatch(updateEdges(applyEdgeChanges(changes, edges))),
    [edges, dispatch]
  )

  const onConnect = useCallback(
    (params) => dispatch(updateEdges(addEdge(params, edges))),
    [edges, dispatch]
  )

  return (
    <div className="h-full">
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  )
}
