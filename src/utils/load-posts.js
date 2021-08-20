export const loadPosts = async () => {
    const postResponse = fetch('http://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('http://jsonplaceholder.typicode.com/photos');
    const [posts, photos] = await Promise.all([postResponse, photosResponse]);
   
    const postsJson = await posts.json();
    const photosJson = await photos.json();
   
    const postAndPhotos = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url}
    });

    return postAndPhotos;
}
