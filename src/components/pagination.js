import React from 'react';
import {Container,Pagination} from 'react-bootstrap';

function MoviePagination(props) {

    const page_links = [];
    
    for(let number = 1; number <= props.pages + 1; number++) {

        let active_pagination = props.current_page === number ? 'active' : '';

        page_links.push(
            <Pagination.Item key={number} active={active_pagination} onClick={() => props.nextPage(number)}>
                {number}
            </Pagination.Item>
        );
    }

    return (
        <div>

            <Container>
                <Pagination>
                    {props.current_page > 1 ? <Pagination.Item  onClick={() => props.nextPage(props.current_page - 1)}>
                    Prev </Pagination.Item> : ''}
                    {page_links}
                    {props.current_page < props.pages + 1 ? <Pagination.Item  onClick={() => props.nextPage(props.current_page + 1)}>
                    Next</Pagination.Item> : ''}
                </Pagination>
            </Container>

        </div>
    )

}

export default MoviePagination;