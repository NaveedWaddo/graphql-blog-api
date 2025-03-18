const express = require("express");
const dotenv = require("dotenv");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql/schema.js");

const app = express();

const { connectDB } = require("./db");

dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.json({ msg: "Welcome! Go to /graphql" });
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true, // Enable GraphiQL interface for testing
  })
);

app.listen(process.env.PORT, () => {
  console.log(`"App listening on port ${process.env.PORT}`);
});
