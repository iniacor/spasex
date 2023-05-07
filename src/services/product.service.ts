import { gql } from '@apollo/client';
import client from '../apolloClient';

const GET_PRODUCTS = gql`
  query {
    rockets {
      id
      description
      name
    }
  }
`;

export const ProductServise = {
  async getAllProduct() {
    try {
      const { data } = await client.query({
        query: GET_PRODUCTS,
      });

      return data;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  },
};
