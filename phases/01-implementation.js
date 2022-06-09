class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    this.count = 0
    this.capacity = numBuckets
    this.data = new Array(this.capacity).fill(null)
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
    let index = this.hashMod(key)
    let currentPair = this.data[index]
    while(currentPair  && currentPair.key != key){
      currentPair = currentPair.next
    }

    if (currentPair){
      currentPair.value = value
    } else {
      const newPair = new KeyValuePair(key, value)
      if (!this.data[index]){
        this.data[index] = newPair
      }
      else {
        newPair.next = this.data[index]
        this.data[index] = newPair


      }
      this.count ++
    }





  }



  read(key) {
    let index = this.hashMod(key)
    if (!this.data[index]){return undefined}
    else{
      let currentPair = this.data[index]
      while(currentPair){
        if (currentPair.key === key){return currentPair.value}
        currentPair = currentPair.next
      }
    }
return undefined

  }


  resize() {
    let copy = new HashTable(this.capacity)
    copy.data = this.data
    this.capacity = this.capacity * 2
    this.data = new Array(this.capacity).fill(null)
    this.count = 0

    for (let i = 0; i < copy.data.length; i ++){
      console.log(copy.data[i])
      if (!copy.data[i]){continue}
      if (copy.data[i].next === null){
        this.insert(copy.data[i].key, copy.data[i].value)

      }
      else {
      let currentPair = copy.data[i]
      while(currentPair){
        this.insert(currentPair.key, currentPair.value)
        currentPair = currentPair.next

      }}


    }
  }


  delete(key) {



  }
}


module.exports = HashTable;
