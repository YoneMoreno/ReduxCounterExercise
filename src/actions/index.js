export function add(value) {
    console.log('add: ', value);
    return {
        type: 'ADD',
        payload: value
    }
}

export function minus(value) {
    console.log('minus: ', value);
    return {
        type: 'MINUS',
        payload: value
    }
}