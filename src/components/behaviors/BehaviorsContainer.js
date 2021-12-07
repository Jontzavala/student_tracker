import React from 'react';
import { connect } from 'react-redux';
import { setBehaviors } from '../../redux/actions/behaviorsActions';

class BehaviorsContainer extends React.Component {

    componentDidMount(){
        this.props.dispatchSetBehaviors()
    }

    render(){
        return (
            <div>
                All Behaviors
                <div>
                    
                    {this.props.behaviors.map(behavior => <p key={behavior.id}>{behavior.student.name} - 
                    {behavior.behavior_notes}- 
                    {behavior.date}
                    </p>)}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        behaviors: state.behaviors
    }
}
function mapDispatchToProps(dispatch) {
    return {
        dispatchSetBehaviors: () => dispatch(setBehaviors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BehaviorsContainer)