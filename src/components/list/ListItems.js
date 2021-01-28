import React, {useState, useEffect, useContext} from 'react';
import { useSelector } from 'react-redux';
import {Grid, Pagination} from 'semantic-ui-react'

import ListCard from './listcard.js'
import {LoginContext} from '../../context/auth/context.js';

function ListItems (props){

  const userContext = useContext(LoginContext);
  let listings = useSelector(state => state.listings)
  let category = useSelector(state => state.category)
  let filteredList = [...listings];

  if(category) {

    switch(category) {

      case 'myPost':
        filteredList = listings.filter( list => {
          return list.creatorUserId === userContext.user.mongoId;
        })
        break;

      case 'clothes':
        filteredList = listings.filter( list => {
          return list.categories === 'clothes';
        })
        break;

      case 'electronics':
        filteredList = listings.filter( list => {
          return list.categories === 'electronics';
        })
        break;

      case 'furniture':
        filteredList = listings.filter( list => {
          return list.categories === 'furniture';
        })
        break;

        case 'sports':
          filteredList = listings.filter( list => {
            return list.categories === 'sports';
          })
        break;

        case 'books':
          filteredList = listings.filter( list => {
            return list.categories === 'books';
          })
        break;

        case 'appliances':
          filteredList = listings.filter( list => {
            return list.categories === 'appliances';
          })
        break;

        case 'general':
          filteredList = listings.filter( list => {
            return list.categories === 'general';
          })
        break;

        case 'vehicles':
          filteredList = listings.filter( list => {
            return list.categories === 'vehicles';
          })
        break;

        case 'household':
          filteredList = listings.filter( list => {
            return list.categories === 'household';
          })
        break;

        case 'music':
          filteredList = listings.filter( list => {
            return list.categories === 'music';
          })
        break;

        case 'tools':
          filteredList = listings.filter( list => {
            return list.categories === 'tools';
          })
        break;

        case 'realestate':
          filteredList = listings.filter( list => {
            return list.categories === 'realestate';
          })
        break;

      default:
        console.log('default got targeted');
    }
  }


  let itemsPerPage = 5;


// *************** Pagination Logic ********************//
//************this is horrible hot garbage**************//
  const [page, setPage] = useState(1);
  const [pageArray, setTempArray] = useState([])

  useEffect ( () => {
    let initial = itemPagina(filteredList, page)
    setTempArray(initial);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[listings]);

  useEffect ( () => {
    let clickedPage = itemPagina(filteredList, page)
    setTempArray(clickedPage);
  // eslint-disable-next-line react-hooks/exhaustive-deps
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



