function objectNull() {
    return Object.create(null);
  }
  
  const newObject = objectNull();
  
  console.log(newObject);
  console.log(Object.getPrototypeOf(newObject));