import Dialog from "./Dialog";
export default function WelcomeDialog(props) {
  return (
    <>
      <Dialog
        color="orange"
        title="Welcome to sommoner's lift"
        message="소환사의 협곡에 오신 걸 환영합니다."
      ></Dialog>
      <button
        onClick={() => {
          alert(props.alertMessage);
        }}
      >
        {props.content}
      </button>
    </>
  );
}
