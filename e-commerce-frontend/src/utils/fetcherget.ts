export async function fetcherwithtoken (path: string) {
    const accessToken = localStorage.getItem("accessToken") || ""
    const data = await fetch (`http://localhost:4000/${path}`, {
      headers: {
        accessToken: accessToken
      }
    })
    return data
  }