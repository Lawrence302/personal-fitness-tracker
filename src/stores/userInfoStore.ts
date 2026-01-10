import { create } from "zustand";

import type { UserInfo, TierInfo } from "../lib/types";

interface UserInfoStoreProps {
  userInfo: UserInfo | null;
  setUserInfo: (info: UserInfo) => void;
  updateTierInfo: (tierInfo: TierInfo) => void;
}

const useUserInfoStore = create<UserInfoStoreProps>((set) => ({
  userInfo: null,
  setUserInfo: (info: UserInfo) => set({ userInfo: info }),
  updateTierInfo: (tierInfo: TierInfo) =>
    set((state) => ({
      userInfo: state.userInfo ? { ...state.userInfo, tierInfo } : null,
    })),
}));

export default useUserInfoStore;
