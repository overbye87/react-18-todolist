import React, { useState } from 'react'
import Select from 'react-select';
import matrix from '../matrix.json'

const levelOptions = [
  { label: 'junior', value: 'junior' },
  { label: 'middle', value: 'middle' },
  { label: 'senior', value: 'senior' },
]

const Matrix = () => {
  const [levelArr, setLevelArr] = useState([levelOptions[0].value])
  return (
    <>
      <h1>Matrix</h1>
      <Select
        className="select"
        options={levelOptions}
        isMulti
        onChange={(value) => setLevelArr(value ? value.map((item)=>item.value) : [])}
        defaultValue={levelOptions[0]}
      />
      <ul>
        {matrix.data.map((item) =>
          <li key={item.id}>
            {item.id}
            {' '}
            {item.title}
            <ul>
              {item.matrix_sections.map((item) =>
                <li>
                  {item.title}
                  {' '}
                  <ul>
                    {item.matrix_skills.map((item) =>
                      levelArr.map((level) => {
                        if (item.level === level)
                          return <li>
                            {item.title}
                            <div dangerouslySetInnerHTML={{ __html: item.description }}></div>
                          </li>
                        else return null
                      })
                    )}
                  </ul>
                </li>
              )}
            </ul>

          </li>
        )}
      </ul>
    </>
  )
}

export default Matrix