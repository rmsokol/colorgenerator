// Vars
const colorInput = document.getElementById("color-input")
const modeSelect = document.getElementById("mode-select")
const getColorButton = document.getElementById("get-color-button")
const colorCard = document.getElementById("color-codes")
const colorContainer = document.getElementById("color-card")
let hexVar = "000"
let mode = "monochrome"

// Listeners
modeSelect.addEventListener("click", function(event) {
    mode = event.target.value
})

colorInput.addEventListener("change", function (event) {
    hexVar = event.target.value.substring(1)
})

// API Call & Function
getColorButton.addEventListener("click", function (event) {
    colorContainer.innerHTML = ''
    
    fetch(`https://www.thecolorapi.com/scheme?mode=${mode}&hex=${hexVar}`)
        .then(res => res.json())
        .then(data => {
            const colorData = data
            const colors = []
            for (let i = 0; i < 5; i++) {
                colors.push(colorData.colors[i].hex.value)
                const newColor = document.createElement('div')
                newColor.style.backgroundColor = colorData.colors[i].hex.value;
                const newCode = document.createElement('p')
                newCode.textContent = colorData.colors[i].hex.value;
                newColor.appendChild(newCode)
                colorContainer.appendChild(newColor)
            }
            
        })
})






