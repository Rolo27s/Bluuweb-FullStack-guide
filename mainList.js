const URL = "https://www.youtube.com/playlist?list=PLPl81lqbj-4Iy7yuRrVLn4V6isOVpvlpl";
const content = document.getElementById("content");

fetch('./list.json')
    .then(response => response.json())
    .then(data => {
        // console.log(data);

        // Recorre cada objeto del JSON y crea una caja para cada uno
        data.forEach(objeto => {
            let duracion_total;
            let currentStatus = objeto.status.slice(8,16);

            const caja = document.createElement('div');
            
            if(objeto.status.includes("Not")) {
                caja.classList.add('caja');
            } else if(objeto.status.includes("Viewed")) {
                caja.classList.add('caja-verde');
            } else {
                caja.classList.add('caja-amarillo');
            }
            
            const numeroVideo = document.createElement('p');
            numeroVideo.textContent = `Número de video: ${objeto.numero_de_video}`;

            const titulo = document.createElement('h2');
            titulo.textContent = objeto.titulo;

            const status = document.createElement('p');

            if(objeto.status.includes("Viewing")){
                
                status.textContent = `🕑 ${currentStatus}`;
            }
                
            if(objeto.status.includes("Viewed-"))
                status.textContent = '✅' ;

            if(objeto.status.includes("Not"))
                status.textContent = '❌' ;
                

            const duracion = document.createElement('p');
            duracion.textContent = `Duración: ${objeto.duracion}`;

            const link = document.createElement('a');
            if (objeto.status.includes("Viewing")) {
                // Parseo el currentStatus a horas, minutos, segundos y lo convierto todo a segundo
                let totalSeg = 0;
                let horas = parseInt(currentStatus.slice(0,2)) * 3600;
                let minutos = parseInt(currentStatus.slice(3,5)) * 60;
                let segundos = parseInt(currentStatus.slice(6,8)) * 1;

                totalSeg = horas + minutos + segundos

                link.href = objeto.link + "&t=" + totalSeg + "s";
            } else {
                link.href = objeto.link;
            }
            link.textContent = "Ver video";

            caja.appendChild(numeroVideo);
            caja.appendChild(titulo);
            caja.appendChild(status);
            caja.appendChild(duracion);
            caja.appendChild(link);

            content.appendChild(caja);
        })
    })
    .catch(error => {
        console.error('Error al obtener el archivo JSON', error);
    });