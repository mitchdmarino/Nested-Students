import React, {Component} from 'react'
import Score from './Score'

class Student extends Component {
    render() {
        const scores = this.props.student.scores.map((score,index) => {
            return (
                <Score 
                key={`Score-${index}`}
                score={score.score} date={score.date}
            />
            )
        })
        return (
            <>
            <h3>{this.props.student.name}</h3>
            <p>{this.props.student.bio}</p>
            {scores}                  
            
            </>
        )
    }
}


export default Student