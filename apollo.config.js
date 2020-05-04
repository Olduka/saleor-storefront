module.exports = {
  client: {
    service: {
      name: "saleor",
      url: "http://localhost:8000/graphql/",
      includes: ["./**/*.js", "./**/*.ts"],
      excludes: ["**/__tests__/**/*"],
    },
  },
};
