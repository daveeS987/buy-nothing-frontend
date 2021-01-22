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

    <Grid.Row columns={1}>
    </Grid.Row>

    <Grid.Row >
      <Button.Group size='large'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </Button.Group>
    </Grid.Row>

    <Grid.Row columns={1}>
      <Button.Group size='large'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </Button.Group>
    </Grid.Row>

    </Grid>

    </>
  )
}

export default SearchComponent;