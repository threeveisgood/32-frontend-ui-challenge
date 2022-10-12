import axios from "axios";

axios
  .post("http://localhost:1337/api/auth/local/register", {
    username: "qiyana",
    email: "qiyana@gmail.com",
    password: "qiyanaPassword",
  })
  .then((response) => {
    console.log("Well done!");
    console.log("User profile", response.data.user);
    console.log("User token", response.data.jwt);
  })
  .catch((error) => {
    console.log("An error occurred:", error.response);
  });

axios
  .post("http://localhost:1337/api/auth/local", {
    identifier: "qiyana@strapi.io",
    password: "qiyanaPassword",
  })
  .then((response) => {
    // Handle success.
    console.log("Well done!");
    console.log("User profile", response.data.user);
    console.log("User token", response.data.jwt);
  })
  .catch((error) => {
    // Handle error.
    console.log("An error occurred:", error.response);
  });
