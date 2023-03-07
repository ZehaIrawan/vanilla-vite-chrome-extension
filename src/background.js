fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

console.log('acb')

fetch("https://api.track.toggl.com/api/v9/me", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
"Authorization": `Basic 5575ea0729db7c1bab85caa7e6fdac54:api_token`
  },
})
.then((resp) => resp.json())
.then((json) => {
  console.log(json);
})
.catch(err => console.error(err));