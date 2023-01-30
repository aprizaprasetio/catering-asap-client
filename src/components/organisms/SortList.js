import React from 'react'
import SortContainer from 'components/organisms/SortContainer'
import SortItem from 'components/molecules/SortItem'
import SortListProps from 'proptypes/organisms/SortListProps'

const sortItems = ['Name', 'Price', 'Date']

const SortList = ({ sortOptions, itemClick, isVisible }) => {
    return (
        <SortContainer isVisible={isVisible}>
            {sortItems.map(item => (
                <SortItem
                    onClick={itemClick(item)}
                    onDelete={itemClick(item, 'delete')}
                    sortBy={item}
                    key={item}
                    {...sortOptions}
                />
            ))}
        </SortContainer>
    )
}

SortList.propTypes = SortListProps

export default SortList