import { Grid, Button, Input } from 'semantic-ui-react'

function SearchComponent() {

  return (
    <>

      <Grid>

        <Grid.Row columns={3} style={{border: "3px dashed purple", height: "100%"}} >

          <Grid.Column style={{border: "3px dashed green", height: "100%"}}>

          </Grid.Column>

          {/* <Grid.Column > */}
            {/* <Input
              icon={{ name: 'search', circular: true, link: true }}
              placeholder='Search...'
            /> */}
          {/* </Grid.Column> */}

          <Grid.Column style={{border: "3px dashed green", height: "100%"}} >

          </Grid.Column>
        </Grid.Row >

          
        <Grid.Row style={{border: "3px dashed red", height: "100%"}}> 
        

        <Button.Group basic>

          <Button>Clothes</Button>


          <Button>Furniture</Button>


          <Button>Children</Button>


          <Button>Sports</Button>


          <Button>Shoes</Button>


          <Button>Electronics</Button>
        </Button.Group>

        <Button.Group basic >
          <Button>Books</Button>

          <Button>Crafts</Button>

          <Button>Antiques</Button>

          <Button>Appliances</Button>

          <Button>Auto</Button>

          <Button >Music  </Button>
          </Button.Group>
          
       
        </Grid.Row >
      </Grid>

    </>
  )
}

export default SearchComponent;