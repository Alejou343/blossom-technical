import { characters } from './models/characters.model';
import { locations } from './models/locations.model';
import redis from "./config/redis";
import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} from 'graphql';

const LocationsType = new GraphQLObjectType({
  name: 'Locations',
  fields: {
    id_location: { type: GraphQLInt },
    id_origin: { type: GraphQLInt },
    name: { type: GraphQLString },
    type: { type: GraphQLString },
    dimension: { type: GraphQLString },
  },
});

const CharactersType = new GraphQLObjectType({
  name: 'Characters',
  fields: () => ({
    id_character: { type: GraphQLInt },
    name: { type: GraphQLString },
    status: { type: GraphQLString },
    species: { type: GraphQLString },
    gender: { type: GraphQLString },
    origin_id: { type: GraphQLInt },
    image: { type: GraphQLString },
    comments: { type: GraphQLString },
    isLiked: { type: GraphQLInt },
    isDeleted: { type: GraphQLInt },
    origin: {
      type: LocationsType,
      async resolve(parent) {

        const cacheKey = `location:${parent.origin_id}`;

        const cachedData = await redis.get(cacheKey);
        if (cachedData) {
            return JSON.parse(cachedData);
        }

        const location = locations.findOne({
          where: { id_origin: parent.origin_id },
        });

        if (location) {
          await redis.set(cacheKey, JSON.stringify(location), 'EX', 60);
        }
        return location

      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    characters: {
      type: new GraphQLList(CharactersType),
      resolve() {
        return characters.findAll();
      },
    },
    character: {
      type: CharactersType,
      args: { id: { type: GraphQLInt } },
      resolve(_, args) {
        return characters.findByPk(args.id);
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    updateCharacter: {
      type: CharactersType,
      args: {
        id: { type: GraphQLInt },
        comments: { type: GraphQLString },
        isLiked: { type: GraphQLInt },
        isDeleted: { type: GraphQLInt },
      },
      async resolve(_, args) {
        await characters
          .update(
            { comments: args.comments, isLiked: args.isLiked, isDeleted: args.isDeleted },
            { where: { id_character: args.id } },
          )
          await redis.del(`character:${args.id}`)
          return characters.findByPk(args.id)
      },
    },
  },
});

const dbSchema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});

export default dbSchema;
