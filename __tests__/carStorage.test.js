'use strict';
const CarStorage = require("../carStorage");
const cars = require("../datastorage.json");

describe('Testing constructor', () => {
    test('Missing parameter throws an exception',()=>{
        expect(()=>new CarStorage()).toThrow('data storage missing')
    })
});

describe('Testing get_All_cars_By_model(searchValue)', () => {
    const storage = new CarStorage(cars)
    test('Testing parameter searchValue missing',()=>{
        expect(()=>storage.get_All_cars_By_model()).toThrow('missing parameter')
    });
    test('Testing return of an array of car objects of given model',()=>{
        const result = storage.get_All_cars_By_model('XL')
        expect(result).toEqual([
            {
                "carID": 2,
                "carname": "Min IEco",
                "model": "XL",
                "price": 300,
                "stars": "***",
                "options": [
                  "repair set",
                  "coffee warmer",
                  "clock"
                ],
                "extras": {
                  "comments": "no comments",
                  "consumptionPer100km": 3,
                  "powerSource": "hybrid"
                }
              }
        ])
    })
    test('Testing if no cars of the given model are found', () => {
        const result = storage.get_All_cars_By_model('YYYY');
        expect(result).toEqual([]);
      });
});

describe('Testing get_stars_of_car_by_carname(searchKey) ', () => {
    const storage = new CarStorage(cars)
    test('Testing parameter searchKey missing', () => {
        expect(()=>storage.get_stars_of_car_by_carname()).toThrow('missing parameter')
    });
    describe('Testing return of the stars of the car matching the carname or return null if doesnot match ', () => {
        const testValues = [
            ["Electro","XXL",["*"]],
            ["Min IEco","XL",["***"]],
            ["Drof","gold",["**"]],
            ["Drof","silver",["**"]],
            ["Min IEco","VIP",["**"]],
            ["XXX","VIP",[]],
            ["Ertf","",[]],
        ];
        test.each(testValues)('%s,%s returns %s',(cn,md,expectedResult)=>{
            expect(storage.get_stars_of_car_by_carname(cn,md)).toEqual(expectedResult);
        })
    });
    
});

describe('get_car_options(searchKey)', () => {
    const storage = new CarStorage(cars);
    
});



