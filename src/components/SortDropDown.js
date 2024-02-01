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
} from '@gluestack-ui/themed';

const SortDropDown = ({ onValueChange, options, width, defaultValue }) => {
  return (
    <FormControl>
      <Select onValueChange={onValueChange} defaultValue ={defaultValue}>
        <SelectTrigger width={width}> 
          <SelectInput placeholder="Select Sorting" />
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            {options.map((option) => (
              <SelectItem key={option.value} label={option.label} value={option.value} />
            ))}
          </SelectContent>
        </SelectPortal>
      </Select>
    </FormControl>
  );
};

export default SortDropDown;
