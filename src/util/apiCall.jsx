export function apiCall({route, method = 'POST', payload = {}, callBack = () => {}, complete = () => {}, errorCallback = () => {}}){
    fetch(`${import.meta.env.VITE_URL}/${route}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(response => response.json())
      .then(data => {
        callBack(data)
      })
      .finally(() => {complete()})
      .catch(error => {
        console.error('Error:', error)
        errorCallback(error)
    });
}