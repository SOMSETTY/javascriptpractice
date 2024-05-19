const course = {
    course : "js in hindi",
    price : "999",
    courseInstructor : "hitesh" 
}


// course.courseInstructor

// const {courseInstructor} = course
const {price} = course

console.log(course)
console.log(courseInstructor)

// Sure, here's a simple example of JSON (JavaScript Object Notation):
// {
//     "name": "John Doe",
//     "age": 30,
//     "isStudent": false,
//     "address": {
//       "street": "123 Main St",
//       "city": "Anytown",
//       "country": "USA"
//     },
//     "hobbies": ["reading", "traveling", "cooking"]
//   }
//   In this example:

// The JSON represents an object with various properties such as name, age, isStudent, address, and hobbies.
// The address property is itself an object with properties street, city, and country.
// The hobbies property is an array containing strings.
// JSON is commonly used for data interchange between a server and a web application, or for storing configuration data. It's a lightweight and human-readable format that is easy for both humans and machines to understand.





// {
//     "name" : "sandeep",
//     "coursename":"js in hindi",
//     "price" : "free"  
// }

{
    "results": [
      {
        "gender": "female",
        "name": {
          "title": "Miss",
          "first": "Jennie",
          "last": "Nichols"
        },
        "location": {
          "street": {
            "number": 8929,
            "name": "Valwood Pkwy",
          },
          "city": "Billings",
          "state": "Michigan",
          "country": "United States",
          "postcode": "63104",
          "coordinates": {
            "latitude": "-69.8246",
            "longitude": "134.8719"
          },
          "timezone": {
            "offset": "+9:30",
            "description": "Adelaide, Darwin"
          }
        },
        "email": "jennie.nichols@example.com",
        "login": {
          "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
          "username": "yellowpeacock117",
          "password": "addison",
          "salt": "sld1yGtd",
          "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
          "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
          "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
        },
        "dob": {
          "date": "1992-03-08T15:13:16.688Z",
          "age": 30
        },
        "registered": {
          "date": "2007-07-09T05:51:59.390Z",
          "age": 14
        },
        "phone": "(272) 790-0888",
        "cell": "(489) 330-2385",
        "id": {
          "name": "SSN",
          "value": "405-88-3636"
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/75.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
        },
        "nat": "US"
      }
    ],
    "info": {
      "seed": "56d27f4a53bd5441",
      "results": 1,
      "page": 1,
      "version": "1.4"
    }
  }
