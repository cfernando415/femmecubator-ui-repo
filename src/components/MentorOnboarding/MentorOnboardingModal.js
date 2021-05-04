import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Modal,
  TextField,
  useMediaQuery,
  Typography,
  FormControl,
  InputLabel,
  FormHelperText,
  MenuItem,
  Select,
  Paper,
  Button,
  Popper,
} from '@material-ui/core';
import FocusTrapOverlay from './FocusTrapOverlay';
import Autocomplete from '@material-ui/lab/Autocomplete';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import useStyles from './MentorOnboardingModal.styles';
import timeZoneData from './timezoneArray';
import topSkills from './topSkills';
import { isEmpty } from 'lodash';

const BIO = 'Add a Bio (128 char)';
const SKILLS = 'Skills (eg. tech stack, anything you can offer help with.)';
const PHONE = 'Phone';
const TIME_ZONE = 'Your Time Zone';
const GOOGLE_MEET = 'Add a google meet:';
const MAX_CHARS = 'Must be no more than 128 characters';
const PHONE_VAL = 'Phone number is not valid';
const GOOGLE_MEET_VAL = 'Google meet link is not valid';

const OnboardingSchema = yup.object().shape({
  bio: yup.string().required('Bio is required').max(128, MAX_CHARS),
  skills: yup.string().required('One skill is required'),
  phone: yup
    .string()
    .required('Phone number is required')
    .matches(/^\+?1?[ .-]?\(?\d{3}\)?[ .-]?\d{3}[ .-]?\d{4}$/, PHONE_VAL),
  timezone: yup.string().required('Timezone is required'),
  googlemeet: yup
    .string()
    .required('Google meet is required')
    .matches(
      /^(http[s]?:\/\/)?(www\.)?(meet\.google\.com\/(?:\w{3}-\w{4}-\w{3}))?$/,
      GOOGLE_MEET_VAL
    ),
});

const MentorOnboardingModal = ({ opened, mockOnSubmit }) => {
  const isMobile = useMediaQuery('(max-width:1023px)');
  const {
    modal,
    labelText,
    textField,
    modalSubmit,
    subheading,
    heading,
    inputContainer,
    formContainer,
  } = useStyles({
    isMobile: isMobile,
  });

  const [open, setOpen] = useState(opened);

  const onSubmit = data => {
    console.log(data);
    setOpen(false);
  };

  const { register, handleSubmit, errors, setValue, watch } = useForm({
    resolver: yupResolver(OnboardingSchema),
  });

  const timezoneState = watch('timezone');

  // const [selected, setSelected] = useState(true);
  function handleSelect() {
    // setSelected(false);
  }

  const timezoneMenu = array => {
    return array.map(({ offset, name }) => (
      <option key={name} value={offset}>
        {offset} {name}
      </option>
    ));
  };

  const formContent = (
    <form
      className={formContainer}
      onSubmit={handleSubmit(mockOnSubmit || onSubmit)}
    >
      <div align="center">
        <h2 className={heading}>Almost there!</h2>
        <h5 className={subheading}>
          We'll need to confirm a few things about you.
        </h5>
      </div>
      <label htmlFor="bio" className={labelText}>
        {BIO}
      </label>
      <TextField
        {...{
          id: 'bio',
          multiline: true,
          rows: 2,
          rowsMax: 2,
          variant: 'outlined',
          className: textField,
          placeholder: 'Add bio here.',
          name: 'bio',
          inputRef: register,
          error: !isEmpty(errors.bio),
          helperText: errors.bio && errors.bio.message,
        }}
      />
      <label htmlFor="skills" className={labelText}>
        {SKILLS}
      </label>
      <input type="hidden" id="skills" name="skills" ref={register} />
      <FormControl className={inputContainer}>
        <Autocomplete
          {...{
            multiple: true,
            options: topSkills,
            getOptionLabel: option => option.title,
            filterSelectedOptions: true,
            onChange: (event, newValue) => {
              setValue(
                'skills',
                newValue.map(option => option.title),
                { shouldValidate: true }
              );
            },
            renderInput: params => (
              <TextField
                {...{
                  ...params,
                  variant: 'outlined',
                  className: textField,
                  placeholder: 'Select Skills',
                  error: !isEmpty(errors.skills),
                  helperText: errors.skills && errors.skills.message,
                }}
              />
            ),
          }}
        />
      </FormControl>
      <FormControl className={inputContainer}>
        <label htmlFor="phone" className={labelText}>
          {PHONE}
        </label>
        <TextField
          {...{
            id: 'phone',
            className: textField,
            placeholder: '718-777-4545',
            variant: 'outlined',
            name: 'phone',
            type: 'text',
            inputRef: register,
            error: !isEmpty(errors.phone),
            helperText: errors.phone && errors.phone.message,
          }}
        />
      </FormControl>
      <label htmlFor="timezone" className={labelText}>
        {TIME_ZONE}
      </label>
      <input type="hidden" id="timezone" name="timezone" ref={register} />
      <FormControl variant="outlined" className={inputContainer}>
        <Select
          {...{
            'data-testid': 'timezone',
            name: 'timezone',
            defaultValue: '',
            displayEmpty: true,
            inputProps: { hidden: true },
            native: true,
            style: { color: timezoneState ? 'black' : 'grey' },
            error: !isEmpty(errors.timezone),
            onChange: e => {
              setValue('timezone', e.target.value, { shouldValidate: true });
            },
          }}
        >
          <option value="" disabled>
            Select a time zone
          </option>
          {timezoneMenu(timeZoneData)}
        </Select>
        <FormHelperText error>
          {errors.timezone && errors.timezone.message}
        </FormHelperText>
      </FormControl>
      <label htmlFor="googlemeet" className={labelText}>
        {GOOGLE_MEET}
      </label>
      <TextField
        {...{
          id: 'googlemeet',
          placeholder: 'Add google meet link',
          variant: 'outlined',
          className: textField,
          name: 'googlemeet',
          type: 'text',
          inputRef: register,
          error: !isEmpty(errors.googlemeet),
          helperText: errors.googlemeet && errors.googlemeet.message,
        }}
      />
      <Button type="submit" className={modalSubmit}>
        I'M GOOD TO GO!
      </Button>
    </form>
  );

  return (
    <FocusTrapOverlay open={open}>
      <Paper className={modal}>{formContent}</Paper>
    </FocusTrapOverlay>
  );
};

export default MentorOnboardingModal;