from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from collections import defaultdict, deque

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PipelineRequest(BaseModel):
    nodes: List[dict]
    edges: List[dict]

def is_dag(nodes, edges):
    graph = defaultdict(list)
    indegree = {node["id"]: 0 for node in nodes}

    for edge in edges:
        graph[edge["source"]].append(edge["target"])
        indegree[edge["target"]] += 1

    queue = deque([n for n in indegree if indegree[n] == 0])
    visited = 0

    while queue:
        node = queue.popleft()
        visited += 1

        for nei in graph[node]:
            indegree[nei] -= 1
            if indegree[nei] == 0:
                queue.append(nei)

    return visited == len(nodes)

@app.get("/")
def root():
    return {"message": "API is working 🚀"}

@app.post("/pipelines/parse")
def parse_pipeline(data: PipelineRequest):
    return {
        "num_nodes": len(data.nodes),
        "num_edges": len(data.edges),
        "is_dag": is_dag(data.nodes, data.edges),
    }