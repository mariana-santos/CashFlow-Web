export function get(){
    const url = "http://localhost:8080/tiposCredito"
    const resp = fetch(url)
    
    if (resp.status !== 200) {
        if (typeof window !== 'undefined') alert("erro ao buscar dados dos empréstimos")
        return
    }

    return resp.json()
}