import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ProjectsList extends Component {
    constructor()
    {
        super()
        this.state = {
            projects : []
        }
    }

    componentDidMount ()
    {
        axios.get('/api/projects').then(res => {
            this.setState({
                projects: res.data
            })
        })
    }

    render() {
        const { projects } = this.state
        return(
            <div className='container py-4'>
                <div className='row justify-content-content-center'>
                    <div className='col-md-8'>
                        <div className='card'>
                            <div className='card-header'>All projects</div>
                            <div className='card-body'>
                                <Link className='btn btn-primary btn-sm mb-3' to='/create'>
                                    Create new project
                                </Link>
                                <ul className='list-group list-group-flush'>
                                    {projects.map(project => (
                                        <Link 
                                        className='list-group-item list-group-item-action d-flex justify-content'
                                        to={`/${project.id}`}
                                        key={project.id}
                                        >
                                            {project.name}
                                            <span className='badge badge-primary badge-pill'>
                                                {PromiseRejectionEvent.task_count}
                                            </span>
                                         </Link>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectsList;