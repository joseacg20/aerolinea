const apiURL = `https://5a08970d-c1fe-48b4-904e-6899a8736d54.mock.pstmn.io/places`;

export default function getApiPlaces() {
  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { results } = response;
      return results;
    });
}
