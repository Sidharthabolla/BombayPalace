import fetch from 'isomorphic-fetch';

export default class {
  static get(path, data={}){
    return fetchJson(path, {
      method: 'GET'
    })
  }

  static create(path, data={}){
    return fetchJson(path, {
      method: 'POST',
      headers: Object.assign(
        {'Content-Type': 'application/json'}
      ),
      body: JSON.stringify(data)
    })
  }
}

async function fetchJson(path, options) {
  const response = await fetch(path, options);

  if(response.status === 401 || response.status === 400){
    return null
  }

  // const JsonBody = await response.json();
  return response
}