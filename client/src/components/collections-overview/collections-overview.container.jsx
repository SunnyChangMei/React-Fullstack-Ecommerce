// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import { compose } from 'redux';

// import { selectCollectionFetching } from '../../redux/shop/shop.selectors';
// import WithSpinner from '../with-spinner/WithSpinner';
// import CollectionsOverview from './CollectionsOverview';

// const mapStateToProps = createStructuredSelector({
//   isLoading: selectCollectionFetching
// });

// const CollectionsOverviewContainer = compose(
//   connect(mapStateToProps),
//   WithSpinner
// )(CollectionsOverview);

// export default CollectionsOverviewContainer;

import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import CollectionsOverview from './CollectionsOverview';
import Spinner from '../spinner/spinner.component';

const GET_COLLECTIONS = gql`
  {
    collections {
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

const CollectionsOverviewContainer = () => (
  <Query query={GET_COLLECTIONS}>
    {({ loading, data }) => {
      if (loading) return <Spinner />;
      return <CollectionsOverview collections={data.collections} />;
    }}
  </Query>
);

export default CollectionsOverviewContainer;
