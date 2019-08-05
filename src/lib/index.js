import Fieldset from './forms/fieldset';
import ProgressHeader from './forms/progress-header';
import Checkbox from './forms/checkbox';
import CheckboxField from './forms/checkbox-group/checkbox';
import CheckboxGroup from './forms/checkbox-group';
import DatePicker from './forms/datepicker';
import DateRangePicker from './forms/date-range-picker';
import Dropdown from './forms/dropdown';
import MultiDropdown from './forms/multi-dropdown';
import Error from './forms/error';
import Input from './forms/input';
import RadioButtonGroup from './forms/radio-button-group';
import Textarea from './forms/textarea';
import Rating from './forms/rating';
import LocationAutocomplete from './forms/location-autocomplete';

export { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

export default Fieldset;
export {
  ProgressHeader,
  Checkbox,
  CheckboxField,
  CheckboxGroup,
  DatePicker,
  DateRangePicker,
  Dropdown,
  MultiDropdown,
  Error,
  Input,
  RadioButtonGroup,
  Textarea,
  Rating,
  LocationAutocomplete,
};

export {
  isRequired,
  maxLength,
  minLength,
  isNumber,
  isMoney,
  isEmail,
  isPhoneNumber,
  length,
  isTime,
  isDivisibleBy,
  isPositive,
  hasDigit,
  hasLowercaseLetter,
  hasUppercaseLetter,
  hasSpecialCharacter,
  hasSpaceCharacter,
} from './validations';

export { normalizeDate, normalizeNumbers, normalizeTime, normalizePhone } from './normalizers';
