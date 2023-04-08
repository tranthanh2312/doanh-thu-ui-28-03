var postApi = 'https://jsonplaceholder.typicode.com/todos/1';

fetch(postApi)
.then(function(response) {
                                return response.json();
//JSON.parse: JSON-> JavaScript types
})
.then(function(posts) {
                                console.log(posts)
})
.catch(function(err){
                                console.log(err);
})