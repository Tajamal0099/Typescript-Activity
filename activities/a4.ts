async function fetchData(url: string): Promise<string> {
    try {
        const response = await fetch(url);
        const data = await response.text();
        return data;
    } catch (error) {
        console.log(`Failed to fetch data`);
    }
}
fetchData("https://jsonplaceholder.typicode.com/posts/1")
    .then(data => {
        console.log("Fetched data:", data);
    })
    .catch(error => {
        console.error("Error");
    });
