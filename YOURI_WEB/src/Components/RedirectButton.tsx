interface Props {
  Title: string;
  onClick: () => void;
}
function RedirectButton({ Title, onClick }: Props) {
  return (
    <button className="Button" onClick={onClick}>
      {Title}
    </button>
  );
}

export default RedirectButton;
