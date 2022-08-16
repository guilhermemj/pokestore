import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";

import { useState } from "react";

import type { CatalogProductProps } from "./CatalogProduct.types";

export function CatalogProduct({ details }: CatalogProductProps) {
  const [isHover, setIsHover] = useState(false);
  const productIndex = `#${details.id.padStart(3, "0")}`;

  return (
    <Card
      raised={isHover}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{ cursor: "pointer" }}
    >
      <CardMedia
        component="img"
        src={details.imageUrl}
        alt={details.name}
        style={{
          height: "200px",
          objectFit: "contain",
          backgroundColor: '#eee'
        }}
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {productIndex}
        </Typography>

        <Typography variant="h5">
          {details.name}
        </Typography>

        <Stack direction="row" spacing={1}>
          {details.types.map((type) => (
            // TODO: Change color based on category
            <Chip
              key={type}
              label={type}
              size="small"
              style={{ borderRadius: "4px" }}
            />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}

export default CatalogProduct;
