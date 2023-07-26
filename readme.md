## Repositorio destinado a facilitar el orden a la hora de ver listas de videos
### El archivo index.html debe levantarse con un localhost
### El archivo JSON se compone de estos elementos
* "numero_de_video"
* "titulo"
* "duracion"
* "link"
* "status"

<br>

En status las posibles opciones son:
1. Not-viewed
2. Viewing-hh:mm:ss (las hh:mm:ss deben estar entre el rango 00:00:01 y la duracion maxima del video menos 1 segundo)
3. Viewed-x (siendo x el numero de veces que se vio. Mínimo 1, maximo 100)

Segun el status, la carta será de color gris (1), amarillo (2) o verde(3).

<br>

En caso de estar en el estado 2, visualizando, el link se debe ajustar a ese punto en concreto
<br>
Por ejemplo: link video 1 = https://youtu.be/sYqn4lhcMZE
<br>
Sabemos que si nos quedamos estudiando en el tiempo 01:00:00, es decir, justo en una hora, la url deberá ser la siguiente:
    <br>
    https://youtu.be/sYqn4lhcMZE&t=3600s
    <br>
La explicacion es que se añade & + t="tiempo en segundos"
