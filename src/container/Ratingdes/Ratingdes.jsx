import React from "react";
import Rating from "@material-ui/lab/Rating";

const Ratingdes = () => {
  const [value, setValue] = React.useState(0);
  return (
    <>
      <div>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
      </div>
    </>
  );
};

export default Ratingdes;
