export const typeDefs = `#graphql

 type Author {
 id:ID!
 name:String!
 books:[Book]
 }

 type Book {
 id:ID!
 title:String!
 publishYear:Int
 author:Author 
 }

  type Query{
  authors:[Author]
  books:[Book]
  }

`