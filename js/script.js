// ---------------------------------------- TOKEN DE ACESSO DA API DO INSTAGRAM ---------------------------------------
const token = 'IGQWRPengtdTZADU2lSMUhkajNkUDZAORXE3WHJ6ZAXJKLXVWeVByZAVF5UUp3dTc0N0FZAYzl3STBEeGtDUzZAFaGpRRmF6MG9ySjcxVVh5X3l2b1QxWW92QnJTLUZANN25VeEdlVFBwbllCODY5Nk9yZA0hMd1BNMTBLVlUZD'
const url = "https://graph.instagram.com/me/media?access_token=" + token + "&fields=media_url,media_type,caption,permalink"

// Endpoint da API do Instagram para obter informações sobre as postagens do usuário
// const endpoint = `https://graph.instagram.com/v12.0/${userId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${token}`;

// --------------------------------------------------------------------------------------------------------------------   
// -------------------------------- CAPTURA TODOS OS POSTS E COLOCA NO GRID -------------------------------------------   
// Obtendo a referência da div onde as imagens serão exibidas
const galeriaDiv = document.getElementById('galeria');

// Fazendo a requisição à API do Instagram
fetch(url)
  .then(response => response.json())
  .then(data => {
    // Iterando sobre as postagens recebidas
    data.data.forEach(postagem => {
      if (postagem.media_type === 'IMAGE') {
        // Criando uma div container para cada imagem
        const divContainer = document.createElement('div');
        divContainer.classList.add('imagem-container');

        // Criando a imagem
        const imagemElement = document.createElement('img');
        imagemElement.src = postagem.media_url;
        imagemElement.alt = 'Imagem'; // Adicione um texto alternativo

        // Criando a camada de escurecimento
        const escurecimento = document.createElement('div'); // <-----------------------
        escurecimento.classList.add('escurecimento');
        divContainer.appendChild(escurecimento);

        // Criando o texto sobreposto
        const textoSobreposto = document.createElement('div');
        textoSobreposto.classList.add('texto-sobreposto');
        textoSobreposto.textContent = postagem.caption;

        // Adicionando a imagem e o texto à div container
        divContainer.appendChild(imagemElement);
        divContainer.appendChild(textoSobreposto);

        // Adicionando a div container à div principal
        galeriaDiv.appendChild(divContainer);
      } else if (postagem.media_type === 'VIDEO') {
        // Criando uma div container para cada vídeo
        const divContainer = document.createElement('div');
        divContainer.classList.add('video-container');

        // Criando o vídeo
        const videoElement = document.createElement('video');
        videoElement.src = postagem.media_url;
        videoElement.controls = true; // Adicionar controles de reprodução

        // Criando a camada de escurecimento
        const escurecimento = document.createElement('div'); // <------------------------------
        escurecimento.classList.add('escurecimento');
        divContainer.appendChild(escurecimento);

        // Criando o texto sobreposto para vídeos
        const textoSobreposto = document.createElement('div');
        textoSobreposto.classList.add('texto-sobreposto-video');
        textoSobreposto.textContent = postagem.caption;

        // Adicionando o vídeo e o texto à div container
        divContainer.appendChild(videoElement);
        divContainer.appendChild(textoSobreposto);

        // Adicionando a div container à div principal
        galeriaDiv.appendChild(divContainer);
      }
    });
  })
  .catch(error => console.error('Erro na requisição à API do Instagram:', error));

// --------------------------------------------------------------------------------------------------------------------   
// -------------------------------- CAPTURA O ULTIMO POST ------------------------------------------------------------- 
const ultimaMidiaDiv = document.getElementById('ultima-midia');

// Fazendo a requisição à API do Instagram
fetch(url)
  .then(response => response.json())
  .then(data => {
    // Verificando se há alguma postagem
    if (data.data.length > 1) {
      // Obtendo a última postagem
      const ultimaPostagem = data.data[0];

      // Criando uma div container para a última mídia
      const divContainer = document.createElement('div');
      divContainer.classList.add('media-container');

      // Criando a mídia (imagem ou vídeo)
      const mediaElement = ultimaPostagem.media_type === 'IMAGE'
        ? document.createElement('img')
        : document.createElement('video');

      mediaElement.src = ultimaPostagem.media_type === 'IMAGE'
        ? ultimaPostagem.media_url
        : ultimaPostagem.media_url;

      if (ultimaPostagem.media_type === 'VIDEO') {
        mediaElement.controls = true; // Adicionar controles de reprodução para vídeos
      }

      // Criando o texto sobreposto
      const textoSobreposto = document.createElement('div');
      textoSobreposto.classList.add('texto-sobreposto');
      textoSobreposto.textContent = ultimaPostagem.caption;

      // Adicionando a mídia e o texto à div container
      divContainer.appendChild(mediaElement);
      divContainer.appendChild(textoSobreposto);

      // Adicionando a div container à div principal
      ultimaMidiaDiv.appendChild(divContainer);
    }
  })
  .catch(error => console.error('Erro na requisição à API do Instagram:', error));



 