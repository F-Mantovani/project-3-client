import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import LineBreak from '../../design.system/LineBreakePlato'
import PageHeaderPlato from '../../design.system/PageHeaderPlato'
import TabHeaderPlato from '../../design.system/TabHeaderPlato'
import TabPlato from '../../design.system/TabPlato'
import { H1, Label } from '../../design.system/text.styling/styles'
import books from '../../books.json'
import NoBooks from '../../components/Books/NoBooks'

const types = ['To Read', 'Done']

const Books = () => {
  const [active, setActive] = useState(types[0])
  books = []
  
  return (
    <>
      <PageHeaderPlato>
        <H1>Books</H1>
        <Navbar />
      </PageHeaderPlato>
      <TabHeaderPlato>
        <div className='tabs'>
          {types.map((type) => (
            <TabPlato
              key={type}
              active={active === type && 'active'}
              onClick={() => setActive(type)}
            >
              <Label>{type}</Label>
            </TabPlato>
          ))}
        </div>
        <LineBreak />
      </TabHeaderPlato>
      {!books.length && <NoBooks />}
    </>
  )
}

export default Books
