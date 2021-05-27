const reducer = (companys = [],action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...companys, action.payload];
        default:
            return companys;
    }
}; 

export default reducer;