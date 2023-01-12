import { axios } from 'api/initiate'
import { foodDrinkPath } from 'api/path'

// Requesting a bunch of food and drink menu
const fetchFoodDrinkList = async () => {
    const foodDrinkList = await axios.get(foodDrinkPath.menu)
    return foodDrinkList.data.data
}

export {
    fetchFoodDrinkList,
}