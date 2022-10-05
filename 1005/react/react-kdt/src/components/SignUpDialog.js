import Dialog from "./Dialog";
export default function SignUpDialog() {
  return (
    <Dialog
      color="skyblue"
      title={<button onClick={() => alert("welcome!")}>웰컴버튼</button>}
      message="회원 가입이 필요한 서비스 입니다"
    >
      <a href="#">회원 가입 페이지로 이동</a>
    </Dialog>
  );
}
