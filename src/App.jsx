
import { useAuthContext } from './hooks/useAuthContext'
import { useLogout } from './hooks/useLogout'

function App() {
  const {logout} = useLogout()
  const {user} = useAuthContext()
function handleClick(){
  logout()}

  return (
    <>
     <button onClick={handleClick} className='bg-red-400 p-2 rounded'>logout</button>
    </>
  )
}

export default App
