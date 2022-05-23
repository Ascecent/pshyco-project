import {
    renderActiveLink
} from './utils'

import chomsky from "Images/chomsky.svg"
import bateson from "Images/gregory-bateson.svg"
import pavlov from "Images/Ivan_Pavlov.svg"
import maslow from "Images/maslow.svg"
import skinner from "Images/skinner.svg"

function getData() {
    const random = Math.round(Math.random() * (4 - 0) + 0),
        phraseNumber = Math.round(Math.random()),
        data = [{
                author: 'Noan Chomsky',
                phrases: [
                    'Nunca fui consciente de cualquier otra opción que no fuera la de cuestionar todo',
                    'La manipulación mediática hace más daño que la bomba atómica, porque destruye los cerebros.'
                ],
                image: chomsky,
                getPhrase: function (index) {
                    return this.phrases[index]
                }
            },
            {
                author: 'Gregory Bateson',
                phrases: [
                    'Los cuentos son el camino real hacia el estudio de las relaciones. Lo que es importante en una historia, lo que es verdad en ella, no es el argumento, las cosas o las personas en el cuento sino las relaciones entre ellas.',
                    'Una relación sin querellas es aburrida, y una relación con demasiadas querellas es tóxica. Lo deseable es que la relación tenga un grado óptimo de conflictos.'
                ],
                image: bateson,
                getPhrase: function (index) {
                    return this.phrases[index]
                }
            },
            {
                author: 'Burrhus Frederic Skinner',
                phrases: [
                    'Un fracaso no es siempre un error, puede ser simplemente lo mejor que se puede hacer en esas circunstancias. El verdadero error es dejar de intentarlo',
                    'Es un hecho sorprendente que aquellos que se oponen más férreamente a la manipulación de la conducta, no obstante, hacen el esfuerzo más vigoroso para manipular las mentes.'
                ],
                image: skinner,
                getPhrase: function (index) {
                    return this.phrases[index]
                }
            },
            {
                author: 'Abraham Maslow',
                phrases: [
                    'Uno puede elegir por ir hacia la seguridad o por avanzar hacia el crecimiento. El crecimiento debe ser elegido una y otra vez; el miedo debe superarse una y otra vez.',
                    'Si examinamos los deseos que, por término medio, tenemos en la vida cotidiana, comprobamos que tienen una característica importante: son generalmente medios para alcanzar un fin más que fines en sí mismo'
                ],
                image: maslow,
                getPhrase: function (index) {
                    return this.phrases[index]
                }
            },
            {
                author: 'Iván Pávlov',
                phrases: [
                    'Nunca pienses que lo sabes todo. Por muy alto que te valores, ten siempre el coraje de decirte a ti mismo: soy un ignorante',
                    'Condiciona a la gente para que no espere nada y tendrás a todos excitados con la mínima cosa que les ofrezcas.'
                ],
                image: pavlov,
                getPhrase: function (index) {
                    return this.phrases[index]
                }
            }
        ]

    const actual = data[random]

    return {
        author: actual.author,
        phrase: actual.getPhrase(phraseNumber),
        image: actual.image
    }
}

function renderLayout(quote, author, image) {
    const data = getData()
    quote.innerText = data.phrase
    author.innerText = data.author
    image.style.backgroundImage = `url(${data.image})`
}

export default function (quoteContainer, authorContainer, imageContainer) {
    renderActiveLink()
    renderLayout(quoteContainer, authorContainer, imageContainer)
}