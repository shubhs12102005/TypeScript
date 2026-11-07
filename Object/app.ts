const person: {
    name: string;
    age: number;
    skills: string[];  // array
    LikedThings: {     // nested obj
        food: string;
        color: string;
    },
    hobbies: [string, number]  // tuple - fixed length array with specific types
} = {
    name: "Shubham",
    age: 20,
    skills: ["JavaScript", "TypeScript", "React"],
    LikedThings: {
        food: "Biryani",
        color: "Skyblue",
    },
    hobbies: ["Coding", 22],  // error, not defined in type
}

console.log(person);
