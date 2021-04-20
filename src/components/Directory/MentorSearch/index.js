import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, InputAdornment, useMediaQuery } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './MentorSearchBar.styles';

const MentorSearchBar = ({ setQuery, mockOnSubmit }) => {
  const isMobile = useMediaQuery('(max-width:769px)');
  const { searchBar, searchBtn, searchInput } = useStyles({ isMobile });
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    setQuery(data.search);
  };

  return (
    <form
      {...{
        className: searchBar,
        label: 'search',
        onSubmit: handleSubmit(mockOnSubmit || onSubmit),
      }}
    >
      <TextField
        {...{
          id: 'search',
          label: 'Search',
          inputRef: register,
          variant: 'outlined',
          name: 'search',
          margin: 'dense',
          placeholder: 'Name, Title, Keywords',
          className: searchInput,
          InputProps: {
            startAdornment: isMobile ? null : (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: isMobile ? (
              <Button
                {...{
                  'aria-label': 'search',
                  type: 'submit',
                  variant: 'contained',
                  className: searchBtn,
                }}
              >
                <SearchIcon />
              </Button>
            ) : null,
          },
        }}
      />
      {isMobile ? null : (
        <Button
          {...{
            type: 'submit',
            variant: 'contained',
            className: searchBtn,
          }}
        >
          Search
        </Button>
      )}
    </form>
  );
};

export default MentorSearchBar;