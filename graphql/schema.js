const { GraphQLSchema, GraphQLObjectType } = require("graphql");

//Import queries
const {} = require("./queries");

//Import mutations
const {} = require("./mutation.js");

const QueryType = new GraphQLObjectType({
  name: "QueryType",
  description: "Queries",
  fields: {},
});

const MutationType = new GraphQLObjectType({
  name: "MutationType",
  description: "Mutations",
  fields: {},
});

module.exports = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});
