const authPath = {
    root: 'Users',
    token: 'Users/Authenticate',
    validate: 'Users/ValidateToken',
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