// for

const Array = []

for(let index = 0; index < Array.length; index++){
    const element = Array[index];
}

// break and continue
for(let index = 1; index < 20; index++){
    // const element = Array[index];
    console.log(index);
    if(index == 11) continue;
    if(index == 15) break;
}
