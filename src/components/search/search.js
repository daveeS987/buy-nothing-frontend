import { Grid, Image, Button, Input } from 'semantic-ui-react'

function SearchComponent() {

  return (
    <>

    <Grid>

    <Grid.Row columns={3}>

      <Grid.Column>
      </Grid.Column>

      <Grid.Column>
        <Input
          icon={{ name: 'search', circular: true, link: true }}
          placeholder='Search...'
        />
      </Grid.Column>

      <Grid.Column>
      </Grid.Column>

    </Grid.Row>

    <Grid.Row >
    </Grid.Row>

    <Grid.Row columns={6} >
      
      <Grid.Column>
        <Button>Three</Button>
      </Grid.Column>
      <Grid.Column>
        <Button>Two</Button>
      </Grid.Column>
      <Grid.Column>
        <Button>One</Button>
      </Grid.Column>
      <Grid.Column>
        <Button>Three</Button>
      </Grid.Column>
      <Grid.Column>
        <Button>Two</Button>
      </Grid.Column>
      <Grid.Column>
        <Button>One</Button>
      </Grid.Column>
      
    </Grid.Row>

    <Grid.Row columns={6} >
      
      <Grid.Column>
        <Button>Three</Button>
      </Grid.Column>
      <Grid.Column>
        <Button>Two</Button>
      </Grid.Column>
      <Grid.Column>
        <Button>One</Button>
      </Grid.Column>
      <Grid.Column>
        <Button>Three</Button>
      </Grid.Column>
      <Grid.Column>
        <Button>Two</Button>
      </Grid.Column>
      <Grid.Column>
        <Button>One</Button>
      </Grid.Column>
      
    </Grid.Row>

    </Grid>

    </>
  )
}

export default SearchComponent;