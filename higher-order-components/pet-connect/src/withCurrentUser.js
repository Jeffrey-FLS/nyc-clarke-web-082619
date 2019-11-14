// HOC that takes a component
// makes sure that props.currentUser exists
// if it doesn't, then return a loader of some kind
// otherwise return the native component 
import React from 'react';

export default function withCurrentUser(MyComponent) {
    return class extends React.Component {
        render() {
            // console.log('FROM WRAPPED COMPONENT', this.props)
            // if(this.props.currentUser){
                return (
                    <>
                        { this.props.currentUser 
                            ? <div style={{"color": "red"}}>
                            <MyComponent {...this.props}/>
                        </div>
                        : <h1>LOADING</h1>}
                    </>
                )
            // } else {
            //     return <h1>LOADING</h1>
            // }
        }
    }
}