'use strict';


// LOOK AT DOCUMENTATION SLIDES FROM LODOWN SLIDES ON NOVEMBER LINKS


// YOU KNOW WHAT TO DO //


/**
 * identity: Takes any value and returns the value unchanged.
 * 
 * @param {*} value: The value to be returned from this function
 *
 * @returns {*} value: The value unchanged 
 */
function identity(value){
    return value;
};
module.exports.identity = identity;


/**
 * typeOf: Takes any value and defines its datatype.
 * 
 * @param {*} value: The value whose datatype is to be defined.
 * 
 * @returns {String}: Returns a string of the value's datatype.
 */
 function typeOf(value){
    if (value === undefined){
        return 'undefined';
    } else if (value === null){
        return 'null';
    } else if (value === true || value === false){
        return 'boolean';
    } else if (Array.isArray(value) === true){
        return 'array';
    } else if (value === String(value)){
        return 'string';
    } else if (value === Number(value)){
        return 'number';
    } else if (value instanceof Function){
        return 'function';
    } else if (value instanceof Object){
        return 'object';
    }
};
module.exports.typeOf = typeOf;


/**
 * first: Designed to return the first n number of items from an array.
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Number} number: Iterate through the array until the index reaches
 * the number passed in as an argument.
 * 
 * @returns {Array}: Returns an array beginning with the first element and
 * ending with the element at the index just before the passed number argument.
 * If the number argument is not given or if the number is negative,
 * it returns only the first element in the array. If the number is greater
 * than the length of the array, it returns the entire array.
 * 
 */
 function first(array, number){
    if (!Array.isArray(array) || number < 0){
        return [];
    } else if (isNaN(number) || !Number(number)){
        return array[0];
    } else if (number >= array.length){
            return array;
    } else {
        let newArr = [];
        for (let i = 0; i < number; i++){
            newArr.push(array[i]);
        } return newArr;
    }
};
module.exports.first = first;


/**
 * last: Designed to return the last n number of items from an array.
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Number} number: Starting at the index prior to the number passed in, it will
 * iterate through the end of the array.
 * 
 * @returns {Array}: Returns an array starting at the index prior to the number
 * passed in and ending at the last element of the array. If no number is passed in
 * or if the number is negative, it returns only the last element in the array.
 * If the number is greater than the length of the array, it returns the entire array.
 * 
 */
 function last(array, number){
    if (!Array.isArray(array) || number < 0){
        return [];
    } else if (isNaN(number) || !Number(number)){
        return array[array.length-1];
    } else if (number >= array.length){
            return array;
    } else {
        let newArr = [];
        for (let i = number - 1; i < array.length; i++){
            newArr.push(array[i]);
        } return newArr;
    }
}
module.exports.last = last;


/**
 * indexOf: Designed to loop over an array and return the index number
 * of the first value that passes through the expression as true. 
 * If no value passes, the function returns -1.
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {*} value: The value to compare to the elements of the array.
 * 
 * @returns {Number}: Returns a number that matches the index of the first
 * value to pass through the expression as true. If no value passes,
 * it returns -1.
 * 
 */
 function indexOf(array, value){
    for (let i = 0; i < array.length; i++){
        if (array[i] === value){
            return i;
        }
    } return -1;
}
module.exports.indexOf = indexOf;


/**
 * contains: 
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {*} value: The value to compare to the elements of the array.
 * 
 * @returns {Boolean}: Returns true is the value is found in the array or
 * false if the value is not found in the array.
 * 
 */
 function contains(array, value){
    return array.indexOf(value) > 0 ? true : false;
}
module.exports.contains = contains;


