import React from 'react'
import {Pagination, PaginationProps} from 'antd'

const PaginationComponent = ({totalPage, currentPage, setPage}: { totalPage?: number, currentPage?: number, setPage: React.Dispatch<React.SetStateAction<number>>}) => {

  const scrollTop = () => {
    scrollTo({
      behavior: 'smooth',
      top: 0
    })
  }

  const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
    if (type === 'prev') {
      return <a>Previous</a>;
    }
    if (type === 'next') {
      return <a>Next</a>;
    }
    return originalElement;
  };

  const onChange: PaginationProps['onChange'] = (pageNumber) => {
    setPage(pageNumber);
    scrollTop()
  };

  return (
    <div className='p-8'>
      <Pagination 
        align='center'
        size='default'
        showSizeChanger={false}
        showQuickJumper
        total={totalPage}
        itemRender={itemRender}
        onChange={onChange}
        current={currentPage}
      />
    </div>
    
  )
}

export default PaginationComponent