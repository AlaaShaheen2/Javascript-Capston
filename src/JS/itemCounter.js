const itemCounter = (allItems, itemsCounter) => {
  itemsCounter.innerHTML = `Pokemons(${allItems / 3})`;
};

export default itemCounter;