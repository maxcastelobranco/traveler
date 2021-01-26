import React from "react";
import { Pagination } from "@material-ui/lab";
import { useStyles } from "./styles";

interface CityGridPaginationProps {
  count: number;
  page: number;
  onChange(event: React.ChangeEvent<unknown>, value: number): void;
  disabled: boolean;
}

const CityGridPagination: React.FC<CityGridPaginationProps> = ({
  count,
  page,
  onChange,
  disabled,
}) => {
  const { container } = useStyles();

  return (
    <Pagination
      className={container}
      variant="outlined"
      color="secondary"
      showFirstButton
      showLastButton
      {...{ count, page, onChange, disabled }}
    />
  );
};

export default CityGridPagination;
