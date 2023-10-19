//contains basic functions that will be used in the Stations component

//for lines 4-5

const line4 = () =>{
    const lineFour = []
    for (let i = 1; i < 24; i++){
        lineFour.push(i);
    }
    return lineFour;
}

const line5 = () => {
    const lineFive = []
    for (let i = 1; i < 24; i++) {
        lineFive.push(i);
    }
    return lineFive;
}

export {line4, line5}