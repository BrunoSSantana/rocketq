const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=theme]");


const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)

const initialColors = {
  background: '#F6FAFF',
  primary: '#3485FF',
  secondary: '#345',
  colorHead: '#0d114f',
  greyPrimary: '#a1b2cd',
  point: '#4F5'
  
}

const rocketColors = {
  background: '#454545',
  primary: '#8257e5',
  secondary: '#FAFAFA',
  colorHead: '#FAFAFA',
  greyPrimary: '#FAFAFA',
  point:'#F6F6F6'
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/g, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}


checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(rocketColors) : changeColors(initialColors)
})
