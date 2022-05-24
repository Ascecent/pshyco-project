function getSchools() {
    return [{
            name: 'Conductismo',
            image: '',
            color: ''
        },
        {
            name: 'Psicología cognitiva',
            image: '',
            color: ''
        },
        {
            name: 'Enfoque psicodinámico',
            image: '',
            color: ''
        },
        {
            name: 'Humanismo',
            image: '',
            color: ''
        },
        {
            name: 'Enfoque sistémico',
            image: '',
            color: ''
        }
    ]
}

function getComparisonData() {
    return [
        'Definición de psicología',
        'Categorización',
        'Objeto de estudio',
        'Metodología',
        'Autores',
        'Aportes',
        'Fortalezas',
        'Debilidades',
        'Avances recientes',
        'Perspectivas y tendencias'
    ]
}

export default function (container) {
    const buttonsData = getComparisonData()
    let html = ''

    buttonsData.forEach(element => {
        html += `<div>${element}</div>`
    })

    container.innerHTML = html
}