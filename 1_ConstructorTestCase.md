# Test cases for constructor

## **constructor(jsondata)**

The data storage json object is passed as a parameter to the constructor.If the parameter is missing, constructor throws an error `'data storage missing'`

## Test 1: missing parameter throws an exception

```js
new CarStorage();
```

expect:
This will throw an exception `'data storage missing'`
