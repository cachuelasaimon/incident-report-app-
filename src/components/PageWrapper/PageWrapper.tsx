import { Container, Typography } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

interface IdkSomething {
  title: string;
  subtitle?: string;
}

const PageWrapper: FC<PropsWithChildren<IdkSomething>> = ({
  children,
  title,
  subtitle,
}) => {
  return (
    <Container sx={{ pt: 5, px: 3 }}>
      <Typography variant='h3' sx={{ mb: 2 }}>
        {title}
      </Typography>
      <Typography>{subtitle}</Typography>
      {children}
    </Container>
  );
};

export default PageWrapper;
