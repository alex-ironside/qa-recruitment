import { Stack, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { REQUEST_URL } from 'consts';

import { DetailsItem } from './components/Item/Item';

export function Details() {
  const { data, isLoading } = useQuery(
    ['details'],
    () => fetch(REQUEST_URL).then((r) => r.json()),
  );

  if (isLoading) {
    return <>loading...</>;
  }
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
          {data?.title}
        </DetailsItem>
        <DetailsItem title="category">
          {data?.category}
        </DetailsItem>
        <DetailsItem title="asset">
          {data?.asset}
        </DetailsItem>
        <DetailsItem title="comment">
          {data?.comment}
        </DetailsItem>
        <DetailsItem title="risk">
          {data?.risk}
        </DetailsItem>
        <DetailsItem title="quantity">
          {data?.quantity}
        </DetailsItem>
        <DetailsItem title="deadline">
          <>{data?.deadline}</>
        </DetailsItem>
        <DetailsItem title="Impact">
          {data?.impact}
        </DetailsItem>
        <DetailsItem title="Execution Probability">
          {data?.execProbability}
        </DetailsItem>
        <DetailsItem title="Severity">
          {data?.severity}
        </DetailsItem>
      </Stack>
    </Stack>
  );
}
