import React from "react";
import Rating from "@material-ui/lab/Rating";

const Ratingdes2 = () => {
  const [value, setValue] = React.useState(0);
  return (
    <>
      <div>
          <Rating
            name="simple-controlled2"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
      </div>
    </>
  );
};

export default Ratingdes2;
