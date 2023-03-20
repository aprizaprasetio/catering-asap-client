import { axios } from 'api/initiates/queryInitiate'

const fetchFoodDrinkCreate = async foodDrink => {
    const data = foodDrink
    const typeEnum = {
        food: 0,
        drink: 1,
    }
    if (!(foodDrink.type in typeEnum)) return
    foodDrink.type = typeEnum[foodDrink.type]
    const foodDrinkList = await axios.post('FoodDrinkMenus/Post', {
        ...data,
    }, {
        headers: {
            Authorization: axios.defaults.headers.Authorization,
        }
    })
        .then(res => {
            console.log("Success")
        })
        .catch(error => {
            console.log(error)
        })
    return foodDrinkList.data.data
}
const fetchFoodDrinkDelete = async foodDrinkId => {
    await axios.delete(`FoodDrinkMenus/${foodDrinkId}delete`, {
        params: { id: foodDrinkId },
    })
}

const fetchFoodDrinkUpdate = async edited => {
    const { id, minOrder, imageUrl, ...data } = edited
    await axios.put(`FoodDrinkMenus/${id}/edit`, {
        ...edited,
        min_Order: minOrder,
        image_Url: imageUrl,
    }, {
        params: { id },
    })
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