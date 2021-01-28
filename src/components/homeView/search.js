import {useDispatch} from 'react-redux';

import { Button } from 'semantic-ui-react'

import {changeCategory} from '../../store/category.js';
import {getListings} from '../../store/listings.js';


function SearchComponent() {

  const dispatch = useDispatch();

  function handleFurniture() {
    dispatch(changeCategory('furniture'))
    dispatch(getListings())
  }

  function handleSports() {
    dispatch(changeCategory('sports'))
    dispatch(getListings())
  }

  function handleElectronics() {
    dispatch(changeCategory('electronics'))
    dispatch(getListings())
  }

  function handleClothes() {
    dispatch(changeCategory('clothes'))
    dispatch(getListings())
  }
  ////////////////////
  function handleBooks() {
    dispatch(changeCategory('books'))
    dispatch(getListings())
  }

  function handleAppliances() {
    dispatch(changeCategory('appliances'))
    dispatch(getListings())
  }

  function handleGeneral() {
    dispatch(changeCategory('general'))
    dispatch(getListings())
  }

  function handleVehicles() {
    dispatch(changeCategory('vehicles'))
    dispatch(getListings())
  }

  function handleHousehold() {
    dispatch(changeCategory('household'))
    dispatch(getListings())
  }

  function handleMusic() {
    dispatch(changeCategory('music'))
    dispatch(getListings())
  }

  function handleTools() {
    dispatch(changeCategory('tools'))
    dispatch(getListings())
  }

  function handleRealEstate() {
    dispatch(changeCategory('realestate'))
    dispatch(getListings())
  }

  return (
    <>
    <div style={{ padding: "2rem"}}>
    
    <Button.Group widths='6' style={{ marginBottom: "1rem", textAlign: "center"}}>

          <Button basic color='teal' onClick={handleClothes}>Clothes</Button>

          <Button basic color='pink' onClick={handleFurniture}>Furniture</Button>

          <Button basic color='blue' onClick={handleSports}>Sports</Button>

          <Button basic color='pink' onClick={handleBooks}>Books</Button>
          
          <Button basic color='teal' onClick={handleAppliances}>Appliances</Button>

          <Button basic color='blue' onClick={handleElectronics}>Electronics</Button>

        </Button.Group>

        <Button.Group widths='6' style={{ textAlign: "center", margin: "auto"}}>

          <Button basic color='teal' onClick={handleGeneral}>General</Button>

          <Button basic color='teal' onClick={handleVehicles}>Vehicles</Button>

          <Button basic color='pink' onClick={handleHousehold}>Household</Button>

          <Button basic color='blue' onClick={handleMusic}>Music</Button>

          <Button basic color='pink' onClick={handleTools}>Tools</Button>

          <Button basic color='teal' onClick={handleRealEstate}>Real Estate </Button>

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