import React, {useState, useEffect, useContext} from 'react';
import { useSelector } from 'react-redux';
import {Grid, Pagination} from 'semantic-ui-react'
import ListCard from './listcard.js'
function ListItems (){

  let listings = useSelector(state => state.listings)
  let itemsPerPage = 5;
// *************** Pagination Logic ********************//
//************this is horrible hot garbage**************//
  const [page, setPage] = useState(1);
  const [pageArray, setTempArray] = useState([])
  useEffect ( () => {
    let initial = itemPagina(listings, page)
    setTempArray(initial);
  },[listings]);
  useEffect ( () => {
    let clickedPage = itemPagina(listings, page)
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
        <Grid.Column textAlign="center" width="12" style={{
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



