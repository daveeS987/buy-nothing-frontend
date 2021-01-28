import { Grid, Button, GridColumn } from 'semantic-ui-react'

function SearchComponent() {

  return (
    <>
    <div style={{ padding: "2rem"}}>
    
    <Button.Group widths='6' style={{ marginBottom: "1rem", textAlign: "center"}}>

          <Button basic color='teal'>Clothes</Button>


          <Button basic color='pink'>Furniture</Button>

          <Button basic color='blue'>Sports</Button>

          <Button basic color='pink'>Books</Button>
          <Button basic color='teal'>Appliances</Button>

          <Button basic color='blue'>Electronics</Button>

        </Button.Group>

        <Button.Group widths='6' style={{ textAlign: "center", margin: "auto"}}>

          <Button basic color='teal'>Clothes</Button>
          <Button basic color='teal'>Clothes</Button>

          <Button basic color='pink'>Furniture</Button>

          <Button basic color='blue'>Sports</Button>

          <Button basic color='pink'>Auto</Button>

          <Button basic color='teal'>Music  </Button>

        </Button.Group>

  
  </div>

      {/* <Grid style={{border: "1px solid blue", height: "100%", textAlign: "center"}}>

        <Grid.Row columns={3}>

        <Grid.Row style={{border: "1px solid red", height: "100%", textAlign: "center"}}> 
        
        <Grid.Column fluid  >

        <Button.Group widths='8' style={{ textAlign: "center", margin: "auto"}}>

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

        </Grid.Row>

      </Grid> */}

    </>
  )
}

export default SearchComponent;