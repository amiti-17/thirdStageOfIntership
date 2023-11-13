import SwipeUpAltIcon from '@mui/icons-material/SwipeUpAlt';

export function WindAngleIcon({ angle }: { angle: number }) {
  return <SwipeUpAltIcon sx={{
    transform: `rotate(${angle}deg)`,
  }}/>
}