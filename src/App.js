import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Provider from "./Provider";

const listQuery = gql`
  query {
    conferenceRooms {
      id
      title
      createdAt
    }
  }
`;

export default function Root() {
  return (
    <Provider>
      <Query query={listQuery}>
        {({ loading, data }) => {
          if (loading) {
            return <p>Loading ...</p>;
          }

          const conferenceRooms = data.conferenceRooms;
          return (
            <div>
              {conferenceRooms.map(item => {
                return (
                  <div>
                    <p>{item.id}</p>
                    <p>{item.title}</p>
                  </div>
                );
              })}
            </div>
          );
        }}
      </Query>
    </Provider>
  );
}
