import { axios, client } from 'api/initiates/queryInitiate'
import { foodDrinkPath } from 'api/initiates/pathInitiate'
import { authPath } from 'api/initiates/pathInitiate'

const fetchFoodDrinkCreate = async foodDrink => {
    console.info(foodDrink)
    const { minOrder, ...foodDrinkData } = foodDrink
    const foodDrinkList = await axios.post('FoodDrinkMenus/Post', {
        min_Order: minOrder,
        image_Url: '',
        ...foodDrinkData,
    }, {
        headers: axios.defaults.headers.Authorization,
    })
    return foodDrinkList.data.data
}

// const fetchFoodDrinkDelete = async foodDrink => {
//     const foodDrinkList = await axios.delete('FoodDrinkMenu/{id}delete',)
//     return foodDrink
// }

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

export {
    fetchFoodDrinkCreate,
    fetchFoodDrinkDelete,
    fetchFoodDrinkUpdate,
}