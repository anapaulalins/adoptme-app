import React, {createContext, useContext, useCallback} from 'react';
import api from '../service/api';

interface PropsPetProfileContext {
  getPetProfile(id: String): Promise<PropsPosts>;
}

interface PropsUser {
  name: string;
  avatar: string;
}

interface PropsImage {
  id: string;
  path: string;
}

interface PropsPosts {
  id: string;
  description: string;
  category: string;
  place: string;
  region: string;
  user: PropsUser;
  images: Array<PropsImage>;
  comments: Array<PropsComments>;
  created_at: string;
}

interface PropsComments {
  id: string;
  message: string;
  user: {
    name: string;
    avatar: string;
    created_at: string;
  };
  replyComment: [];
}

export const PetProfileContext = createContext<PropsPetProfileContext>(
  {} as PropsPetProfileContext,
);

export const PostProvider: React.FC = ({children}) => {
  const getPetProfile = useCallback(async (id) => {
    const {data} = await api.get(`posts/${id}`);

    return data;
  }, []);

  return (
    <PetProfileContext.Provider value={{getPetProfile}}>
      {children}
    </PetProfileContext.Provider>
  );
};

export function usePost(): PropsPetProfileContext {
  const context = useContext(PetProfileContext);

  return context;
}
