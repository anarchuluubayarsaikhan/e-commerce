export function postFetch(path: string, jsonBody: {}) {
    return fetch (process.env.NEXT_PUBLIC_API_URL+`/${path}`, {
      method: "POST",
      body: JSON.stringify(jsonBody),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
  }


  export function getFetch(path: string) {
     return fetch (process.env.NEXT_PUBLIC_API_URL+`/${path}`, {
      
     })
  }