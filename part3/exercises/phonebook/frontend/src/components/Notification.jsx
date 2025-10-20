const Notification = ({ noti }) => {
  if (Object.keys(noti).length === 0) {
    return null;
  }
  let styleBinary = { background: "lightgray" };
  if (noti.success) {
    styleBinary = { ...styleBinary, color: "green", border: "2px green solid" };
  } else {
    styleBinary = { ...styleBinary, color: "red", border: "2px red solid" };
  }
  return <span style={styleBinary}>{noti.message}</span>;
};
export default Notification;
