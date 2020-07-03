import React from "react"

// class ProfileStatus extends React.Component {
//   state = {
//     editMode: false,
//     status: this.props.status
//   };
//
//   activateEditMode = () => {
//     this.setState({
//       editMode: true
//     })
//   };
//
//   deactivateEditMode  = () => {
//     this.setState({
//       editMode: false
//     });
//     this.props.updateStatus(this.state.status)
//   };
//
//   onStatusChange = (e) => {
//     this.setState({
//       status: e.currentTarget.value
//     });
//   };
//
//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.status !== this.props.status) {
//       this.setState({
//         status: this.props.status
//       })
//     }
//   }
//
//   render() {
//     return (
//       <>
//         {this.state.editMode ? (
//           <div>
//             <input autoFocus={true} value={this.state.status} onChange={this.onStatusChange} onBlur={this.deactivateEditMode}/>
//           </div>
//         ) : (
//           <div>
//             <span onClick={this.activateEditMode}>{this.props.status || '---' }</span>
//           </div>
//         )}
//       </>
//     );
//   }
// }

const ProfileStatus = props => {
  const [editMode, setEditMode] = React.useState(false);
  const [status, setStatus] = React.useState(props.status);

  React.useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status)
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
      <>
        {editMode ? (
          <div>
            <input autoFocus={true} value={status} onChange={onStatusChange} onBlur={deactivateEditMode}/>
          </div>
        ) : (
          <div>
            <span onClick={activateEditMode}>{status || '---' }</span>
          </div>
        )}
      </>
    );
}

export default ProfileStatus;
