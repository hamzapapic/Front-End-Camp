// // const getUsers = async () => {
// //   const data = await fetch("https://jsonplaceholder.typicode.com/users");
// //   const users = data.json();
// //   const mapUsers = users.map((user) => {
// //     return {
// //       id: user.id,
// //       name: user.name,
// //       username: user.username,
// //       email: user.email.toLowerCase(),
// //       phone: user.phone,
// //       address: {
// //         street: user.address.street,
// //         suite: user.address.suite,
// //       },
// //     };
// //   });
// // };

// // getUsers();

// // Axios Biblioteka

// const getComments = () => {
//   axios
//     .get(`https://jsonplaceholder.typicode.com/comments`)
//     .then((response) => console.log(response))
//     .catch((error) => console.log(error.message));
// };

// getComments();
