function calculateTriangleArea(){
const baseField = document.getElementById('triangle-base');
const baseValueText = baseField.value;
const base = parseFloat(baseValueText);
console.log(base);

const heightField = document.getElementById('triangle-height');
const heightValueText = heightField.value;
const height = parseFloat(heightValueText);
console.log(height);

if(isNaN(base) || isNaN(height)){
    alert('give a number');
    return;
}

const area = 0.5 * base * height;
console.log(area)

const areaSpan = document.getElementById('triangle-area');
const areaText = areaSpan.innerText;
areaSpan.innerText = area;

//calculation
addToCalculationEntry('Triangle', area);

}

function calculateRectangleArea(){
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);

    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);

    const area = width * length;
    console.log(area);

    const areaSpan = document.getElementById('rectangle-area');
    const areaText = areaSpan.innerText;
    areaSpan.innerText = area;

    addToCalculationEntry('Rectangle', area);
}

function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    const area = base * height;
    setElementInnerText('parallelogram-area', area);
    console.log(base, height, area);
    addToCalculationEntry('Parallelogram', area);
}
function calculateRhombusArea(){
    const base = getInputValue('rhombus-base');
    const height = getInputValue('rhombus-height');
    const area = 0.5 * base * height;
    setElementInnerText('rhombus-area', area);
    addToCalculationEntry('Rhombus', area);
}

function calculatePentagonArea(){
    const perimeter = getInputValue('pentagon-perimeter');
    const base = getInputValue('pentagon-base');
    const area = 0.5 * perimeter * base;
    setElementInnerText('pentagon-area', area);
    addToCalculationEntry('Rhombus', area);
}

function calculateEllipseArea(){
    const major = getInputValue('ellipse-major');
    const minor = getInputValue('ellipse-minor');
    const area = 3.14 * major * minor;
    setElementInnerText('ellipse-area', area);
    addToCalculationEntry('Ellipse', area);
}

//reusable code//
function getInputValue(inputID){
    const inputField = document.getElementById(inputID);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

function setElementInnerText(elementID, area){
    const element = document.getElementById(elementID);
    const areaText = element.innerText;
    element.innerText = area;
}


function addToCalculationEntry(areaType, area){
   const calculationEntry = document.getElementById('calculation-entry');

   const count = calculationEntry.childElementCount;

   const p = document.createElement('p');
   p.classList.add('my-4');
//    p.innerHTML = areaType + ' ' + area;
   p.innerHTML = `${count + 1}. ${areaType} ${area} cm <sup>2</sup> <button class= "btn btn-sm btn-success">Convert</button>`;
   calculationEntry.appendChild(p);
}