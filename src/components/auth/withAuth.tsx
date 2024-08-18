import { ComponentType, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useLoadingComponent } from '@/hooks/useLoading';
import { useAuthStore } from '@/store/authStore';

function withAuth<P extends object>(WrappedComponent: ComponentType<P>) {
  const WithAuth: React.FC<P> = (props) => {
    const router = useRouter();
    const { isAuthenticated, isLoading } = useAuthStore();

    useEffect(() => {
      if (!isLoading && !isAuthenticated) {
        router.replace('/login');
      }
    }, [isAuthenticated, isLoading, router]);

    useLoadingComponent(isLoading);

    if (!isAuthenticated) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  WithAuth.displayName = `WithAuth(${getDisplayName(WrappedComponent)})`;

  return WithAuth;
}

function getDisplayName<P>(WrappedComponent: ComponentType<P>): string {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withAuth;
