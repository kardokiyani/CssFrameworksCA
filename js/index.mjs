const API_BASE_URL = "https://nf-api.onrender.com";

const content = document.querySelector(".postContent");

async function getPostContent() {
  const getPostContentUrl = `${API_BASE_URL}/api/v1/social/posts`;
  try {
    const response = await fetch(url);
    const results = await response.json();

    console.log(results);

    for (let i = 0; i < results.length; i++) {
      content.innerHTML += `<a href="index.html.html?id=${results[i].id}"</a>`;
    }
  } catch (error) {
    console.log(error);
  }
}

getPostContent();
