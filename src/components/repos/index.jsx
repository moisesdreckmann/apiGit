import './index.css'

function RepoContainer({repo}) {
    return(
        <div>
            <h3>{repo.name}</h3>
            <p>{repo.full_name}</p>
            <div className='containerLink'>
            <a href={`http://github.com/${repo.full_name}`} target='_blank' rel="noreferrer">Ver Repositório</a>
            </div>
            <hr />
        </div>
    )
}

export default RepoContainer