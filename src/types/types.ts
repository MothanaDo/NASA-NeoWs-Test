export type ButtonComponentProps = {
  text: string;
  onClick: () => void;
  variant: "primary" | "secondary" | "download";
};

export type CloseApproachData = {
  orbiting_body: string;
};

export type NeoObject = {
  name: any;
  close_approach_data: CloseApproachData[];
};

export type BarChartProps = {
  data: any[];
};

export type ViewSwitcherProps = {
  view: "chart" | "table";
  setView: (view: "chart" | "table") => void;
  filteredData: any[];
};
