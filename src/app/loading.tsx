import '../scss/loading.scss';

export interface LoadingProps {
  loading: boolean;
}

export default function Loading({ loading }: LoadingProps) {
  return (
    <div id="loading" className={`loading ${loading ? '' : 'loading-active'}`}>
      Loading...
    </div>
  )
}