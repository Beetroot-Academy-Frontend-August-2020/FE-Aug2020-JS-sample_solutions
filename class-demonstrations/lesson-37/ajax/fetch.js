const API = 'https://jsonplaceholder.typicode.com';

// wrapper - some or a lot of code is hidden away from the developer
// so that the developer doesn't need to worry about it.
fetch(`${API}/posts`) // array of JSON objects
  .then(response => response.json())
  .then(posts => {
    posts.forEach(post => document.body.appendChild(getBlogPost(post)));
  })
  .catch(error => console.error(error));

function getBlogPost(post) {
  const blogPost = document.createElement('div');
  const title = document.createElement('h2');
  const description = document.createElement('p');
// <p>THIS IS THE INNER TEXT</p>
// <p><a href="google.com">google</a></p>
  title.innerText = post.title;
  description.innerText = post.body;

  blogPost.appendChild(title);
  blogPost.appendChild(description);
  blogPost.appendChild(document.createElement('hr'));

  return blogPost;
}
