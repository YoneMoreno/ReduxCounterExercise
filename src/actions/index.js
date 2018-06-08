export default function add(value) {
    console.log('add: ', value);
    return {
        type: 'ADD',
        payload: value
    }
}