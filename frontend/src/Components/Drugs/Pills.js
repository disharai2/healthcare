import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Form, InputGroup, DropdownButton, Dropdown, ListGroup } from 'react-bootstrap';
import Autosuggest from 'react-autosuggest';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  background: 'linear-gradient(45deg, #FF6B6B, #FFD166)',
  margin: '0', // Add this to remove margin
};

const titleStyle = {
  color: '#fff',
  fontFamily: 'Source Sans Pro, Verdana, sans-serif',
  fontSize: '3.3125rem',
  fontWeight: 700,
};

const cardContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
};

const cardStyle = {
  maxWidth: '1000px',
  padding: '10px',
  backgroundColor: '#FF6B6B',
  borderRadius: '10px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  margin: '10px auto',
};

const rainbowTextStyle = {
  background: 'linear-gradient(45deg, #FF6B6B, #FFD166)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: '#fff',
  display: 'inline',
};

const listItemStyle = {
  padding: '10px',
  backgroundColor: '#fff',
  color: '#FF6B6B',
  textAlign: 'center',
  cursor: 'pointer',
  marginBottom: '10px',
  display: 'flex',
};

function Pills() {
  const [selectedFilter, setSelectedFilter] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : categories.filter(category =>
          category.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  const getSuggestionValue = (suggestion) => suggestion;

  const renderSuggestion = (suggestion) => (
    <div>
      {suggestion}
    </div>
  );

  const inputProps = {
    placeholder: 'Search',
    value: selectedFilter,
    onChange: (e, { newValue }) => {
      setSelectedFilter(newValue);
    },
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const categories = [
    "Bladder Cancer",
    "Brain Cancer",
    "Cervical Cancer",
    "Colorectal Cancer",
  ];

  const filterInputGroupStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  };

  const filteredCategories = selectedFilter
    ? categories.filter((category) => category === selectedFilter)
    : categories;

  return (
    <div style={containerStyle}>
      <div>
        <h1 style={titleStyle}>
          <span style={rainbowTextStyle}>DRUGS & MEDICATIONS A-Z</span>
        </h1>
        <h3 style={{ color: '#fff' }}>
          Trusted source for prescription drugs and medications.
        </h3>
      </div>
      <div style={cardContainerStyle}>
        <Card style={cardStyle}>
          <Card.Body>
            <Form>
              <InputGroup style={filterInputGroupStyle}>
                <Autosuggest
                  suggestions={suggestions}
                  onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                  onSuggestionsClearRequested={onSuggestionsClearRequested}
                  getSuggestionValue={getSuggestionValue}
                  renderSuggestion={renderSuggestion}
                  inputProps={inputProps}
                />
                <DropdownButton
                  variant="outline-secondary"
                  title="Filter"
                  onSelect={handleFilterChange}
                >
                  <Dropdown.Item eventKey="">All</Dropdown.Item>
                  {categories.map((category) => (
                    <Dropdown.Item key={category} eventKey={category}>
                      {category}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
              </InputGroup>
            </Form>
          </Card.Body>
        </Card>
        <div>
          {filteredCategories.map((category) => (
            <div key={category} style={listItemStyle}>
              <a
                href={`https://en.wikipedia.org/wiki/${category.replace(/ /g, '_')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pills;
