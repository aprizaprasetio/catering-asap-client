import React from 'react'
import FoodDrinkTableItem from './FoodDrinkTableItem'

const FoodDrinkListAdmin = () => {
    const foodrink = [
        [
            {
                Id: 1,
                Name: 'Abdullah',
                Price: 'Grafik',
                MinimumOrder: '20',
                Deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, totam vitae veniam architecto nemo dolore ducimus ratione consequuntur, quaerat excepturi cum quos dignissimos ullam provident dolorum in. Quia, placeat voluptate.'
            },
            {
                Id: 2,
                Name: 'AbdullahS',
                Price: 'Grafik',
                MinimumOrder: '20',
                Deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, totam vitae veniam architecto nemo dolore ducimus ratione consequuntur, quaerat excepturi cum quos dignissimos ullam provident dolorum in. Quia, placeat voluptate.'
            }
        ],
        [
            {
                Id: 3,
                Name: 'Abdullah',
                Price: 'Grafik',
                MinimumOrder: '20',
                Deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, totam vitae veniam architecto nemo dolore ducimus ratione consequuntur, quaerat excepturi cum quos dignissimos ullam provident dolorum in. Quia, placeat voluptate.'
            },
            {
                Id: 4,
                Name: 'Abdullah',
                Price: 'Grafik',
                MinimumOrder: '20',
                Deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, totam vitae veniam architecto nemo dolore ducimus ratione consequuntur, quaerat excepturi cum quos dignissimos ullam provident dolorum in. Quia, placeat voluptate.'
            }
        ]
    ]

    return (
        foodrink.map((group, index) => {
            return (
                <React.Fragment key={index}>
                    {
                        group?.map(item => <FoodDrinkTableItem key={item.Id} {...item} />)
                    }
                </React.Fragment>
            )
        })
    )
}


export default FoodDrinkListAdmin