import React, {Component} from 'react';

// this is a normal javascript function, not a react functional component
// const withClass = (WrappedComponent, className) => {
//     //this function returns the below function, which qualifies as a functional component
//     return (props) => (
//         <div className={className}>
//             <WrappedComponent {...props}/>
//         </div>
//     )
// };

const withClass = (WrappedComponent, className) => {
    return class extends Component {
        render () {
            return (
                <div className={className}>
                    <WrappedComponent {...this.props} />
                </div>
            )
        }
    }
}

export default withClass;



//Below is one way of creating a functional component

// import React from 'react';

// const WithClass = (props) => (
//     <div className={props.classes}>
//         {props.children}
//     </div>
// );

// export default WithClass;