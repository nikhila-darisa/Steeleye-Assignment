import React from 'react'

class SomeListComponent extends React.Component {
    constructor(props) {
        super()
        this.state = {
            items: props.items,
        }
    }
    static getDerivedStateFromProps(props, state) {
        return state.items = props.items
    }
    shouldComponentUpdate(nextProps) {
        return nextProps.counter !== this.props.counter
    }
    handleClick(index) {
        this.props.onClick(index)
    }
    renderElement(item, index) {
        return <li key={index} onClick={() => this.handleClick(index)}>{item.text}</li>
    }
    render() {
        return (
            <div>
                <ul style={{ backgroundColor: 'red', height: 100 }}>
                    {this.state.items.map((item, i) => this.renderElement(item, i))}
                </ul>
            </div>
        )
    }
}

export default SomeListComponent