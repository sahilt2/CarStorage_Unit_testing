'use strict';

module.exports = class CarStorage {
    #storage;
    constructor(jsondata){
        if(!jsondata)throw new Error('data storage missing');
        this.#storage=jsondata;
    }

    get_All_cars_By_model(searchValue){
        if(arguments.length<1){
            throw new Error('missing parameter')
        }
        const cars = [];

        for(const car of this.#storage){
            if(car.model===searchValue){
                cars.push(car)
            }
        }
        return cars;
    };

    get_stars_of_car_by_carname(searchKey,searchValue){
        if(arguments.length<1){
            throw new Error('missing parameter')
        };
         
        const cars =[]
        for(const car of this.#storage){
            if(car.carname===searchKey && car.model===searchValue){
               cars.push(car.stars)
            }
        }
        return cars;
    }

    get_car_options(searchKey){
        const options = this.#storage
        .filter(car => car.carID === searchKey)
        .map(car => car.options);
      return options.length > 0 ? options[0] : [];
    }
}