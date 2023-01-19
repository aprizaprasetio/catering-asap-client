const authPath = {
    token: 'Users/Authenticate',
    register: 'Users/Register',
    userParam: id => `Users/${id}`,
}

const foodDrinkPath = {
    menu: 'FoodDrinkMenus',
    menuParam: id => `FoodDrinkMenus/${id}`
}

export {
    authPath,
    foodDrinkPath,
}