import React from 'react';
import {Select} from '@mantine/core';

const select = () => {
  return (
    <div>
      <Select 
      label="Your favorite framework/library"
      placeholder='Pick one'
      data={[
                                {value: 'react', label: 'React'},
                                {value: 'ng', label: 'Angular'},
                                {value: 'svelte', label: 'Svelte'},
                                {value: 'vue', lable: 'Vue'},
      ]}
      />
    </div>
  )
}

export default select
