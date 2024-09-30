export function postFetch(path: string, jsonBody: {}) {
    return fetch (`http://localhost:4000/${path}`, {
      method: "POST",
      body: JSON.stringify(jsonBody),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
  }


  export function getFetch(path: string) {
     return fetch (`http://localhost:4000/${path}`)
  }