// Ultimo post do Instagram (IMAGEM)
$(function () {

    const token = "IGQWRNaWZAPWGJMbXJ5WnAtanlBWUpuR09ZAdWxZAbHhDb2FOSjNJTUxvcDdIbjd0b0NSR1lDcXdvWElxMDNDNTFaZA3JLOWxMdTkzYzNNb2FFTVBrZATZAQVnNNaGpES2FuZAkRtUUZAqbG55ZA216VEU0LUx4M19KZATc3NVEZD"
    const url = "https://graph.instagram.com/me/media?access_token=" + token + "&fields=media_url,media_type,caption,permalink"

    $.get(url).then(function (response) {
        console.log('return: ', response.data);

        // Variável contendo o link da ultima imagem do instagram
        const last_post = response.data[1];

        const linkDaImagem = response.data[1].media_url;
        const textPost = last_post.caption !== null ? last_post.caption : '';
       
        // Obtendo a referência da tag IMG pelo ID e atribuindo a variável ao atributo src
        document.getElementById('imagem-insta').src = linkDaImagem;
        document.getElementById('titulo-insta').textContent = textPost;
    })
});