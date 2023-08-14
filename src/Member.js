function Member(props) {
  return (
    <div>
      <div>{props.member.name}</div>
      <div>{props.member.link}</div>
      <div>{props.member.class}</div>
    </div>
  );
}

export default Member;
