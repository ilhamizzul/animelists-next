import { GetProps, Input } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react'

const InputSearch = (params: {placeholder: string}) => {
  const { Search } = Input
  type SearchProps = GetProps<typeof Input.Search>;
  const router = useRouter()
  const onSearch: SearchProps['onSearch'] = (value, _e, info) => {
    if (value) {
      const route = `/search/${value}`
      router.push(route)
    }
  };
  return (
      <Search 
        placeholder={params.placeholder} allowClear onSearch={onSearch} 
        style={{ width: 200 }} 
        // className='w-full' 
      />
  )
}

export default InputSearch