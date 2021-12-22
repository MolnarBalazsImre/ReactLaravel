import axios from 'axios'
import React, { Component } from 'react'


class SingleProject extends Component {
    constructor()
    {
        super()
        this.state = {
            projects : {},
            tasks: []
        }
    }

    componentDidMount ()
    {
        const projectId = this.props.match.params.id  

        axios.get('/api/projects/${projectId}').then(res => {
            this.setState({
                projects: res.data,
                tasks: res.data.tasks
            })
        })
    }

    render() {
        const { projects,tasks } = this.state
        return(
            <div className='container py-4'>
                <div className='row justify-content-content-center'>
                    <div className='col-md-8'>
                        <div className='card'>
                            <div className='card-header'>${project.name}</div>
                            <div className='card-body'>
                                <p>{project.description}</p>
                                <button className='btn btn-primary btn-sm'>Mark as completed</button>
                                <hr />
                                <ul className='list-group my-3'>
                                    {tasks.map(tasks => (
                                        <li 
                                        className='list-group-item d-flex justify-content-between align-item'
                                        key={task.is}
                                        >
                                            {tasks.title}
                                            <button className='btn btn-primary btn-sm'>
                                                Mark as completed
                                            </button>
                                         </li>
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

export default SingleProject