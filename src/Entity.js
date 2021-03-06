import React from 'react';

import { getEntityPrefix, getEntityId } from './entityApi';
import Context from './Context';
import IdentityAvatar, { AvatarPlaceholder } from './Avatar';
import StyledLink from './Link';

export const IfOnMainnet = ({ children, then, other }) => (
  <Context.Consumer>
    {({ web3Store: { networkName }, appStore: { http } }) =>
      !http && networkName === 'ethereum' ? then || children : null
    }
  </Context.Consumer>
);

export const IfActiveEntity = ({ children, then, other }) => (
  <Context.Consumer>
    {({ entityStore: { activeEntity } }) =>
      activeEntity ? (then && then(activeEntity)) || children(activeEntity) : other || null
    }
  </Context.Consumer>
);

export const IfIsActiveEntity = ({ id, children, then, other }) => (
  <Context.Consumer>
    {({ entityStore: { activeEntity } }) => (activeEntity && activeEntity === id ? then || children : other || null)}
  </Context.Consumer>
);

export const IfOwnerOfEntity = ({ id, children, then, other }) => (
  <Context.Consumer>
    {({ entityStore: { myEntities } }) =>
      !!myEntities.find((entity) => id.toString() === entity) ? then || children : other || null
    }
  </Context.Consumer>
);

export const Entity = ({ id, children }) => (
  <Context.Consumer>{({ entityStore: { getEntity } }) => children(getEntity(id))}</Context.Consumer>
);

export const EntityName = ({ id }) => {
  return (
    <Context.Consumer>
      {({ entityStore: { getEntity } }) => getEntity(id).name || `${getEntityPrefix(id)}${getEntityId(id)}`}
    </Context.Consumer>
  );
};

export const EntityAvatar = ({ id, ...props }) => (
  <Context.Consumer>
    {({ entityStore: { getEntity } }) =>
      id ? (
        <IdentityAvatar entity={id} {...props} backgroundColor={getEntity(id).color} src={getEntity(id).image_url} />
      ) : (
        <AvatarPlaceholder entity={id} {...props} />
      )
    }
  </Context.Consumer>
);

export const LinkedEntityAvatar = ({ id, ...props }) => (
  <Context.Consumer>
    {({ entityStore: { getEntity } }) => (
      <StyledLink to={`/${id}`}>
        <IdentityAvatar entity={id} {...props} backgroundColor={getEntity(id).color} src={getEntity(id).image_url} />
      </StyledLink>
    )}
  </Context.Consumer>
);

export const Entities = ({ children }) => (
  <Context.Consumer>
    {({ entityStore: { myEntities, changeActiveEntityTo }, entityStore: { getEntity } }) => {
      const entities = myEntities.map((myEntity) => getEntity(myEntity));
      return children({ entities, changeActiveEntityTo });
    }}
  </Context.Consumer>
);

export const ActiveEntityName = () => (
  <Context.Consumer>{({ entityStore: { activeEntity } }) => <EntityName id={activeEntity} />}</Context.Consumer>
);

export const LinkedActiveEntityAvatar = (props) => (
  <Context.Consumer>
    {({ entityStore: { activeEntity } }) => <LinkedEntityAvatar id={activeEntity} {...props} />}
  </Context.Consumer>
);

export const ActiveEntityAvatar = (props) => (
  <Context.Consumer>
    {({ entityStore: { activeEntity } }) => <EntityAvatar id={activeEntity} {...props} />}
  </Context.Consumer>
);

export const IfActiveEntityLiked = ({ reactions, children, liked, notLiked, unActive }) => (
  <Context.Consumer>
    {({ entityStore: { activeEntity } }) => {
      if (!activeEntity) return unActive;
      const entityHasLiked = reactions && reactions.find(({ context }) => context === activeEntity);
      return entityHasLiked ? liked || children : notLiked;
    }}
  </Context.Consumer>
);

export const DoesActiveEntityHasToken = ({ asset, children }) => (
  <Context.Consumer>
    {({ entityStore: { activeEntity, getEntity } }) => {
      if (!activeEntity) return children(false);
      const hasToken = getEntity(activeEntity).tokens.indexOf(asset) !== -1;
      return children(hasToken);
    }}
  </Context.Consumer>
);

export const IfActiveEntityHasToken = ({ asset, children, then, other }) => (
  <Context.Consumer>
    {({ entityStore: { activeEntity, getEntity } }) => {
      if (!activeEntity) return other;
      const hasToken = getEntity(activeEntity).tokens.indexOf(asset) !== -1;
      return hasToken ? then || children : other;
    }}
  </Context.Consumer>
);
