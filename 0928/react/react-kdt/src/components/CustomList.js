function CustomList(props) {
  return (
    <ul>
      {props.arr.map((el, i) => {
        return <li key={i}>{el}</li>;
      })}
    </ul>
  );
}
export default CustomList;
