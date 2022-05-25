import psychoDef from "Images/psychology_def_illustration.png"
import psychoCategory from "Images/category_illustration.jpg"
import psychoStudyObject from "Images/study_object_illustration.jpg"
import psychoMethodology from "Images/methodology_illustration.jpg"
import psychoAuthors from "Images/authors_illustration.jpg"
import psychoContribs from "Images/contributions_illustration.jpg"
import psychoStrengths from "Images/strength_illustration.jpg"
import psychoWeakness from "Images/weaknesses_illustration.jpg"
import psychoAdvances from "Images/advances_illustration.jpg"
import psychoTrends from "Images/trends_illustration.jpg"
import pablov from "Images/pavlov.svg"
import skinner from "Images/skinner.svg"
import shannon from "Images/shannon.jpg"
import chomsky from "Images/chomsky.svg"
import freud from "Images/freud.jpg"
import jung from "Images/jung.jpg"
import bateson from "Images/bateson.svg"
import bertalanffy from "Images/bertalanffy.jpg"
import maslow from "Images/maslow.svg"
import allprot from "Images/allport.jpg"
import Swal from "sweetalert2"

const schoolData = [{
        name: 'Conductismo',
        definition: 'Ciencia natural',
        categorization: 'Enfoque ontológico: monista - materialista. Enfoque epistemológico: empírico - analítico',
        study_object: 'La conducta',
        methodology: 'Método científico y experimentación',
        authors: [{
                text: 'Pavlov aporta los conceptos de arco reflejo y condicionamiento. Condicionamiento clásico',
                image: pablov
            },
            {
                text: 'Skinner agrega el reforzamiento y condicionamiento operante',
                image: skinner
            }
        ],
        contributions: [
            'Señaló la necesidad del estudio objetivo, prescindiendo de la especulación',
            'Impulsó un mayor rigor conceptual.',
            'Destacó que los organismos interactúan mediante conductas que son observables.',
            'Incorporó el concepto conducta en la psicología y la posibilidad de usar técnicas objetivas para estudiarla'
        ],
        strengths: [
            'Permite modificar conductas, tanto positiva como negativamente',
            'Utiliza un método cuantificable.',
            'Demostró que es posible modificar conductas a través de estímulos y reforzarlas posteriormente'
        ],
        weaknesses: [
            'Tiende a ser reduccionista y mecanicista.',
            'Aunque su intención es explicar la conducta, solo logra describirla.',
            'El informe verbal de los sujetos no puede considerarse como un dato objetivo',
            'No explica la relación entre experiencia consciente y conductas corporales',
            'Sus postulados iniciales eran lineales estimula respuesta y no prestaba atención a procesos internos.'
        ],
        recent_advances: ['Uso de las teorías conductistas en el marketing online y la psicología del consumidor.'],
        perspectives: [
            'Análisis experimental del comportamiento',
            'Análisis conductual aplicado'
        ]
    },
    {
        name: 'Psicología cognitiva',
        definition: 'Es la encargada de los procesos mentales implicados en el conocimiento.',
        categorization: 'Enfoque ontológico: monista - materialista. Enfoque epistemológico: empírico - analítico',
        study_object: 'Cognición - Procesos mentales',
        methodology: 'El método Hipotético - Deductivo experimental ',
        authors: [{
                text: 'Shannon escribe en 1984 una serie de leyes matemáticas para explicar y medir el flujo  de información a través de un canal. ',
                image: shannon
            },
            {
                text: 'Chomsky: a partir de este autor toda la corriente de la psicolingüística estudiara el modo en que el lenguaje  pasa desde las estructuras profundas a las superficies.',
                image: chomsky
            }
        ],
        contributions: [
            'Estudio y mejoramiento de la comprensión lectora en la educación superior.',
            'Se interesó por cómo se procesa la información y qué mecanismos usa el organismo para ello.',
            'Retomó bases filosóficas racionalistas y las articuló con métodos empíricos y cuantitativos, volviéndolos científicos. ',
            'Surgió como una variante crítica del Conductismo.',
            'Estudio psicológico de la lingüística, definición de la competencia linguistica (Chomsky)',
        ],
        strengths: [
            'Los experimentos empíricos difícilmente refutables.',
            'Presenta dos versiones: 1)Versión débil: similitud funcional con el ordenador, pero admite diferencias. 2)Versión fuerte: la similitud es llevada al límite',
        ],
        weaknesses: [
            'Reduccionista en cuanto trata a la mente como un mecanismo que procesa información similar a un computador.',
            'Los procesos mentales que estudia son difícilmente accesibles a la observación y muy veloces.'
        ],
        recent_advances: [
            'Teoría de las finanzas sus  supuestos, neoclasicismo y psicología cognitiva.',
            'Uso de sus postulados para el desarrollo de la inteligencia artificial.',
        ],
        perspectives: [
            'Teoría del aprendizaje significativo en la perspectiva de la psicología cognitiva.',
            'Pretende crear una ciencia objetiva del estudio mental y crear un modelo como el del procesamiento de la información.',
            'Apoyo al desarrollo de la inteligencia artificial y los modelos de simulación.',
        ]
    },
    {
        name: 'Enfoque psicodinámico',
        definition: 'Un método para la investigación de los procesos mentales inaccesible de otro modo, para el tratamiento de trastornos neuróticos',
        categorization: 'Enfoque ontológico: Dualismo - Idealismo. Enfoque Epistemológico: Hermenéutico (interpretación)',
        study_object: 'Inconsciente',
        methodology: 'Método científico , Psicoanálisis constituye una disciplina científica',
        authors: [{
                text: 'Sigmund Freud padre del psicoanálisis y enfoque psicodinámico, se separa de la medicina principalmente para explicar la histeria como una patología de origen psíquico',
                image: freud
            },
            {
                text: 'Carl Jung su teoria de inconsciente colectivo que es anterior al inconsciente individual, difería con Freud',
                image: jung
            }
        ],
        contributions: [
            'Técnica de asociación libre clave para el inicio del psicoanálisis y la psicoterapia.El paciente puede por asociación describir lo olvidado.',
            'Los recuerdos son determinantes psíquicos y sólo accederán a la conciencia cuando se supere la represión',
            'Conocimiento de enfermedades psicosomáticas y manifiesto del inconsciente',
            'Psicoterapia de apoyo expresiva (SET) dirigida a facilitar la autocomprensión del paciente para los terapeutas,a (Luborsky, 1984).'
        ],
        strengths: [
            'Se enfoca en la infancia y en las repercusiones de esta en la conducta del adulto.',
            'Explicación de la conducta con una causa sexual o la búsqueda de placer a lo largo de la vida',
            'Se fundamenta en 3 ejes: la represión, las pulsiones sexuales y la transferencia que resulta novedoso.'
        ],
        weaknesses: [
            'En la teoría se anula la capacidad de decisión humana de decisión.',
            'El método hipnótico fue abandonado por presentar escasos resultados.',
            'La asociación libre no siempre lleva a identificar los problemas neuróticos.',
            'Se requiere alta capacidad del terapeuta, pues se busca la TRANSFERENCIA de los vínculos de los progenitores al terapeuta.',
        ],
        recent_advances: [
            'Utilización de psicoanálisis y psicoterapia para resolución de conflictos en adolescentes y parejas.',
            'Desarrollo de la psicoterapia dinámica a corto plazo STDP, se basa en la formulación de objetivos con el paciente a corto plazo. No todos los pacientes pueden acceder a esta terapia, usados por Summer & Barber en 2010',
        ],
        perspectives: [
            'Investigación en terapia psicodinámica multicultural, como la preferencia de terapeutas de su misma raza o etnia para realizar la transferencia.',
            'Psicodinámica culturalmente sensible, en donde se exploren narrativas culturales, históricas y de opresión social.'
        ]
    },
    {
        name: 'Humanismo',
        definition: 'Ciencia humana y existencial',
        categorization: 'Enfoque ontológico: Dualismo - Idealismo. Enfoque Epistemológico:Hermenéutico(interpretación)',
        study_object: 'La autorrealización de los seres humanos',
        methodology: 'Método holístico. Método de los nuevos paradigmas de la investigación, basado en el conocimiento experiencial (Rosal, 2017)',
        authors: [{
                text: 'Allport Teoría de la personalidad (Rosal, 2017)',
                image: allprot
            },
            {
                text: 'Abraham Maslow Teoría de la motivación humana (psychclassics, s.f). Fundador Journal of Humanistic Psychology en 1961 (Rosal, 2017)',
                image: maslow
            }
        ],
        contributions: [
            'Interés en el estudio de la personalidad en su conjunto, singularidad y historicidad.',
            'Nuevas formas de psicoterapia (gestalt, transaccional)',
            'Investigación con enfoque predominantemente idiosincrático para la comprensión de la persona.',
            'Prestar atención a las experiencia y actividades específicamente humanas (voluntad, amor, otras)',
            'Recuperar la importancia de la voluntad humana.            ',
        ],
        strengths: [
            'Tiene una visión holística del ser humano.',
            'Reconoce que los humanos tienen creatividad y capacidad de decisión.',
            'Reconoce otras motivaciones más allá de los impulsos básicos psicofisiológicos	',
            'Se enfoca en el potencial humano que es altamente aceptado por la comunidad.',
        ],
        weaknesses: [
            'Maslow tuvo que admitir que no todas las personas que superaban sus  necesidades básicas, pasaban a experimentar metamotivaciones. ',
            'Puede ser ecléctica en cuanto hace uso de modelos o técnicas, sin ser coherente con el modelo humanista.',
            'Algunos psicólogos se han separado de los ideales iniciales',
            'Desisterés de algunos psicólogos humanistas frente a la académica y la tradición ciéntifica.',
            'Potencia el emocionismo y el narcicismo.',
        ],
        recent_advances: [
            'Vinculación de focusing con otras técnicas como el método transversal, en la psicoterapia, educación, organizaciones',
            'Psicología positiva y humanismo',
        ],
        perspectives: [
            'Desarrollo de la psicología positiva(Seligman)',
            'Psicología humanista - existencial',
            'Vinculación entre la experiencia terapéutica y el desarrollo científico',
        ]
    },
    {
        name: 'Enfoque sistémico',
        definition: 'Resultado de la interacción de los sistemas que sería la interacción entre las personas',
        categorization: 'Enfoque ontológico: No tiene una definición clara. Enfoque Epistemológico: Se encuentra en debate entre neo - positivista y post - modernistas ',
        study_object: 'Sistemas interrelacionales',
        methodology: 'Pluralidad metodológica: Método holístico. Análisis de casos, experimental',
        authors: [{
                text: 'Ludwig von Bertalanffy, Planteó laTeoría General de Sistemas',
                image: bertalanffy
            },
            {
                text: 'Gregory Bateson, Desarrolló la teoría del doble vínculo',
                image: bateson
            }
        ],
        contributions: [
            'Reveló la importancia de la comunicación entre las personas.',
            'Se evalúa la relaciones por encima de los individuos, esto bridó una nueva perspectiva para el abordaje de problemas sociales.',
            'Permitió pensar en la acción comunitaria',
            'Estudios sobre la coordinación social con impacto en el manejo del poder, la salud, la comunidad.',
            'Terapia familiar sistémica.',
        ],
        strengths: [
            'Reveló la importancia de la cultura en la psicología, generando estudios psicoculturales y transculturales, aplicados a ámbitos sociales, escolares y clínicos (Martinez,2017)'
        ],
        weaknesses: [
            'Falta de definición del objeto de estudio.',
            'Multiplicidad de metodologías de investigación dependiendo de la fenomenología, que no permite establecer un campo definido.',
        ],
        recent_advances: [
            'La construcción y evolución de la identidad personal y social es uno de los ejes vertebradores de psicología social contemporánea',
            'Investigación aplicada en la influencia social y la persuación (Martinez, 2017)',
        ],
        perspectives: [
            'Generación de teorías interdisciplinares con otras ciencias como neurociencia social, evolucionismo y cultura, antropología y sociología. '
        ]
    }
]

