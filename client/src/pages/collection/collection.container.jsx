import CollectionPage from './Collection';
import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import Spinner from '../../components/spinner/spinner.component';

const GET_COLLECTION_BY_TITLE = gql`
  query getCollectionsByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const CollectionPageContainer = ({ match }) => (
  <Query
    query={GET_COLLECTION_BY_TITLE}
    variables={{ title: match.params.collectionId }}>
    {({ loading, data }) => {
      return loading ? (
        <Spinner />
      ) : (
        <CollectionPage collection={data.getCollectionsByTitle} />
      );
    }}
  </Query>
);

export default CollectionPageContainer;
