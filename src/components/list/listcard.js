import React from 'react';
import { Card, Grid, Image } from 'semantic-ui-react';
import ListModal from './listmodal.js';

function ListCard(props) {
  return (
    <Card fluid centered>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column width="8">
            <Image
              size="large"
              src={props.item.imageUrl}
              wrapped
              ui={true}
              style={{ margin: '1rem', textAlign: 'center' }}
              rounded
            />
          </Grid.Column>

          <Grid.Column width="8">
            <Card.Content
              style={{
                textAlign: 'center',
                marginTop: '2rem',
                marginBottom: '2rem',
              }}
            >
              <Card.Header as="h1">{props.item.title}</Card.Header>
              <Card.Header as="h4">Location: {props.item.location}</Card.Header>
              <Card.Header as="h5">
                Posted By: {props.item.creatorUserName}
              </Card.Header>

              <ListModal object={props.item} style={{ marginBottom: '5rem' }} />
            </Card.Content>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Card>
  );
}

export default ListCard;
