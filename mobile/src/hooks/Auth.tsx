import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../service/api';

interface PropsAuth {
  user: userProps;
  token: string;
}

interface PropsAuthSingIn {
  email: string;
  password: string;
}
interface PropsAuthContext {
  user: userProps;
  SingIn(data: PropsAuthSingIn): Promise<void>;
  SingOut(): void;
  loading: boolean;
  // updateAvatar(data: userProps): void;
}
interface userProps {
  id: string;
  name: string;
  avatar: string;
  email: string;
}

const AuthContext = createContext<PropsAuthContext>({} as PropsAuthContext);

export const AuthProvider: React.FC = ({children}) => {
  const [data, setData] = useState<PropsAuth>({} as PropsAuth);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function storageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@Adoptme:token',
        '@Adoptme:user',
      ]);

      if (token[1] && user[1]) {
        setData({token: token[1], user: JSON.parse(user[1])});
      }
      setLoading(false);
    }

    storageData();
  }, []);

  const SingIn = useCallback(async ({email, password}) => {
    const respose = await api.post('session', {
      email,
      password,
    });

    const {token, user} = respose.data;

    await AsyncStorage.multiSet([
      ['@Adoptme:token', token],
      ['@Adoptme:user', JSON.stringify(user)],
    ]);

    setData({token, user});
  }, []);

  const SingOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@Adoptme:token', '@Adoptme:user']);

    setData({} as PropsAuth);
  }, []);

  return (
    <AuthContext.Provider value={{user: data.user, loading, SingIn, SingOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): PropsAuthContext {
  const context = useContext(AuthContext);

  return context;
}
