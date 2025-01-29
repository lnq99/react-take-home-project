import { Edge, Node } from "@xyflow/react"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface WorkflowState {
  nodes: Node[]
  edges: Edge[]
}

const initialState: WorkflowState = {
  nodes: [
    { id: "1", data: { label: "Hello" }, position: { x: 0, y: 0 }, type: "input" },
    { id: "2", data: { label: "World" }, position: { x: 100, y: 100 } },
  ],
  edges: [{ id: "1-2", source: "1", target: "2", label: "to the", type: "step" }],
}

const workflowSlice = createSlice({
  name: "workflow",
  initialState,
  reducers: {
    addNode: (state, action: PayloadAction<string>) => {
      const newNode: Node = {
        id: (state.nodes.length + 1).toString(),
        data: {
          label: `${action.payload}`
        },
        position: { x: Math.random() * 200, y: Math.random() * 200 },
      }
      state.nodes.push(newNode)
    },
    updateNodes: (state, action: PayloadAction<Node[]>) => {
      state.nodes = action.payload
    },
    updateEdges: (state, action: PayloadAction<Edge[]>) => {
      console.log(state)
      console.log(action)
      state.edges = action.payload
    },
  },
})

export const { addNode, updateNodes, updateEdges } = workflowSlice.actions
export default workflowSlice.reducer