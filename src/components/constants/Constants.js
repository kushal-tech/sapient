let BASE_URL;

if (process.env.NODE_ENV != "production") {
  BASE_URL = "https://rickandmortyapi.com/";
} else {
  BASE_URL = "http://localhost:8080/rickyandmortyapi/";
}

const LINK = {
  BASE_URL: BASE_URL,
  CHARACTER: BASE_URL + "api/character/"
};

//NOT IN USED
const ROLES = {
  ADMIN: "admin"
};

module.exports = {
  LINK: LINK,
  ROLES: ROLES
};
