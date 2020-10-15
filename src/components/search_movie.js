import React from 'react';
import {InputGroup,FormControl,Button,Form} from 'react-bootstrap';

function SearchBox(props) {

  return (
    <div>
        <Form action="" onSubmit={props.handleSubmit}>
          <InputGroup className="mb-3">
              <FormControl
              placeholder="Search Movies"
              aria-label="search Movie"
              
              onChange={props.handleSearchInput}
              aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
              <Button variant="danger" type="submit">Filter</Button>
              </InputGroup.Append>
          </InputGroup>
        </Form>
        <br/>
    </div>
  )

}

export default SearchBox;