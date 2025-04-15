const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  
// Create a new user
//   const newUser = await prisma.user.create({
//     data: {
//       name: "John Doe",
//       email: "johndoe@example.com",
//       age: 25,
//     },
//   });

  const newUsers = await prisma.user.createMany({
    data: [
      { name: "Alice Johnson", email: "alice@example.com", age: 28 },
      { name: "Bob Smith", email: "bob@example.com", age: 32 },
      { name: "Charlie Brown", email: "charlie@example.com", age: 24 },
      { name: "David Williams", email: "david@example.com", age: 30 },
      { name: "Emily Davis", email: "emily@example.com", age: 27 },
      { name: "Frank Miller", email: "frank@example.com", age: 35 },
      { name: "Grace Wilson", email: "grace@example.com", age: 29 },
      { name: "Henry Taylor", email: "henry@example.com", age: 31 },
      { name: "Ivy Anderson", email: "ivy@example.com", age: 26 },
      { name: "Jack White", email: "jack@example.com", age: 33 },
    ],
  });
  

  console.log("User Created:", newUsers);

  // Fetch all users
  const users = await prisma.user.findMany();
  console.log("All Users:", users);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
