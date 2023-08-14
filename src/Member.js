function Member(props) {
  return (
    <>
      <div>{props.member.name}</div>
      <div>{props.member.link}</div>
      <div>{props.member.grade}</div>
    </>
  );
}

export default Member;
