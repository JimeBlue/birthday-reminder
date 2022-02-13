function BirthdaysList(props) {
  console.log('🚀', props);
  return (
    <section>
      <p>{props.birthday.name}</p>
      <p>{props.birthday.birthday}</p>
    </section>
  );
}

export default BirthdaysList;
