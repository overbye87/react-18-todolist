import React, { useState } from 'react'
import Select from 'react-select'
import { options } from './constants';
import { IOption } from './types';

interface IProps {
  onSetFilter: (value: string) => void,
}

const Filter: React.FC<IProps> = (props) => {
  const [selectedFilter, setSelectedFilter] = useState<IOption | null>(options[0]);

  const handleChange = (option: IOption | null) => {
    setSelectedFilter(option)
    if (option) {
      props.onSetFilter(option?.value)
    }
  }
  return (
    <div>
      <Select
        options={options}
        value={selectedFilter}        
        onChange={handleChange}
      />
    </div>
  )
}

export default Filter