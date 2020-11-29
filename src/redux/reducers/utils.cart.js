export const addNewItem = (currentItems, addItem) => {
    const existingItem = currentItems.find(
        currentItem => currentItem.name === addItem.name
    )

    if(existingItem){
        return currentItems.map(currentItem => (
            currentItem.name === addItem.name ? {...currentItem, quantity: currentItem.quantity + 1}
            : currentItem
        ))
    }
    console.log("AYAYAYAYYAYA", [...currentItems,{...addItem, quantity: 1}])
    return [...currentItems,{...addItem, quantity: 1}]
}