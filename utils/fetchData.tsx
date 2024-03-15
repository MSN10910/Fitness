export const exerciseOptions = {
  method: "GET",
  params: { limit: "10" },
  headers: {
    "X-API-Key": 'VWbHXD+/MbIEFsl902FYWw==noELYEyXIOJJy1Vy',
  },
};

export const fetchData = async (url: string, options: object) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};

