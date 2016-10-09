function sortByCategory(items) {
  items.sort((a, b) => {
    if (a.category < b.category) return -1
    if (a.category > b.category) return 1
    return 0
  })
  return items
}

function groupByCategory(items) {
  return items.reduce((itemCategoryGroups, currentValue) => {
    if (!itemCategoryGroups.includes(currentValue.category)) {
      itemCategoryGroups.push({
        category: currentValue.category,
        items: []
      })
    }
    const curCat = itemCategoryGroups.find(val => val.category === currentValue.category)
    curCat.items.push(currentValue)
    return itemCategoryGroups
  }, [])
}

let items = [
  {
    'name': 'chobani',
    'category': 'Dairy',
    'complete': true
  },
  {
    'name': 'burgers',
    'category': 'Meat',
    'complete': false
  },
  {
    'name': 'pasta',
    'category': 'Grocery',
    'complete': false
  },
  {
    'name': 'steak',
    'category': 'Meat',
    'complete': false
  },
]

console.log(sortByCategory(items))
