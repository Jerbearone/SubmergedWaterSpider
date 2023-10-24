//contains basic functions that will be used in the Stations component

//for lines 4-5
const items = [10,20,30,60,80,93,130,140,153,170,176,179,220,296];

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


const lineFourObject = () => {
    const newLineFourObject = {}
    const lineFourClone = line4();
    //populate the new object with stations as keys, and values will be 0
    lineFourClone.map((value)=> {
        newLineFourObject[value] = createNewItemsObject();
    });
    return newLineFourObject;

}

const lineFiveObject = () => {
    
    const newLineFiveObject = {}
    const lineFourClone = line5();
    //populate the new object with stations as keys, and values will be 0
    lineFourClone.map((value)=> {
        newLineFiveObject[value] = 0;
    });
    return newLineFiveObject;
}

const createNewItemsObject = () => {
    //convert items into object
    const itemsObject = {}
    items.map((item) => {
        itemsObject[item] = 0;
    })
    return itemsObject;

}

const createTotalsObject = () => {
    const totals = createNewItemsObject();
    return totals;
}

export {line4, line5, lineFourObject, lineFiveObject, createTotalsObject}