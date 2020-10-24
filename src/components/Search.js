import React from 'react';
import { InputGroup, Button, FormControl } from 'react-bootstrap';

export default function Search() {
    return (
        <div>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Search for a Pokemon"
                    aria-label=""
                    aria-describedby=""
                />
                <InputGroup.Append>
                    <Button variant="outline-success">
                        Search
                </Button>
                </InputGroup.Append>
            </InputGroup>
            <hr />
        </div>
    )
}