/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the 
 * collection
 * 
 * @returns {*} value: Returns the updated collection with the actions applied
 * the each element by the function.
 * 
 */
 function each(collection, func){
    if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
            func(collection[i], i, collection);
        }
    } else if (collection instanceof Object){
        for (var key in collection){
            func(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * unique: Designed to iterate over an array and create a new array
 * without any duplicate elements.
 * 
 * @param {Array} array: The array over which to iterate.
 * 
 * @returns {Array}: Returns a new array with only unique elements.
 * 
 */
 function unique(array) {
    let newArr = [];
    for (let i = 0; i < array.length; i++){
        if (newArr.indexOf(array[i]) === -1){
            newArr.push(array[i]);
        }
    } return newArr;
}
module.exports.unique = unique;


/**
 * filter: Designed to iterate over an array and create a new array
 * with only elements that meet a certain requirement.
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Function} func: The function to test whether an element meets
 * the requirement.
 * 
 * @returns {Array}: Returns a new array of only the elements
 * that meet the requirement.
 * 
 */
 function filter(array, func){
    let newArr = [];
    for (let i = 0; i < array.length; i++){
        if (func(array[i], i, array)){
            newArr.push(array[i]);
        }
    } return newArr;
}
module.exports.filter = filter;


/**
 * reject: Designed to iterate over an array and create a new array
 * with only elements that fail to meet a certain requirement.
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Function} func: The function to test whether an element meets
 * the requirement.
 * 
 * @returns {Array}: Returns a new array of only the elements
 * that fail to meet the requirement.
 * 
 */
 function reject(array, func){
    let newArr = [];
    for (let i = 0; i < array.length; i++){
        if (!(func(array[i], i, array))){
            newArr.push(array[i]);
        }
    } return newArr;
}
module.exports.reject = reject;


/**
 * partition: Designed to iterate over an array and create a new array
 * with two sub-arrays. The first sub-array includes only elements
 * that evaluate to be truthy. The second sub-array includes
 * only elements that evaluate to be falsy.
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Function} func: The function to test whether an element is truthy
 * or falsy.
 * 
 * @returns {Array}: Returns a new array with two sub-arrays - one for
 * elements that evaluate to be truthy and one for elements that evaluate
 * to be falsy.
 * 
 */
 function partition(array, func){
    let newArray = [[],[]];
    for (let i = 0; i < array.length; i++){
        if (func(array[i], i, array)){
            newArray[0].push(array[i]);
        } else {
            newArray[1].push(array[i]);
        }
    } return newArray;
}
module.exports.partition = partition;


/**
 * map: Designed to loop over a collection, Array or Object,
 * applies the action Function to each value in the collection,
 * and returns a new array.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} func: The function to apply to each element
 * in the collection.
 * 
 * @returns {Array}: Returns a new array of each item after it is
 * passed to the function.
 * 
 */
 function map(collection, func){
    let newArr = [];
    each(collection, function(el, i, array){ 
        newArr.push(func(el, i, array));
    }); return newArr;
}
module.exports.map = map;


/**
 * pluck: Designed to iterate over an array, and return an array
 * of values of a certain property of each element in the array.
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {*} property: The property whose value will be returned.
 * 
 * @returns {Array} array: Returns a new array of the values of
 * each of the array's elements at a given property.
 * 
 */
 function pluck(array, property){
  return map(array, function(el) {
        return el[property];
    });
}
module.exports.pluck = pluck;


/**
 * every: Designed to iterate over a collection, Array of Object,
 * return true only if all collection elements meet a requirement
 * as evaluated by the function. If no function is passed in,
 * return true only if all collection values are truthy. If any
 * value is falsy, it will return false.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} func: The function to test truthiness or falsiness.
 * 
 * @returns {Boolean}: Returns true if each element passes the
 * function's test. Otherwise returns false.
 * 
 */
function every(collection, func){
    if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
            if (func === undefined){
                if (!collection[i]){
                    return false;
                }
            } else if (func(collection[i], i, collection) !== true){
                return false;
            }
        }
    } else if (collection instanceof Object){
        for (var key in collection){
            if (func === undefined){
                if (!collection[key]){
                    return false;
                }
            } else if (func(collection[key], key, collection) !== true){
                return false;
            }
        }
    } return true;
}
module.exports.every = every;


/**
 * some: Designed to iterate over a collection, Array of Object,
 * return true if at least one collection element meet a requirement
 * as evaluated by the function. If no function is passed in,
 * return true only if at least one collection value is truthy. If no
 * value is truthy, it will return false.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} func: The function to test truthiness or falsiness.
 * 
 * @returns {Boolean}: Returns true if at least one element passes the
 * function's test. Otherwise returns false.
 * 
 */
 function some(collection, func){
    if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
            if (func === undefined){
                if (collection[i]){
                    return true;
                }
            } else if (func(collection[i], i, collection)){
                return true;
            }
        }
    } else if (collection instanceof Object){
        for (var key in collection){
            if (func === undefined){
                if (collection[key]){
                    return true;
                }
            } else if (func(collection[key], key, collection)){;
                return true;
            }
        }
    } return false;
}
module.exports.some = some;


/**
 * reduce: Designed to execute a callback function once for each value
 * in a collection, Array or Object, resulting in single output value.
 * The callback function that you provide takes three arguments of a
 * seed, element, and index. If no seed is passed in, the starting
 * value will be the first element in the collection.
 * 
 * @param {Array or Object} collection: The collection reduce is called upon.
 * @param {Function} func: The callback function to execute on each element 
 * of the collection.
 * @param {*} value: The starting value in which to add each value.
 * 
 * @returns {*}: Returns a single value
 * that results from the reduction
 * 
 */
 function reduce(collection, func, seed){
    each(collection, (element, index) => {
        if (seed !== undefined){
            seed = func(seed, element, index);
        } else {
            seed = collection[0];
            func(seed, element, index);
        }
    }); return seed;
}
module.exports.reduce = reduce;


/**
 * extend: Designed to merge the content of subsequent objects
 * into the first object, overriding its original values.
 * 
 * @param {Object} object: The object to be changed.
 * @param {Objects} ...args: The object or objects whose properties
 * will be merged with the original object.
 * 
 * @returns {Object}: Returns the original object with its new
 * properties from the other object or objects.
 * 
 */
function extend(object, ...args){
    Object.assign(object, ...args);
    return object;
}
module.exports.extend = extend;