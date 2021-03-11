import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { ME } from '../graphql/auth';
import { MeType } from '../types';

function useAdmin() {
  const router = useRouter();
  const { data, loading } = useQuery<{ Me: { me: MeType | null } }>(ME);

  useEffect(() => {
    if (!loading && !data?.Me.me) {
      router.replace('/');
    }
  }, [loading, data, router]);
}

export default useAdmin;
