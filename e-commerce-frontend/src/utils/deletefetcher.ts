export function deleteFetch(path: string) {
    const accessToken = localStorage.getItem("accessToken") || ""
    return fetch (`http://localhost:4000/${path}`, {
      method: "DELETE",
      headers: {
        accessToken: accessToken
      }
    })
  }


  export function getFetch(path: string) {
     return fetch (process.env.NEXT_PUBLIC_API_URL+`/${path}`, {
      
     })
  }