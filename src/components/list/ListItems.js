import React, {useState, useEffect, useContext} from 'react';
import { useSelector } from 'react-redux';
import {Grid, Pagination} from 'semantic-ui-react'

import ListCard from './listcard.js'
import {LoginContext} from '../../context/auth/context.js';
import { Switch } from 'react-router-dom';



function ListItems (props){

  // const [currentCategory, setCurrentCategory] = useState();

  const userContext = useContext(LoginContext);
  let listings = useSelector(state => state.listings)
  let category = useSelector(state => state.category)
  let filteredList = [...listings];

  console.log('line 20', category);

  // useEffect(() => {
  //   console.log('category got changed')
  // }, [filteredList])

  if(category) {

    switch(category) {

      case 'myPost':
        console.log('myPost got triggered')
        filteredList = listings.filter( list => {
          return list.creatorUserId === userContext.user.mongoId;
        })
        break;

      case 'clothes':
        console.log('clothes got triggered')
        filteredList = listings.filter( list => {
          return list.categories === 'clothes';
        })
        break;

      case 'electronics':
        console.log('electronics got triggered')
        filteredList = listings.filter( list => {
          return list.categories === 'electronics';
        })
        break;

      case 'furniture':
        console.log('furniture got triggered')
        filteredList = listings.filter( list => {
          return list.categories === 'furniture';
        })
        break;

        case 'sports':
          console.log('sports got triggered')
          filteredList = listings.filter( list => {
            return list.categories === 'sports';
          })
        break;

      default:
        console.log('default got targeted');
    }
  }


  // useEffect(() => {
    
  //   if(category) {

  //     switch(category) {
  
  //       case 'myPost':
  //         console.log('myPost got triggered')
  //         filteredList = listings.filter( list => {
  //           return list.creatorUserId === userContext.user.mongoId;
  //         })
  //         break;
  
  //       case 'clothes':
  //         filteredList = listings.filter( list => {
  //           return list.categories === 'clothes';
  //         })
  //         break;
  
  //       case 'electronics':
  //         filteredList = listings.filter( list => {
  //           return list.categories === 'electronics';
  //         })
  //         break;
  
  //       case 'furniture':
  //         filteredList = listings.filter( list => {
  //           return list.categories === 'furniture';
  //         })
  //         break;
  
  //         case 'sports':
  //           console.log('sports got triggered')
  //           filteredList = listings.filter( list => {
  //             return list.categories === 'sports';
  //           })
  //         break;
  
  //       default:
  //         console.log('default got targeted');
  //     }
  //   }
  // }, [category])



  let itemsPerPage = 5;


// *************** Pagination Logic ********************//
//************this is horrible hot garbage**************//
  const [page, setPage] = useState(1);
  const [pageArray, setTempArray] = useState([])

  useEffect ( () => {
    let initial = itemPagina(filteredList, page)
    setTempArray(initial);
  },[listings]);

  useEffect ( () => {
    let clickedPage = itemPagina(filteredList, page)
    setTempArray(clickedPage);
  },[page]);

  function itemPagina(objArr, page){
    let tempArr = objArr.slice((page*itemsPerPage)-itemsPerPage, page*itemsPerPage);
    return(tempArr);
  };

  function setPageNum(e, {activePage}){
    setPage(activePage);
  }

  const PaginationButtons = () => (
    <Pagination
      activePage={page}
      onPageChange={setPageNum}
      firstItem={null}
      lastItem={null}
      pointing
      secondary
      totalPages={listings.length/5}
    />
  )


// *************** Pagination Logic ********************//
//********if John Cokos asks Davee wrote this^^^********//


  return(
    <Grid>
      <Grid.Row columns={1}>
        <Grid.Column textAlign="center" style={{
          margin : "auto"
          }}verticalAlign>
          {
            pageArray.map(item => {
              return (
                <ListCard item={item} />
              )
            })
          }
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={1}>
        <Grid.Column textAlign="center" width="12" style={{
          margin : "auto"
          }}verticalAlign>
          <PaginationButtons/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
export default ListItems



