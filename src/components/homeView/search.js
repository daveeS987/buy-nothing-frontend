import { Grid, Button, Input } from 'semantic-ui-react'

function SearchComponent() {

  return (
    <>

      <Grid>

        <Grid.Row columns={3} style={{ border: "1px dashed red", height: "100%"}} >

          <Grid.Column >

          </Grid.Column>

          {/* <Grid.Column > */}
            {/* <Input
              icon={{ name: 'search', circular: true, link: true }}
              placeholder='Search...'
            /> */}
          {/* </Grid.Column> */}

          <Grid.Column >

          </Grid.Column>
        </Grid.Row >

        <Grid.Row style={{height: "100%", textAlign: "center"}}> 
        
        <Grid.Column>

        <Button.Group>

          <Button basic color='teal'>Clothes</Button>


          <Button basic color='pink'>Furniture</Button>

          <Button basic color='blue'>Sports</Button>

          <Button basic color='pink'>Books</Button>
          <Button basic color='teal'>Appliances</Button>

          <Button basic color='blue'>Electronics</Button>
          <Button basic color='pink'>Auto</Button>

          <Button basic color='teal'>Music  </Button>

        </Button.Group>
          
        </Grid.Column>
        </Grid.Row >
      </Grid>

    </>
  )
}

export default SearchComponent;