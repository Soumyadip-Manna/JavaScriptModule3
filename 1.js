
let cars = {
    make: 'Mercedies Company',
    model: 'mercedies 700',
    year:'2017',
};


const display = () =>{
    for(const car in cars)
    {
        console.log(`${car} : ${cars[car]}`);
    }
}

display();
