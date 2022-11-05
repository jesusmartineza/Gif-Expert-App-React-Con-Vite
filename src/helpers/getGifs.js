//Peticion http de los gifs

export const getGifs = async (category) => {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=Qvmnj5wq88rHKjs22lLg3LuECaYB2Szi&q=${category}&limit=10`;
	const resp = await fetch(url);
	const { data } = await resp.json();

	const gifs = data.map((img) => ({
		id: img.id,
		title: img.title,
		url: img.images.downsized_medium.url,
	}));

	// console.log(gifs);

	return gifs;
};
