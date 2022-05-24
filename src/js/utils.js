const links = document.querySelectorAll('.menu .menu-link')

export const updateMenu = item => {
    links.forEach(element => {
        element.className = 'menu-link'
    })

    document.getElementById(item).classList.add('active')
}