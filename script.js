document.getElementById('search-input').addEventListener('keyup', async (e) => {
    const postId = document.querySelector('#search-input').value;

    // Send AJAX request
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then(response => response.json())
      .then(data => {
        let html = '';
        data.forEach(comment => {
          html += `<div>
            <h2>${comment.name}</h2>
            <p>${comment.body}</p>
          </div>`;
        });
        //poulate HTML
        document.getElementById('results').innerHTML = html;
      })
      .catch(error => console.error(`Error: ${error}`));
  });
  