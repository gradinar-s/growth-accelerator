export type CellProps = {
  prefix: string;
  text: string;
  isCurrent: boolean;
  isPrevious: boolean;
  onClick: () => void;
};

export type BackgroundCellProps = {
  className: string;
  width: number;
  height: number;
};
