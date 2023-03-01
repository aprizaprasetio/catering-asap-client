import { axios, client } from 'api/initiates/queryInitiate'
import { foodDrinkPath } from 'api/initiates/pathInitiate'

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

export {
    fetchFoodDrinkCreate,
}