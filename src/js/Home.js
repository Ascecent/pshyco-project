import chomsky from "Images/chomsky.svg"
import bateson from "Images/bateson.svg"
import pavlov from "Images/pavlov.svg"
import maslow from "Images/maslow.svg"
import skinner from "Images/skinner.svg"

function getData() {
    const random = Math.round(Math.random() * 4),
        phraseNumber = Math.round(Math.random())

    const colors = [
        'hsl(215, 92%, 15%)',
        'hsl(215, 92%, 20%)',
        'hsl(216, 90%, 8%)',
        'hsl(215, 90%, 4%)',
        'hsl(356, 85%, 24%)'
    ]

    const waves = [
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="currentColor" fill-opacity="1" d="M0,96L26.7,106.7C53.3,117,107,139,160,154.7C213.3,171,267,181,320,202.7C373.3,224,427,256,480,224C533.3,192,587,96,640,58.7C693.3,21,747,43,800,48C853.3,53,907,43,960,74.7C1013.3,107,1067,181,1120,229.3C1173.3,277,1227,299,1280,261.3C1333.3,224,1387,128,1413,80L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>',
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="currentColor" fill-opacity="1" d="M0,128L26.7,106.7C53.3,85,107,43,160,64C213.3,85,267,171,320,192C373.3,213,427,171,480,154.7C533.3,139,587,149,640,149.3C693.3,149,747,139,800,112C853.3,85,907,43,960,42.7C1013.3,43,1067,85,1120,90.7C1173.3,96,1227,64,1280,96C1333.3,128,1387,224,1413,272L1440,320L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>',
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="currentColor" fill-opacity="1" d="M0,64L26.7,80C53.3,96,107,128,160,144C213.3,160,267,160,320,181.3C373.3,203,427,245,480,245.3C533.3,245,587,203,640,160C693.3,117,747,75,800,96C853.3,117,907,203,960,229.3C1013.3,256,1067,224,1120,213.3C1173.3,203,1227,213,1280,208C1333.3,203,1387,181,1413,170.7L1440,160L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>',
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="currentColor" fill-opacity="1" d="M0,160L26.7,181.3C53.3,203,107,245,160,245.3C213.3,245,267,203,320,181.3C373.3,160,427,160,480,181.3C533.3,203,587,245,640,250.7C693.3,256,747,224,800,197.3C853.3,171,907,149,960,165.3C1013.3,181,1067,235,1120,224C1173.3,213,1227,139,1280,101.3C1333.3,64,1387,64,1413,64L1440,64L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>',
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="currentColor" fill-opacity="1" d="M0,256L26.7,234.7C53.3,213,107,171,160,181.3C213.3,192,267,256,320,245.3C373.3,235,427,149,480,112C533.3,75,587,85,640,96C693.3,107,747,117,800,144C853.3,171,907,213,960,224C1013.3,235,1067,213,1120,186.7C1173.3,160,1227,128,1280,112C1333.3,96,1387,96,1413,96L1440,96L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>'
    ]

    const data = [{
            author: 'Noan Chomsky',
            phrases: [
                'Nunca fui consciente de cualquier otra opción que no fuera la de cuestionar todo',
                'La manipulación mediática hace más daño que la bomba atómica, porque destruye los cerebros.'
            ],
            image: chomsky,
        },
        {
            author: 'Gregory Bateson',
            phrases: [
                'Los cuentos son el camino real hacia el estudio de las relaciones. Lo que es importante en una historia, lo que es verdad en ella, no es el argumento, las cosas o las personas en el cuento sino las relaciones entre ellas.',
                'Una relación sin querellas es aburrida, y una relación con demasiadas querellas es tóxica. Lo deseable es que la relación tenga un grado óptimo de conflictos.'
            ],
            image: bateson,
        },
        {
            author: 'Burrhus Frederic Skinner',
            phrases: [
                'Un fracaso no es siempre un error, puede ser simplemente lo mejor que se puede hacer en esas circunstancias. El verdadero error es dejar de intentarlo',
                'Es un hecho sorprendente que aquellos que se oponen más férreamente a la manipulación de la conducta, no obstante, hacen el esfuerzo más vigoroso para manipular las mentes.'
            ],
            image: skinner,
        },
        {
            author: 'Abraham Maslow',
            phrases: [
                'Uno puede elegir por ir hacia la seguridad o por avanzar hacia el crecimiento. El crecimiento debe ser elegido una y otra vez; el miedo debe superarse una y otra vez.',
                'Si examinamos los deseos que, por término medio, tenemos en la vida cotidiana, comprobamos que tienen una característica importante: son generalmente medios para alcanzar un fin más que fines en sí mismo'
            ],
            image: maslow,
        },
        {
            author: 'Iván Pávlov',
            phrases: [
                'Nunca pienses que lo sabes todo. Por muy alto que te valores, ten siempre el coraje de decirte a ti mismo: soy un ignorante',
                'Condiciona a la gente para que no espere nada y tendrás a todos excitados con la mínima cosa que les ofrezcas.'
            ],
            image: pavlov,
        }
    ]

    const actual = data[random]

    return {
        color: colors[random],
        wave: waves[random],
        author: actual.author,
        phrase: actual.phrases[phraseNumber],
        image: actual.image
    }
}

function renderLayout(quote, author, image, wave) {
    const data = getData()
    quote.innerText = data.phrase
    author.innerText = data.author
    image.style.backgroundImage = `url(${data.image})`
    document.body.style.setProperty('--main-color', data.color)
    wave.innerHTML = data.wave
}

export default function (quoteContainer, authorContainer, imageContainer, waveContainer) {
    renderLayout(quoteContainer, authorContainer, imageContainer, waveContainer)
}