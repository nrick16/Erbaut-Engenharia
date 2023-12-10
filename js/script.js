// Ultimo post do Instagram (IMAGEM)
$(function () {

    //const token = "IGQWRQaDdkR0NxWlhMQ0ltY1R3cVVOeXlEZA0U3SnlwZAXUycTRlZAENDcW8xbzYxdkY0WDBLdzZAMZA0gwQzY3OE1EdTg4VmE4YV96aVFBbGxOR19ZAeW0za2lKWGtTd2U1YkJiTWp6M0Y2V0J5SURTV25vcnBvaWNGNjAZD"
    const token = "IGQWROSU9yMG0zWWdrbG8xT2Q0dl9YQmc5NXM4SXh6Vjh1aWhvLVJDNENsMGt2Mmptb29FQURRRVFQUGN2UmVyRmhxZATZAuUVltZA19RWmpOaTBEcXUycXQ5d0JEYTN0YXdfXzJPQTZARYkp2djg1WmRBQm82VkNwOTQZD"
    const url = "https://graph.instagram.com/me/media?access_token=" + token + "&fields=media_url,media_type,caption,permalink"

    $.get(url).then(function (response) {
        console.log('return: ', response.data);
        
        // Variável contendo o link da ultima imagem do instagram
        const last_post = response.data[0];
        const dataJson = response.data;
        let content = '<div class="row" style="padding-left:5px">';

        const linkDaImagem = response.data[0].media_url;
        const textPost = last_post.caption !== null ? last_post.caption : '';
       
        // Obtendo a referência da tag IMG pelo ID e atribuindo a variável ao atributo src
        document.getElementById('imagem-insta').src = linkDaImagem;
        document.getElementById('titulo-insta').textContent = textPost;

        for(let p = 0; p < response.data.length; p++){
                console.log('return do response Data: ', response.data[p]);
                console.log('return do response media type: ', response.data[p].media_type);
                let type = response.data[p].media_type;
                console.log('return do response Data: ',type);

                if(response.data[p].media_type === 'IMAGE')   {
                    console.log('return do if media URL: ', response.data[p].media_url);
                    let feed = document.getElementById('insta').src = response.data[p].media_url;

                    content += '<div><img id="insta" alt=""></div>';
                }
        }
        content += '</div>';
        
    })

});



window.addEventListener('scroll', function(){
    var menu = document.querySelector('.menu');
    menu.classList.toggle('sticky', window.scrollY > 0);
  })