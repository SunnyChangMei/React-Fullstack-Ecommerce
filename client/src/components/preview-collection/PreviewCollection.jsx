import React from 'react';

import CollectionItem from '../collection-item/CollectionItem';

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from './preview-collection.styles';

const PreviewCollection = ({ title, items, history, match, routeName }) => (
  <CollectionPreviewContainer>
    <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
      {title.toUpperCase()}
    </TitleContainer>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default PreviewCollection;
