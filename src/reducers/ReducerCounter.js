export default function (state, action) {
    switch (action.type) {
        case 'ADD':
            return action.payload;
        case 'MINUS':
            return action.payload;
    }
    return 0;
}
