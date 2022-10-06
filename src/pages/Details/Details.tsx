import { Stack, Typography } from '@mui/material';

import { DetailsItem } from './components/Item/Item';

export function Details() {
  return (
    <Stack
      alignItems="center"
      mt={1}
    >
      <Typography
        component="h1"
        variant="h5"
      >
        Details
      </Typography>
      <Stack
        width="80%"
        alignContent="center"
      >
        <DetailsItem title="title">
          title
        </DetailsItem>
        <DetailsItem title="category">
          category
        </DetailsItem>
        <DetailsItem title="asset">
          asset
        </DetailsItem>
        <DetailsItem title="comment">
          comment
        </DetailsItem>
        <DetailsItem title="risk">
          risk
        </DetailsItem>
        <DetailsItem title="quantity">
          quantity
        </DetailsItem>
        <DetailsItem title="deadline">
          deadline
        </DetailsItem>
        <DetailsItem title="Impact">
          Impact
        </DetailsItem>
        <DetailsItem title="Execution Probability">
          Execution Probability
        </DetailsItem>
        <DetailsItem title="Severity">
          Severity
        </DetailsItem>
      </Stack>
    </Stack>
  );
}
