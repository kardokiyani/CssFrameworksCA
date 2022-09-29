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
      content.innerHTML += `<a href="index.html.html?id=${results[i].id}">
      <div>${results[i].posts}</div>
      </a>`;
    }
  } catch (error) {
    console.error(error);
  }
}

getPostContent();
