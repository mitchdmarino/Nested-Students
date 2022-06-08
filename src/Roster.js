import React, {Component} from 'react'
import Student from './Student.js'


class Roster extends Component {
    render() {
        const studentInfo = this.props.students.map((student, index) => {
            return <Student 
            key={`Student-${index}`}
            student={student} 
            />
        })
        return (
            <>
            <h2>Roster:</h2>
            <hr/>
            {studentInfo}
            </>
        )
    }
}





export default Roster