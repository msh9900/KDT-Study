export default function Where() {
  const where = prompt("어디로 갈까요? left / right");
  return (
    <>
      {where === "left" ? (
        <h1>이쪽은 왼쪽입니다</h1>
      ) : (
        <h1>이쪽은 오른쪽 입니다</h1>
      )}
    </>
  );
}
