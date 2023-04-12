$('#botao').on('click', async function (event) {
    event.preventDefault();
    let dataBusca = $('#data-busca').val();
    const endpoint = `https://api.nasa.gov/planetary/apod?api_key=gb8N4ADtCncjCg2CPLeJY1nqhQZ0Tch7jbP4T1Yy&date=${dataBusca}`;
    let data = await fetch(endpoint).then(response => response.json());
    $('#titulo-api').html(`${data.title}`);
    $('#texto-api').html(`${data.explanation}`);
    $('#texto-auxiliar').html(`Click on the image to expand`);
    $('#imagem-api').html('<img src="'+data.url+'" style="width: 400px; height: auto;">');
});

$("#imagem-api").on("click", async function(event) {
    event.preventDefault();
    let dataBusca = $('#data-busca').val();
    const endpoint = `https://api.nasa.gov/planetary/apod?api_key=gb8N4ADtCncjCg2CPLeJY1nqhQZ0Tch7jbP4T1Yy&date=${dataBusca}`;
    let data = await fetch(endpoint).then(response => response.json());
    $('#imagem-hd').html('<img src="'+data.hdurl+'" style="width: 100%; height: auto;">');
    $('#titulo-modal').html(`${data.title}`);
    $('#modal-imagem').modal('show');
 });
