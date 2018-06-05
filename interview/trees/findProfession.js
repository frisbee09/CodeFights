const findProfession = (level, position) => {
    let count = 0;
    while (position > 2) {
        let prof = 2;
        while (prof < position/2) {
            prof *= 2;
            console.log("Largest binary at: ", prof);
        }
        console.log("Chunking...");
        position -= prof
        count += 1;
        console.log("Position at ", position, " and count at ", count);
    }
    position = (position + count % 2) % 2;
    return position == 1 ? 'Engineer' : 'Doctor';
}

console.log(findProfession(20, 171971));