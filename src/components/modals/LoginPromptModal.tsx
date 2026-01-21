import { SignedOut, SignInButton } from "@clerk/clerk-react";

interface LoginPromptModalPromps {
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
}
const LoginPromptModal = ({ setDisplay }: LoginPromptModalPromps) => {
  const closeModal = () => setDisplay("Home");

  //   const handleSignIn = () => {
  //     // Replace with your sign-in logic
  //     alert("Redirecting to Sign In...");
  //   };

  return (
    <>
      {/* Modal */}

      <div
        className='fixed inset-0 bg-black/90 flex items-center justify-center z-50'
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className='bg-zinc-950 text-white rounded-lg w-80 p-6 space-y-4'
          onClick={(e) => e.stopPropagation()} // Prevent modal close on inner click
        >
          <h2 className='text-xl font-bold'>Sign In Required</h2>
          <p>You need to sign in to access your AI coach.</p>
          <div className='flex justify-end space-x-2'>
            <button
              onClick={closeModal}
              className='px-4 py-2 bg-gray-700 rounded hover:bg-gray-600'
            >
              Cancel
            </button>

            <SignedOut>
              <SignInButton mode='modal'>
                <button className='px-4 py-2 bg-blue-600 rounded hover:bg-blue-700'>
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPromptModal;