const comparisonData = [{
        name: 'Definición de psicología',
        fullname: 'Definición de la psicología',
        id: 'definition',
        image: psychoDef
    },
    {
        name: 'Categorización',
        fullname: 'Categorización desde ontología y epistemología',
        id: 'categorization',
        image: psychoCategory
    },
    {
        name: 'Objeto de estudio',
        fullname: 'Objeto de estudio',
        id: 'study_object',
        image: psychoStudyObject
    },
    {
        name: 'Metodología',
        fullname: 'Enfoque metodológico',
        id: 'methodology',
        image: psychoMethodology
    },
    {
        name: 'Autores',
        fullname: 'Principales autores y fotografías',
        id: 'authors',
        image: psychoAuthors
    },
    {
        name: 'Aportes',
        fullname: 'Principales aportes',
        id: 'contributions',
        image: psychoContribs
    },
    {
        name: 'Fortalezas',
        fullname: 'Fortalezas',
        id: 'strengths',
        image: psychoStrengths
    },
    {
        name: 'Debilidades',
        fullname: 'Debilidades',
        id: 'weaknesses',
        image: psychoWeakness
    },
    {
        name: 'Avances recientes',
        fullname: 'Avances recientes',
        id: 'recent_advances',
        image: psychoAdvances
    },
    {
        name: 'Perspectivas y tendencias',
        fullname: 'Perspectivas y tendencias',
        id: 'perspectives',
        image: psychoTrends
    }
]

