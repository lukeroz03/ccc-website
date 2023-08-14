import Member from "./Member";

function Members(props) {
  return (
    <>
      <h1>Members</h1>
      {props.members.map((member) => {
        return <Member member={member} />;
      })}
    </>
  );
}

export default Members;
