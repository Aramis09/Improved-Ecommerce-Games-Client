interface Props {
  styles: string;
  onClick: (params: any) => void;
}

export const RejectIcon = ({ styles, onClick }: Props) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    className={styles}
    onClick={onClick}
  >
    <path fill="none" stroke-width="2" d="M3,3 L21,21 M3,21 L21,3"></path>
  </svg>
);
