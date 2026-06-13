from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -------------------------
# Request schema
# -------------------------
class PipelineRequest(BaseModel):
    nodes: list
    edges: list


# -------------------------
# DAG check logic
# -------------------------
def is_dag(nodes, edges):
    from collections import defaultdict, deque

    graph = defaultdict(list)
    indegree = {node["id"]: 0 for node in nodes}

    for edge in edges:
        src = edge["source"]
        tgt = edge["target"]
        graph[src].append(tgt)
        indegree[tgt] += 1

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


# -------------------------
# MAIN ENDPOINT
# -------------------------
@app.post("/pipelines/parse")
def parse_pipeline(data: PipelineRequest):
    num_nodes = len(data.nodes)
    num_edges = len(data.edges)
    dag = is_dag(data.nodes, data.edges)

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": dag
    }