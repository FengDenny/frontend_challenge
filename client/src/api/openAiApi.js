export const sendRequest = async (url, key, data) => {
  return await fetch(`${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify(data),
  }).then(handleRequest);
};

const handleRequest = (res) => {
  if (res.status === 200) {
    return Promise.resolve(res.json()).then((data) => {
      return { data, status: res.status };
    });
  }
  return Promise.reject(res.status);
};
