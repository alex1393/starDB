const getResource = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, received ${res.status}`);
  }

  const body = await res.json();
  return body;
};

getResource("https://swapi.dev/api/people/123123")
  .then((body) => {
    console.log(body);
  })
  .catch((err) => {
    console.error(err);
  });
