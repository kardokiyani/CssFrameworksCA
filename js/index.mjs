const API_BASE_URL = "https://nf-api.onrender.com";

const content = document.querySelector(".postContent");

async function getPostContent() {
  const getPostContentUrl = `${API_BASE_URL}/api/v1/social/posts`;

  const token = localStorage.getItem("accessToken");

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(getPostContentUrl, options);
    const results = await response.json();

    console.log(results);

    for (let i = 0; i < results.length; i++) {
      const post = results[i];
      content.innerHTML += `<a href="index.html?id=${post.id}">
      <div class="cardStyle">
      <h5 class="card-title">${results[i].title}</h5>
      <p class="card-text created">${results[i].created}</p>
      <p class="card-text id">${results[i].id}</p>
      </div>
      </a>`;
    }
  } catch (error) {
    console.error(error);
  }
}

getPostContent();
