import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import TabPlato from '../../design.system/TabPlato'
import LineBreak from '../../design.system/LineBreakePlato'
import PageHeaderPlato from '../../design.system/PageHeaderPlato'
import TabHeaderPlato from '../../design.system/TabHeaderPlato'
import DashboardTasks from '../../components/Dashboard/DashboardTasks'
import DashboardEvents from '../../components/Dashboard/DashboardEvents'
import DashboardBooks from '../../components/Dashboard/DashboardBooks'
import ColumnContainer from '../../design.system/ColumnContainer'
import userConnect from '../../utils/api.handlers/userConnect'
import { useQuery } from 'react-query'
import eventsConnect from '../../utils/api.handlers/eventsConnect'
import tasksConnect from '../../utils/api.handlers/tasksConnect'
import booksConnect from '../../utils/api.handlers/booksConnect'


const Dashboard = () => {

  const types = ['Overview', 'Progress']

  const [active, setActive] = useState(types[0])

  const { data: events } = useQuery('events', eventsConnect.getAllEvents)
  const { data: books } = useQuery('books', booksConnect.getAllBooks)
  const { isLoading, error, data: kanban } = useQuery('kanban', tasksConnect.getAllTasks)

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      
      <PageHeaderPlato>
        <h1>Dashboard</h1>
        <Navbar/>
      </PageHeaderPlato>
      <TabHeaderPlato>
        <div className='tabs'>
          {types.map((type) => (
            <TabPlato
              key={type}
              active={active === type && 'active'}
              onClick={() => setActive(type)}
            >
              <p className='label'>{type}</p>
            </TabPlato>
          ))}

          
        </div>
        </TabHeaderPlato>

        <LineBreak />    
        
        {active === types[0] && 

        <>
        <DashboardTasks kanban={kanban}/> 

        <DashboardEvents events={events}/>

        <DashboardBooks books={books}/>

        {/* Page Breather */}
        <ColumnContainer>
          <br/><br/><br/><br/>
        </ColumnContainer>
        
        </>
        }
    </div>
  )
}

export default Dashboard