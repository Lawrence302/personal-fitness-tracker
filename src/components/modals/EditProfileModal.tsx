import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { initDB } from "../../lib/db";
import { UserInfo } from "../../lib/types";

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EditProfileModal = ({ isOpen, onClose }: EditProfileModalProps) => {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<UserInfo>({
    id: "user",
    name: "",
    age: undefined,
    height: undefined,
    weight: undefined,
    goals: "",
  });

  // Fetch user profile from IndexedDB
  useEffect(() => {
    if (!isOpen) return;

    const fetchProfile = async () => {
      setLoading(true);
      const db = await initDB();
      const existingProfile = await db.get("userInfo", "user");

      if (existingProfile) {
        setProfile(existingProfile);
      } else {
        // No user data yet → keep empty defaults
        setProfile({
          id: "user",
          name: "",
          age: undefined,
          height: undefined,
          weight: undefined,
          goals: "",
        });
      }

      setLoading(false);
    };

    fetchProfile();
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]:
        e.target.type === "number"
          ? value === ""
            ? undefined
            : Number(value)
          : value,
    }));
  };

  const handleSave = async () => {
    const db = await initDB();
    await db.put("userInfo", profile);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black/70 flex items-center justify-center z-50'>
      <div className='bg-zinc-950 w-full max-w-lg rounded-xl p-6 relative'>
        {/* Close */}
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-zinc-400 hover:text-white'
        >
          <X size={22} />
        </button>

        <h2 className='text-2xl font-bold text-white mb-4'>Edit Profile</h2>

        {loading ? (
          <p className='text-zinc-400'>Loading profile...</p>
        ) : (
          <div className='space-y-4'>
            {/* Display Name */}
            <div>
              <label className='text-sm text-zinc-400'>Display Name</label>
              <input
                name='displayName'
                value={profile.name}
                onChange={handleChange}
                className='w-full mt-1 bg-zinc-900 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500'
                placeholder='Your name'
              />
            </div>

            {/* Age */}
            <div>
              <label className='text-sm text-zinc-400'>Age</label>
              <input
                type='number'
                name='age'
                value={profile.age ?? ""}
                onChange={handleChange}
                className='w-full mt-1 bg-zinc-900 text-white rounded px-3 py-2'
                placeholder='Age'
              />
            </div>

            {/* Height */}
            <div>
              <label className='text-sm text-zinc-400'>Height (cm)</label>
              <input
                type='number'
                name='height'
                value={profile.height ?? ""}
                onChange={handleChange}
                className='w-full mt-1 bg-zinc-900 text-white rounded px-3 py-2'
                placeholder='Height in cm'
              />
            </div>

            {/* Weight */}
            <div>
              <label className='text-sm text-zinc-400'>Weight (kg)</label>
              <input
                type='number'
                name='weight'
                value={profile.weight ?? ""}
                onChange={handleChange}
                className='w-full mt-1 bg-zinc-900 text-white rounded px-3 py-2'
                placeholder='Weight in kg'
              />
            </div>

            {/* Goal */}
            <div>
              <label className='text-sm text-zinc-400'>Fitness Goal</label>
              <textarea
                name='goal'
                value={profile.goals}
                onChange={handleChange}
                rows={3}
                className='w-full mt-1 bg-zinc-900 text-white rounded px-3 py-2 resize-none'
                placeholder='E.g. Build strength, lose fat, master calisthenics'
              />
            </div>

            {/* Actions */}
            <div className='flex justify-end gap-2 pt-4'>
              <button
                onClick={onClose}
                className='px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded'
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className='px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-black rounded font-bold'
              >
                Save Profile
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditProfileModal;
