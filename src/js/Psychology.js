import ConceptualMap from "Images/conceptual_map.svg"
import Panzoom from '@panzoom/panzoom'

export default function (element) {
    element.innerHTML = `<img src="${ConceptualMap}" alt="Conceptual map" id="svg-root">`
    const panzoom = Panzoom(element)
    element.addEventListener('wheel', panzoom.zoomWithWheel)
}