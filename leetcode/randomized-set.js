class RandomizedSet {
  constructor() {
      this.dataMap = new Map(); // Stores value to index mapping
      this.dataList = [];       // Stores values for random access
  }

  insert(val) {
      // If val is already in the set, return false
      if (this.dataMap.has(val)) return false;

      // Add val to the list and update map with its index
      this.dataMap.set(val, this.dataList.length);
      this.dataList.push(val);
      return true;
  }

  remove(val) {
      // If val is not in the set, return false
      if (!this.dataMap.has(val)) return false;

      // Swap the element to remove with the last element
      let idxToRemove = this.dataMap.get(val);
      let lastElement = this.dataList[this.dataList.length - 1];

      // Move last element to the index of the element to be removed
      this.dataList[idxToRemove] = lastElement;
      this.dataMap.set(lastElement, idxToRemove);

      // Remove the last element
      this.dataList.pop();
      this.dataMap.delete(val);
      return true;
  }

  getRandom() {
      // Return a random element from dataList
      const randomIndex = Math.floor(Math.random() * this.dataList.length);
      return this.dataList[randomIndex];
  }
}

const set = new RandomizedSet()

set.insert(2)
set.insert(10)
set.insert(15)
set.insert(20)
set.insert(25)
set.remove(25)
console.log(set)
