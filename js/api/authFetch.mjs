export function headers() {
  const token = localStorage.getItem("token");

  return {
    "Content-type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

export async function authFetch(url, options) {
  return fetch(url, {
    ...options,
    headers: headers(),
  });
}
