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

export {
    fetchFoodDrinkCreate,
    fetchFoodDrinkDelete,
}