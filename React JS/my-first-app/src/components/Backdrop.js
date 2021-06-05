function Backdrop(props) {
  // html div onclick invokes onClick in props
  return <div className="backdrop" onClick={props.onCancel}/>;
}

export default Backdrop;
