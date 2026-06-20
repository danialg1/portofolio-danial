async function run() {
    const api = `https://id.wikipedia.org/w/api.php?action=query&titles=Universitas_Bina_Sarana_Informatika&prop=images&format=json`;
    const res = await fetch(api, { headers: {'User-Agent': 'MyBot/1.0'} });
    const json = await res.json();
    console.log(JSON.stringify(json, null, 2));
}
run();
