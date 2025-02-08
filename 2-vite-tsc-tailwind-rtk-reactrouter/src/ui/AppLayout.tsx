import { Outlet, useNavigation } from 'react-router';
import Loader from './Loader';

export default function AppLayout() {
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'

return (
<div>
{isLoading && <Loader />}
<Outlet />
</div>
);
}
