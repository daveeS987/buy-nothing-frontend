import { Grid, Image, Button, Input } from 'semantic-ui-react'

function SearchComponent() {

  return (
    <>

      <Grid>

        <Grid.Row columns={3}>
          <Grid.Column></Grid.Column>
          <Grid.Column>
            <Input
              icon={{ name: 'search', circular: true, link: true }}
              placeholder='Search...'
            />
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>

        <Button.Group basic>

          <Button>Clothes</Button>


          <Button>Furniture</Button>


          <Button>Children</Button>


          <Button>Sports</Button>


          <Button>Shoes</Button>


          <Button>Electronics</Button>

          <Button>Books</Button>

          <Button>Crafts</Button>

          <Button>Antiques</Button>

          <Button>Appliances</Button>

          <Button>Auto</Button>

          <Button >Music  </Button>
        </Button.Group>


      </Grid>

    </>
  )
}

export default SearchComponent;