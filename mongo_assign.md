### 1. Write a MongoDB command to create a database named students.     
```
use students
```

### 2. Create a collection named courses using MongoDB. 
```
db.createCollection("courses")
```

### 3. Insert a single document into the students collection. 
```
db.students.insertOne({ name: "John Doe", age: 20, course: "Computer Science" })
```

### 4. Write a NoSQL command to find all documents in a collection. 
```
db.collection_name.find()
```

### 5. Insert multiple documents into a MongoDB collection in a single query. 
```
db.students.insertMany([
  { name: "Alice", age: 22, course: "Math" },
  { name: "Bob", age: 21, course: "Physics" }
])
```

### 6. Find a document in MongoDB based on a field value. 
```
db.students.find({ name: "Alice" })
```

### 7. Update a document’s field in a MongoDB collection.
```
db.students.updateOne(
  { name: "Bob" },
  { $set: { age: 23 } }
)
```

### 8. Delete a document from a MongoDB collection. 
```
db.students.deleteOne({ name: "John Doe" })
```

### 9. Write a MongoDB aggregation query to calculate the average age of users. 
```
db.students.aggregate([
  { $group: { _id: null, averageAge: { $avg: "$age" } } }
])
```

### 10. List all the collections in a MongoDB database. 
```
show collections
```

### 11. Set a key-value pair in Redis. 
```
SET name "Alice"
```

### 12. Retrieve the value of a key from Redis. 
```
GET name
```

### 13. Delete a key-value pair in Redis. 
```
DEL name
```