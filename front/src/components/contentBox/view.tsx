import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { ViewProps } from './model';
import { ContentHeaderBox, HeaderTabButton, HeaderTabIconButton } from './style';

export const View = <T, S>(props: ViewProps<T, S>) => (
  <Box>
    <ContentHeaderBox contentColor={props.color}>
      <Typography color={props.color} variant='h6'>
        {props.title}
      </Typography>
      <Box marginLeft='auto' display='flex' alignItems='center' gap={1}>
        {props.tabs && (
          <>
            {props.tabs.items.map((item, index) => (
              <HeaderTabButton
                key={item.text}
                contentColor={props.color}
                isActive={props.tabs?.activeTabKey === item.key}
                size='small'
                variant={props.tabs?.activeTabKey === item.key ? 'outlined' : undefined}
                onClick={() => props.tabs?.onTabClick(item.key, item.payload)}
              >
                {item.text}
              </HeaderTabButton>
            ))}
          </>
        )}
        {props.slider && (
          <Box display='flex' gap={1}>
            <HeaderTabIconButton
              contentColor={props.color}
              size='small'
              disabled={!props.onPreviousSliderClick}
              onClick={props.onPreviousSliderClick}
            >
              <ChevronLeft fontSize='inherit' />
            </HeaderTabIconButton>
            <HeaderTabIconButton
              contentColor={props.color}
              size='small'
              disabled={!props.onNextSliderClick}
              onClick={props.onNextSliderClick}
            >
              <ChevronRight fontSize='inherit' />
            </HeaderTabIconButton>
          </Box>
        )}
        {props.icon && (
          <Box display='flex' color={(theme) => theme.palette.text.disabled}>
            {props.icon}
          </Box>
        )}
      </Box>
    </ContentHeaderBox>
    <Box>{props.children}</Box>
  </Box>
);