export function getActualData(binding) {
    return schoolData.map(elem => elem[binding])
}

export function renderData(data, isAuthors) {
    const titles = schoolData.map(elem => elem.name)
    const length = titles.length

    let html = `<div class="specific-features">`

    for (let i = 0; i < length; i++) {
        const el = data[i]

        html += `<div class="feature-container">
                    <p class="feature-title">${titles[i]}</p>`

        if (typeof el == 'object') {
            if (el.length == 0) html += ''
            else {

                if (isAuthors) {

                    el.forEach(item => {
                        html += `<div class="author-container">
                                <div class="author-image-container">
                                    <img src="${item.image}">
                                </div>
                                <p class="author-name">${item.text}</p>
                            </div>`
                    })
                } else {
                    html += '<ul>'

                    el.forEach(item => {
                        html += `<li>${item}</li>`
                    })

                    html += '</ul>'
                }

            }

        } else {
            html += `<p class="feature-description">${el}</p>`
        }

        html += `</div>`
    }

    html += '</div>'

    return html
}

export default function (container) {
    let html = '';

    comparisonData.forEach(element => {
        html += `<button class="feature-button" data-binding="${element.id}" data-full-binding-name="${element.fullname}"><div class="feature-image-container"><img class="feature-img" src="${element.image}" alt="${element.fullname}"></div>${element.name}</button>`
    })

    container.innerHTML = html

    document.querySelectorAll('#characteristics button.feature-button').forEach(el => [
        el.addEventListener('click', e => {
            let target

            if (e.target.getAttribute('data-binding')) {
                target = e.target
            } else {
                target = e.target.parentNode.parentNode
            }

            const binding = target.getAttribute('data-binding');
            const html = renderData(getActualData(binding), binding == 'authors')

            Swal.fire({
                title: `</div>${target.getAttribute('data-full-binding-name')}</div>`,
                html: html,
                width: '95%',
                heightAuto: true,
                confirmButtonText: 'Aceptar',
            })
        })
    ])
}