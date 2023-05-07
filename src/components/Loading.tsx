import { CircularProgress } from 'react-cssfx-loading';

function Loading() {
  return (
    <div className="Loading">
      <CircularProgress
        color=" #ff3300"
        height="60px"
        width="60px"
      />
    </div>
  );
}

export default Loading;