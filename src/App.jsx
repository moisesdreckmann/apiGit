import './App.css'
import logo from './assets/logo.png'
import Input from './components/imput/index'
import RepoContainer from './components/repos/index'
import Button from './components/Button'
import { api } from './services/service'
import { useState } from 'react'

function App() {

  const [repos, setRepos] = useState([])
  const [currentRepo, setCurrentRepo] = useState('')

  const searchRepo = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`)

      const isExist = repos.find(repo => repo.id == data.id)
      
      if(!isExist) {
          setRepos(prev => [...prev, data])
          setCurrentRepo('')
      }

    } catch {
        alert('repositório não encontrado')
    }
  }

  return (
    <section>
      <img src={logo} alt="" className='imgLogo' />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={searchRepo}/>
      {repos.map(repo => (
        <RepoContainer key={repo.id} repo={repo} />
      ))}

    </section>
  )
}

export default App
