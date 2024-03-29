import { axios } from 'api/initiates/queryInitiate'

const fetchFoodDrinkCreate = async foodDrink => {
    const typeEnum = {
        food: 0,
        drink: 1,
    }
    console.info(foodDrink.get('type') in typeEnum)
    console.info(foodDrink)
    if (!(foodDrink.get('type') in typeEnum)) return
    foodDrink.type = typeEnum[foodDrink.type]
    const foodDrinkList = await axios.post('FoodDrinkMenus/Post', foodDrink, {
        headers: {
            Authorization: axios.defaults.headers.Authorization,
        }
    })

    return foodDrinkList.data
}
const fetchFoodDrinkDelete = async foodDrinkId => {
    await axios.delete(`FoodDrinkMenus/${foodDrinkId}delete`, {
        params: { id: foodDrinkId },
    })
}

const fetchFoodDrinkUpdate = async edited => {
    // const { id, minOrder, imageUrl, ...data } = edited
    await axios.put('FoodDrinkMenus/edit', edited)
}

const fetchFoodDrinkQuantity = async () => {
    const foodDrinkQuantity = await axios.get('FoodDrinkMenus/CurrentTotal')
    return foodDrinkQuantity.data.data
}

export {
    fetchFoodDrinkCreate,
    fetchFoodDrinkDelete,
    fetchFoodDrinkUpdate,
    fetchFoodDrinkQuantity
}