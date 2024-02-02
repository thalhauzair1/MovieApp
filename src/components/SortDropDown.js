import React from 'react';
import {
  FormControl,
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
  Icon,
  SelectIcon,
  ChevronDownIcon,
} from '@gluestack-ui/themed';

const SortDropDown = ({ onValueChange, options, width, defaultValue }) => {
  return (
    <FormControl pt={20} alignItems='center'>
      <Select onValueChange={onValueChange} defaultValue={defaultValue} w={150} >
        <SelectTrigger width={width} borderColor='$indigo600'>
          <SelectInput placeholder="Select Type" />
          <SelectIcon mr="$3">
            <Icon as={ChevronDownIcon} color='$indigo600' />
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            {options.map((option) => (
              <SelectItem key={option.value} label={option.label} value={option.value}  $active-bgColor='$indigo400'/>
            ))}
          </SelectContent>
        </SelectPortal>
      </Select>
    </FormControl>
  );
};

export default SortDropDown;
