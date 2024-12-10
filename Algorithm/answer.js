// 본 문제에서는 시작점과 끝점이 같을 필요없이 간선을 한번만 지나는 경로의 유무를 확인하기에 이는 오일러 경로가 존재하는지 확인하면 됩니다.
// 따라서 경로가 존재하기 위한 조건은 오일러 경로가 존재하기 위한 조건이므로 이 조건으로는
// 1. vertex와 Edge가 연결그래프인지를 확인해야 합니다.
// 2. 모든 vertex의 간선이 짝수개이거나 간선이 홀수개인 vertex가 두개인 경우인지 확인해야 합니다.

const answer = (arr) => {
    const adj_arr = {} 
    arr.map(([v1,v2]) => {
        if (!adj_arr[v1]) {
            adj_arr[v1] = []
        }
        if (!adj_arr[v2]) {
            adj_arr[v2] = []
        }                       //vertex의 첫 간선을 삽입할 때를 대비해 빈배열을 생성
        adj_arr[v1].push(v2)
        adj_arr[v2].push(v1)    //간선 추가
    })
    const vertexts = Object.keys(adj_arr)

    const isCennected = (arr) => { //연결 그래프인지 확인
        const visited = new Set()
        const dfs = (v) => {  // dfs를 통해 모든 간선이 연결되어 있는지 확인
            if (visited.has(v)) return // 확인한 노드면 종료
            visited.add(v)
            for (const item of arr[v]) { 
                dfs(item)               // 주변 vertext 모두를 탐색
            }
        }
        dfs(vertexts[0])
        // vertex의 갯수와 방문 vertex의 갯수가 같으면 모두 방문한 것이므로 true를 반환
        return vertexts.length === visited.size ? true : false
    }
    
    if (!isCennected(adj_arr)) return false  // 연결 그래프가 아니라면 모든 간선을 지날 수 없기에 false 반환

    let cnt = 0
    vertexts.map((v) => {
        if (adj_arr[v].length % 2 === 1) {
            cnt++
        }
    })
    
    if (!(cnt === 0 || cnt === 2)) return false  //간선이 홀수개인 갯수가 0개 혹은 2개가 아니라면 오일러 경로의 조건을 만족하지 않으므로 false 반환

    const visitedEdges = new Set()
    const path = []

    //dfs로 경로 찾기
    const dfsPath = (node) => {
        for (let i = 0; i < adj_arr[node].length; i++) {
            const nextNode = adj_arr[node][i]
            const edge = `${node}-${nextNode}`
            if (!visitedEdges.has(edge) && !visitedEdges.has(`${nextNode}-${node}`)) {
                visitedEdges.add(edge) // 간선을 아직 방문하지 않았다면 방문후 다시 탐색  
                dfsPath(nextNode)  
            }
        }
        path.push(node)  // 경로에 노드 추가
    }

    // 시작 노드를 'A'로 설정
    dfsPath('A')

    return path.reverse()
}

console.log(answer([['A', 'B'], ['B', 'C'], ['B', 'D'], ['C', 'D']]))
