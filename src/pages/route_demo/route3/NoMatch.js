import React from 'react'

export default class NoMatch extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    404
                </ul>
                <hr />
                {this.props.children}
            </div>
        )
    }
}