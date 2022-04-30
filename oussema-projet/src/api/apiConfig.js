const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '60bd79b25647bde3c86bdf8fa2df60dc',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;