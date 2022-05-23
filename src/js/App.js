import "Styles"
import AppIcon from "Images/icon.svg"
import Home from "./Home"
document.getElementById('app-icon').src = AppIcon
Home(document.getElementById('quote'), document.getElementById('author'), document.getElementById('author-image'))