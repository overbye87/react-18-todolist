import React, { useState } from 'react'
import Select from 'react-select'
import { options } from './constants';
import { IOption } from '../types';
import { useTypedDispatch } from '../store/hooks';
import { setFilter } from '../store/filterSlice';

interface IProps {
}

const Filter: React.FC<IProps> = (props) => {
  const [selectedFilter, setSelectedFilter] = useState<IOption | null>(options[0]);

  const dispatch = useTypedDispatch()

  const handleChange = (option: IOption | null) => {
    setSelectedFilter(option)
    if (option) {
      dispatch(setFilter(option.value))
    }
  }
  return (
    <div>
      {'Filter'}
      <Select
        className="select"
        options={options}
        value={selectedFilter}
        onChange={handleChange}
      />
    </div>
  )
}

export default Filter